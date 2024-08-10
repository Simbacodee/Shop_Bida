import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import banner7 from '../../Assets/Trangchu/banner_7.jpg';
import '../HowPool/HowPool.css';
import { Link } from "react-router-dom";
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const PredatorPool = () => {
    const [data24, setData24] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '24' }
        })
            .then(res => {
                const items = res.data;
                setData24(items.filter(item => item.category_id === 24));
            })
            .catch(err => console.log('Error fetching data:', err));
    }, []);
    return (
        <div>
            <div className='content-products'>
                <div className='banner'>
                    <img src={banner7} alt="How Cue Banner" />
                </div>
                <div className='products'>
                    {data24.map((item) => (
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
    )
}
export default PredatorPool;