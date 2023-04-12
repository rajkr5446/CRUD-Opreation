import { Link } from "react-router-dom"
import EmployeeCard from "./EmployeeCard"

const EmployeeList = (props) => {

    const deleteEmployeeHandler = (id) => {
        props.deleteEmployeeHandler(id);
    };

    const renderCard = props.employees.map(employee => {
        return <EmployeeCard deleteHandler={deleteEmployeeHandler} employee={employee} key={employee.id} />
    })

    return (
        <>
            <h2>Employee List</h2>
            <Link to="/add">
                <button className="btn btn-primary">Add Employee</button>
            </Link>

            <table className="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCard}
                </tbody>
            </table>
        </>
    )
}

export default EmployeeList;