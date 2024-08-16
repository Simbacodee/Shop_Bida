import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import { toast } from 'react-toastify';
import { useCart } from '../CartContext/CartContext';

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const ProDuctDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => setProduct(res.data[0]))
            .catch(err => console.log('Error fetching product:', err));
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            toast.success(`Added ${quantity} ${product.name} to cart!`);
        }
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className='detail'>
            <div className='img-detail'>
                <img src={`http://localhost:8081/images/${product.image}`} alt={product.name} />
            </div>
            <div className='content-detail'>
                <h4>{product.name}</h4>
                <p className='price'>Price: {formatCurrency(product.price)}đ</p>
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
