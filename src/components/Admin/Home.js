import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage] = useState(7); // Số lượng mặt hàng trên mỗi trang

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page) => {
        try {
            const response = await axios.get('http://localhost:8081/api/items', {
                params: {
                    page: page,
                    limit: itemsPerPage
                }
            });
            setData(response.data.items);
            setCurrentPage(response.data.currentPage);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(() => {
                // Cập nhật danh sách sau khi xóa
                setData(data.filter(item => item.id !== id));
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
                                                <td>{item.image}</td>
                                                <td>{item.category_id}</td>
                                                {/* <td>{item.brand_id}</td> */}
                                                <td>
                                                    <Link to={`/admin/read/${item.id}`} className='btn btn-sm btn-info'>Read</Link>
                                                    <Link to={`/admin/edit/${item.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                                    <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="pagination">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="btn btn-primary"
                                >
                                    Previous
                                </button>
                                <span>Page {currentPage} of {totalPages}</span>
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="btn btn-primary"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
