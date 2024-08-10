import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import banner5 from '../../Assets/Trangchu/banner_5.jpg';
import '../HowPool/HowPool.css';
import { Link } from "react-router-dom";
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};
const PeriPool = () => {
    const [data19, setData19] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '19' }
        })
            .then(res => {
                const items = res.data;
                setData19(items.filter(item => item.category_id === 19));
            })
            .catch(err => console.log('Error fetching data:', err));
    }, []);
    return (
        <div>
            <div className='banner'>
                <p>Dòng cơ Peri được các Pro Player tại Việt Nam tin tưởng sử dụng như Kiên Pháp, Tuấn Kon, Thiện Lương, Nam Phạm…và quốc tế như Jason Shaw</p>
                <img src={banner5} alt="How Cue Banner" />
            </div>
            <div className='content-products'>

                <div className='products'>
                    {data19.map((item) => (
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
export default PeriPool;