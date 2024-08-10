import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import banner4 from '../../Assets/Trangchu/banner_4.jpg';
import './HowPool.css'
import { Link } from "react-router-dom";
// Định nghĩa hàm formatCurrency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const HowPool = () => {
    const [data17, setData17] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '17' }
        })
            .then(res => {
                const items = res.data;
                setData17(items.filter(item => item.category_id === 17));
            })
            .catch(err => console.log('Error fetching data:', err));
    }, []);

    return (
        <div>

            <div className='banner'>
                <p>Dòng cơ How Cues với đại diện thương hiệu tại Việt Nam là cơ thủ Dương Quốc Hoàng.</p>
                <img src={banner4} alt="How Cue Banner" />
            </div>
            {/* How Cue */}
            <div className='content-products'>
                {/* <div className='caption'>
                    <h4>HOW CUE</h4>
                    <p>Dương Quốc Hoàng - Đại diện hình ảnh How Cue tại Việt Nam</p>
                </div> */}
                <div className='products'>
                    {data17.map((item) => (
                        <div className='products-item' key={item.id}>
                            <Card style={{ width: '18rem' }}>
                                <div className="image-container">
                                    <Link to={`/product/${item.id}`}> <Card.Img variant="top" src={`http://localhost:8081/images/${item.image}`} className="image-container" /></Link>
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{formatCurrency(item.price)}</Card.Text>

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
