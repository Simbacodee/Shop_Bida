import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage] = useState(7);

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
                setData(data.filter(item => item.id !== id));
            })
            .catch(err => console.log(err));
    };
    // Hàm định dạng tiền tệ
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);
    };
    return (
        <div className="table-container">
            <div className="bg-white rounded p-3 shadow-sm">
                <h2 className="mb-3">Danh Sách Sản Phẩm</h2>
                <Link to="/admin/create" className="btn btn-success mb-3">Thêm sản phẩm</Link>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Mã sản phẩm</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Danh mục</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{formatCurrency(item.price)}</td>
                                <td><img src={`http://localhost:8081/images/${item.image}`} alt={item.name} /></td>
                                <td>{item.category_id}</td>
                                <td className="action-buttons css-button">
                                    <Link to={`/admin/read/${item.id}`} className="btn btn-sm btn-info">Đọc</Link>
                                    <Link to={`/admin/edit/${item.id}`} className="btn btn-sm btn-primary">Chỉnh sửa</Link>
                                    <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-danger">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="btn btn-primary"
                    >
                        Trước
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="btn btn-primary"
                    >
                        Sau
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
