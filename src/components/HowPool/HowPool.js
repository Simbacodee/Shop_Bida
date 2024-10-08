// src/components/HowPool/HowPool.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import banner4 from '../../Assets/Trangchu/banner_4.jpg';
import './HowPool.css';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const HowPool = () => {
    const [data17, setData17] = useState([]);
    const { sortOrder } = useOutletContext();

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '17' }
        })
            .then(res => {
                const items = res.data.filter(item => item.category_id === 17);
                if (sortOrder === 'price-low-to-high') {
                    items.sort((a, b) => a.price - b.price);
                } else if (sortOrder === 'price-high-to-low') {
                    items.sort((a, b) => b.price - a.price);
                }
                setData17(items);
            })
            .catch(err => console.log('Error fetching data:', err));
    }, [sortOrder]);

    return (
        <div>
            <Helmet>
                <title>Dòng cơ How </title>
            </Helmet>
            <div className='banner'>
                <p>Dòng cơ How Cues với đại diện thương hiệu tại Việt Nam là cơ thủ Dương Quốc Hoàng.</p>
                <img src={banner4} alt="How Cue Banner" />
            </div>
            <div className='content-products'>
                <div className='products'>
                    {data17.map((item) => (
                        <div className='products-item' key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <div className="image-container">
                                    <Link to={`/product/${item.id}`}>
                                        <Card.Img variant="top" src={`http://localhost:8081/images/${item.image}`} className="image-container" />
                                    </Link>
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
    );
};

export default HowPool;
