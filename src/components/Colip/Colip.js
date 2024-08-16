
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './Colip.css';
import { Link } from "react-router-dom";
// import '../HowPool/HowPool.css';
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};
const Colip = (props) => {
    const [data4, setData4] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '4' }
        })
            .then(res => {
                const items = res.data;
                setData4(items.filter(item => item.category_id === 4));
            })
            .catch(err => console.log('Error fetching data:', err));
    }, []);
    return (
        <div>
            <div className='content-products'>
                <div className="text">
                    <p>Dòng cơ Rhino, 1 thương hiệu con của Mit Cues. Với giá thành đầy cạnh tranh và các mẫu cơ carbon đã được giới trẻ, đặc biệt là học sinh – sinh viên quan tâm.</p>
                </div>
                <div className='products'>
                    {data4.map((item) => (
                        <div className='products-item' key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <div className="image-container">
                                    <Link to={`/product/${item.id}`}> <Card.Img variant="top" src={`http://localhost:8081/images/${item.image}`} className="image-container" /></Link>
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{formatCurrency(item.price)}đ</Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Colip;