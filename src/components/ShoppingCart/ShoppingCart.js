import React from 'react';
import { useCart } from '../CartContext/CartContext';
import './ShoppingCart.css';
import { Link, NavLink } from 'react-router-dom';
const ShoppingCart = () => {
    const { cartItems, removeFromCart, clearCart, totalAmount } = useCart();

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    const formattedTotalAmount = formatter.format(totalAmount);

    return (
        <div className="cart">
            <h2>GIỎ HÀNG</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={`http://localhost:8081/images/${item.image}`} alt={item.name} />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>{formatter.format(item.price)} x {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                        </div>
                    </div>
                ))
            )}
            <div className="cart-total">
                <h3>Tổng tiền: {formattedTotalAmount}</h3>
                <NavLink to="/thanhtoan" className='nav-link'>
                    <button>Thanh toán</button>
                </NavLink>
            </div>
        </div>

    );
};

export default ShoppingCart;
