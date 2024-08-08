import React, { useState, useEffect } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Card from 'react-bootstrap/Card';
import './Trangchu.css';
import banner1 from '../../Assets/Trangchu/banner_1.jpg';
import banner2 from '../../Assets/Trangchu/banner_2.jpg';
import banner3 from '../../Assets/Trangchu/banner_3.jpg';

const Trangchu = (props) => {
    const [data17, setData17] = useState([]);
    const [data19, setData19] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '17,19' }
        })
            .then(res => {
                const items = res.data;
                // Phân loại dữ liệu theo category_id
                setData17(items.filter(item => item.category_id === 17));
                setData19(items.filter(item => item.category_id === 19));
            })
            .catch(err => console.log('Error fetching data:', err));
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <>
            <div className='carousels'>
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage src={banner1} text="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src={banner2} text="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage src={banner3} text="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='content'>
                {/* Sản phẩm mới  */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>SẢN PHẨM MỚI VỀ</h4>
                        <p>Những sản phẩm mới lên kệ</p>
                    </div>
                    <div className='products'>
                        {data17.map((item) => (
                            <div className='products-item' key={item.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`http://localhost:8081/images/${item.image}`} />
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
        </>
    );
};

export default Trangchu;
