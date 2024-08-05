import { useEffect, useState } from "react";
import axios from 'axios';
import './ManageItem.css';
import { Link } from "react-router-dom";
const ManageItem = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <div className="table-container">
                <div className="bg-white rounded p-3">
                    <h2>Items list</h2>
                    <Link to="/admin/create" className="btn btn-success">Create+</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Category</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.image}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.brand_id}</td>
                                    <td>
                                        <button className="btn btn-sm btn-info">Read</button>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ManageItem;