import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import banner4 from '../../img/cuetec.jpg';
import './Cuetec.css';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};
const CueTecPool = () => {
    const [data22, setData22] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '22' }
        })
            .then(res => {
                const items = res.data;
                setData22(items.filter(item => item.category_id === 22));
            })
            .catch(err => console.log('Error fetching data:', err));
    }, []);
    return (
        <div>
            <Helmet>
                <title>Dòng cơ Cuetec </title>
            </Helmet>
            <div className='content-products'>
                <div className='bannerCuetec'>
                    <img src={banner4} alt="How Cue Banner" />
                </div>
                <div className='products'>
                    {data22.map((item) => (
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
export default CueTecPool;