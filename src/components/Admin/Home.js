import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div>
                <div>
                    <div className="table-container">
                        <div className="bg-white rounded p-3">
                            <h2>DANH SÁCH SẢN PHẨM</h2>
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
                                    {data.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td>{item.price}</td>
                                                {/* <td>
                                                    {item.image ? (
                                                        <img src={item.image} alt="Item" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }} />
                                                    ) : (
                                                        'No image'
                                                    )}
                                                </td> */}
                                                <td>{item.image}</td>
                                                <td>{item.category_id}</td>
                                                <td>{item.brand_id}</td>
                                                <td>
                                                    <Link to={`/admin/read/${item.id}`} className='btn btn-sm btn-info'>Read</Link>
                                                    <Link to={`/admin/edit/${item.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                                    <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-danger" >Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
