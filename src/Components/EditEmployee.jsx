import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import API from "../Axios";


const EditEmployee = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        contact: ""
    })


    useEffect(() => {
        API.get(`/${id}`)
            .then(res => {
                setEmployee({
                    name: res.data.name,
                    email: res.data.email,
                    contact: res.data.contact
                })
            })
            .catch(err => console.log(err));
    }, [id])




    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevValue => {
            return { ...prevValue, [name]: value }
        })
    }

    const add = (e) => {
        e.preventDefault();
        if (employee.name === "" || employee.email === "" || employee.contact === "") {
            alert("All the fields are mandatory!");
            return;
        }

        props.updateEmployeeHandler(employee, id);

        setEmployee({
            name: "",
            email: "",
            contact: ""
        });
        navigate("/");
    };

    return (
        <form className="mx-5 my-3" onSubmit={add}>
            <h2>Edit Employee</h2>
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
            <button type="submit" className="btn float-end btn-primary">Update</button>
        </form>
    );
}

export default EditEmployee;