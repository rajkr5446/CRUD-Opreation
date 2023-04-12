import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import API from "./Axios";
import Header from "./Components/Header";
import EmployeeList from "./Components/EmployeeList"
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";




const App = () => {

  const [employees, setEmployees] = useState([]);

  //Fetching Employee List
  const getEmployeeList = async () => {
    const response = await API.get();
    return response.data;
  }




  useEffect(() => {
    const getAllList = async () => {
      const allList = await getEmployeeList();
      if (allList) setEmployees(allList);
    };

    getAllList();
  }, []);

  const addEmployeetHandler = async (employee) => {
    const response = await API.post("", employee);
    setEmployees(prevValue => {
      return [...prevValue, response.data]
    });
  };

  const deleteEmployeeHandler = async (id) => {
    await API.delete(`/${id}`);
    const newEmployeeList = employees.filter((employee) => {
      return employee.id !== id;
    });
    setEmployees(newEmployeeList);
  };

  const updateEmployeeHandler = async (employee, ID) => {
    const response = await API.put(`/${ID}`, employee);
    const { id, name, email, contact } = response.data;

    const updatedEmployees = employees.map(employee => {
      return id === employee.id ? { id, name, email, contact } : employee
    })

    setEmployees(updatedEmployees);
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EmployeeList deleteEmployeeHandler={deleteEmployeeHandler} employees={employees} />} />
        <Route path="/add" element={<AddEmployee addEmployeetHandler={addEmployeetHandler} />} />
        <Route path="/edit/:id" element={<EditEmployee updateEmployeeHandler={updateEmployeeHandler} />} />
      </Routes>
    </Router>
  )

}

export default App;