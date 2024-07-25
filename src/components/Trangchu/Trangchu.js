import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Card from 'react-bootstrap/Card';
import './Trangchu.css';


const banner1 = require('../../Assets/Trangchu/banner_1.jpg');
const banner2 = require('../../Assets/Trangchu/banner_2.jpg');
const banner3 = require('../../Assets/Trangchu/banner_3.jpg');

const Trangchu = (props) => {

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
                <div className='new-products'>
                    <div className='caption'>
                        <h4>SẢN PHẨM MỚI VỀ</h4>
                        <p>Những sản phẩm mới lên kệ</p>
                    </div>
                    <div className='products'>
                        <div className='product-item'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='product-item'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='product-item'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='product-item'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='product-item'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Trangchu;