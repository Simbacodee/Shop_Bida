import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import banner8 from '../../Assets/Trangchu/banner_8.jpg';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const Phanhay = (props) => {
    const [data6, setData6] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '6' }
        })
            .then(res => {
                const items = res.data;
                setData6(items.filter(item => item.category_id === 6));
            })
            .catch(err => console.log('Error fetching data:', err));
    }, []);
    return (
        <div>
            <Helmet>
                <title>Phá - Nhảy | Hoàng Sao Shop </title>
            </Helmet>
            <div className='content-products'>
                <div className="text">
                    <p>Tại Hoàng Sao Shop, quý khách hàng có thể dễ dàng tìm cho mình các mẫu cơ bida phá nhảy từ bình dân tới cao cấp như Cuetec Propel, BK Rush, phá Peri hay BK 3 khúc…</p>
                </div>
                <div className='banner'>
                    <img src={banner8} alt="How Cue Banner" />
                </div>
                <div className='products'>
                    {data6.map((item) => (
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
export default Phanhay;