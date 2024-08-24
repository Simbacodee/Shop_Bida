import React, { useState, useEffect } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Card from 'react-bootstrap/Card';
import './Trangchu.css';
import banner1 from '../../Assets/Trangchu/banner_1.jpg';
import banner2 from '../../Assets/Trangchu/banner_2.jpg';
import banner3 from '../../Assets/Trangchu/banner_3.jpg';
import banner4 from '../../Assets/Trangchu/banner_4.jpg';
import banner5 from '../../Assets/Trangchu/banner_5.jpg';
import banner6 from '../../Assets/Trangchu/banner_6.jpg';
import banner7 from '../../Assets/Trangchu/banner_7.jpg';
import banner8 from '../../Assets/Trangchu/banner_8.jpg';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Trangchu = (props) => {
    const [data2, setData2] = useState([]);
    const [data4, setData4] = useState([]);
    const [data17, setData17] = useState([]);
    const [data18, setData18] = useState([]);
    const [data19, setData19] = useState([]);
    const [data21, setData21] = useState([]);
    const [data20, setData20] = useState([]);
    const [data22, setData22] = useState([]);
    const [data23, setData23] = useState([]);
    const [data24, setData24] = useState([]);
    const [data26, setData26] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/api/items/categories', {
            params: { categories: '2,4,17,18,19,10,20,21,22,23,24,26' }
        })
            .then(res => {
                const items = res.data;
                // Phân loại dữ liệu theo category_id
                setData2(items.filter(item => item.category_id === 2));
                setData4(items.filter(item => item.category_id === 4));
                setData17(items.filter(item => item.category_id === 17));
                setData18(items.filter(item => item.category_id === 18));
                setData19(items.filter(item => item.category_id === 19));
                setData21(items.filter(item => item.category_id === 21));
                setData20(items.filter(item => item.category_id === 20));
                setData22(items.filter(item => item.category_id === 22));
                setData23(items.filter(item => item.category_id === 23));
                setData24(items.filter(item => item.category_id === 24));
                setData26(items.filter(item => item.category_id === 26));
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
            <Helmet>
                <title>Shop cơ bida và phụ kiện | Quản lý bởi Hoàng Sao</title>
            </Helmet>
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
                        {data18.map((item) => (
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
                {/* BÀN BIDA APLUS */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>BÀN BIDA APLUS</h4>
                        <p>Bàn bida thương hiệu Aplus do Hoàng Sao đại diện phân phối</p>
                    </div>
                    <div className='products'>
                        {data2.map((item) => (
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
                {/* How Cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>HOW CUE</h4>
                        <p>Dương Quốc Hoàng - Đại diện hình ảnh How Cue tại Việt Nam</p>
                    </div>
                    <div className='products'>
                        {data17.slice(0, 6).map((item) => (
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
                <div className='banner'><img src={banner4} /></div>
                {/* Rhino */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>CƠ CARBON RHINO</h4>
                        <p>Dòng cơ Rhino full carbon với giá thành cạnh tranh</p>
                    </div>
                    <div className='products'>
                        {data18.map((item) => (
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
                {/* Cơ Libre/3C */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>CƠ LIBRE/3C</h4>
                        <p>Dòng cơ cho anh em chơi Libre/3C tham khảo</p>
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
                {/* Peri Cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>PERI CUE</h4>
                        <p>Dòng cơ Peri với Jason Shaw là đại diện hình ảnh</p>
                    </div>
                    <div className='products'>
                        {data19.slice(0, 6).map((item) => (
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
                <div className='banner'><img src={banner5} /></div>
                {/* Mit Cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>MIT CUE</h4>
                        <p>Dòng cơ Mit Cue và Focus Cue từ Đài Loan</p>
                    </div>
                    <div className='products'>
                        {data23.slice(0, 6).map((item) => (
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
                {/* Universal Cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>UNIVERSAL CUE</h4>
                        <p>Dòng cơ Universal viuws Ralf Souquet làm đại diện</p>
                    </div>
                    <div className='products'>
                        {data21.slice(0, 6).map((item) => (
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
                <div className='banner'><img src={banner6} /></div>
                {/* Mezz cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>MEZZ CUE</h4>
                        <p>Mezz - Cái tên nói lên tất cả</p>
                    </div>
                    <div className='products'>
                        {data20.slice(0, 6).map((item) => (
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
                {/* Dufferin cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>DUFFERIN CUE</h4>
                        <p>Dòng cơ danh tiếng đến từ Canada</p>
                    </div>
                    <div className='products'>
                        {data26.map((item) => (
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
                {/* Predator cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>PREDATOR CUE</h4>
                        <p>Dòng cơ nổi tiếng với logo con báo</p>
                    </div>
                    <div className='products'>
                        {data24.slice(0, 6).map((item) => (
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
                <div className='banner'><img src={banner7} /></div>
                {/* Cuetec cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>CUETEC CUE</h4>
                        <p>Dòng cơ Cuetec với cơ thủ đến từ South Dakota - Shane Van Boening sử dụng</p>
                    </div>
                    <div className='products'>
                        {data22.slice(0, 6).map((item) => (
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
                <div className='banner'><img src={banner8} /></div>
            </div>
        </>
    );
};

export default Trangchu;
