import { useNavigate } from "react-router-dom";

const EmployeeCard = (props) => {

    const navigate = useNavigate();

    const updateHandler = (id) => {
        navigate(`/edit/${id}`);
    }

    const { id, name, email, contact } = props.employee;

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{contact}</td>
            <td>
                <button type="button" onClick={() => updateHandler(id)} className="btn me-1 btn-outline-primary">Update</button>
                <button type="button" onClick={() => props.deleteHandler(id)} className="btn btn-outline-danger">Delete</button>
            </td>
        </tr>
    )
}

export default EmployeeCard;