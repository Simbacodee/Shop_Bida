import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Card from 'react-bootstrap/Card';
import './Trangchu.css';
import hinhanh from '../../img/Athena_1.jpg'
import { useState } from 'react';
import CommonCarousels from '../Common_carousels/CommonCarousels';

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
const banner1 = require('../../Assets/Trangchu/banner_1.jpg');
const banner2 = require('../../Assets/Trangchu/banner_2.jpg');
const banner3 = require('../../Assets/Trangchu/banner_3.jpg');
const banner4 = require('../../Assets/Trangchu/banner_4.jpg');
const banner5 = require('../../Assets/Trangchu/banner_5.jpg');
const banner6 = require('../../Assets/Trangchu/banner_6.jpg');
const banner7 = require('../../Assets/Trangchu/banner_7.jpg');
const banner8 = require('../../Assets/Trangchu/banner_8.jpg');
const Trangchu = (props) => {

    const [arrItem] = useState([
        { id: 1, name: 'tyyy', price: 1111, img: hinhanh },
        { id: 2, name: 'tyyy', price: 222222, img: hinhanh },
        { id: 3, name: 'tyyy', price: 333, img: hinhanh },
        { id: 4, name: 'tyyy', price: 4444, img: hinhanh },
        { id: 5, name: 'tyyy', price: 5555, img: hinhanh },
        // { id: 6, name: 'tyyy', price: 6666, img: hinhanh }
    ])
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
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Bàn Bida Aplus */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>BÀN BIDA APLUS</h4>
                        <p>Bàn bida thương hiệu Aplus do Hoàng Sao đại diện phân phối</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* How Cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>HOW CUE</h4>
                        <p>Dương Quốc Hoàng - Đại diện hình ảnh How Cue tại Việt Nam</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
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
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Cơ Libre/3C */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>CƠ LIBRE/3C</h4>
                        <p>Dòng cơ cho anh em chơi Libre/3C tham khảo</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Peri cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>PERI CUE</h4>
                        <p>Dòng cơ Peri với Jason Shaw là đại diện hình ảnh</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='banner'><img src={banner5} /></div>
                {/* Mit cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>MIT CUE</h4>
                        <p>Dòng cơ Mit Cue và Focus Cue từ Đài Loan</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Universal cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>UNIVERSAL CUE</h4>
                        <p>Dòng cơ Universal viuws Ralf Souquet làm đại diện</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
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
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Dufferin cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>DUFFERIN CUE</h4>
                        <p>Dòng cơ danh tiếng đến từ Canada</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Predator cue */}
                <div className='content-products'>
                    <div className='caption'>
                        <h4>PREDATOR CUE</h4>
                        <p>Dòng cơ nổi tiếng với logo con báo</p>
                    </div>
                    <div className='products'>
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
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
                        {arrItem.map((item) => {
                            return (
                                <div className='products-item' key={item.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.img} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='banner'><img src={banner8} /></div>
            </div>
        </>

    );
}
export default Trangchu;