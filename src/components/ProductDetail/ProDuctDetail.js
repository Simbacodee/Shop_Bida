import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProDuctDetail = () => {
    const { id } = useParams();  // Lấy id từ URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                setProduct(res.data[0]);
            })
            .catch(err => console.log('Error fetching product:', err));
    }, [id]);

    const handleAddToCart = () => {
        // Logic để thêm sản phẩm vào giỏ hàng
        console.log(`Added ${quantity} of ${product.name} to cart`);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className='detail'>
            <div className='img-detail'>
                <img src={`http://localhost:8081/images/${product.image}`} alt={product.name} />
            </div>
            <div className='content-detail'>
                <h4>{product.name}</h4>
                <p className='price'>Price: {product.price}</p>
                <p>{product.description}</p>
                <div className='quantity'>
                    <label htmlFor='quantity'>Số lượng:</label>
                    <input
                        type='number'
                        id='quantity'
                        value={quantity}
                        onChange={handleQuantityChange}
                        min='1'
                    />
                </div>
                <button onClick={handleAddToCart} className='add-to-cart-btn'>
                    THÊM VÀO GIỎ HÀNG
                </button>
            </div>
        </div>
    );
}

export default ProDuctDetail;
