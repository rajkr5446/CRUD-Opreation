import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const AddEmployee = (props) => {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        contact: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setEmployee(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    function add(e) {
        e.preventDefault();
        if (employee.name === "" || employee.email === "" || employee.contact === "") {
            alert("All the fields are mandatory!");
            return
        }
        props.addEmployeetHandler(employee);
        setEmployee({
            name: "",
            email: "",
            contact: ""
        });
        navigate("/");
    };

    return (
        <form className="mx-5 my-3" onSubmit={add}>
            <h2>Add Employee</h2>
            <div className="form-floating mb-3">
                <input onChange={handleChange} autoComplete="off" value={employee.name} type="text" name="name" className="form-control" id="floatingInput" placeholder="Raja Kumar" />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} autoComplete="off" value={employee.email} type="email" name="email" className="form-control" id="floatingEmail" placeholder="rajkr5446@gmail.com" />
                <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleChange} autoComplete="off" value={employee.contact} type="text" name="contact" className="form-control" id="floatingContact" placeholder="1234567890" />
                <label htmlFor="floatingContact">Contact</label>
            </div>
            <Link to="/"><button type="button" className="btn btn-secondary">Back</button></Link>
            <button type="submit" className="btn float-end btn-primary">Add</button>
        </form>
    );
}

export default AddEmployee;