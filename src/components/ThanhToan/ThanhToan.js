import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import './ThanhToan.css';

const ThanhToan = () => {
    const { cartItems, clearCart } = useCart();
    const [formData, setFormData] = useState({
        customerName: '',
        address: '',
        phoneNumber: '',
        email: '',
    });

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8081/order', {
                ...formData,
                totalAmount,
                items: cartItems.map(item => ({
                    id: item.id,
                    quantity: item.quantity,
                    price: item.price
                }))
            });

            toast.success('Order placed successfully!');
            setFormData({
                customerName: '',
                address: '',
                phoneNumber: '',
                email: '',
            });
            clearCart(); // Clear cart after successful order
        } catch (error) {
            console.error('Error placing order:', error);
            toast.error('Failed to place order.');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h4>THÔNG TIN THANH TOÁN</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Họ và tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Thanh toán</button>
                    </form>
                </div>

                <div className="col-md-6">
                    <h4>ĐƠN HÀNG CỦA BẠN</h4>
                    <div className="order-summary">
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    {item.name} - {item.quantity} x {item.price.toLocaleString('vi-VN')}đ
                                </li>
                            ))}
                        </ul>
                        <h5>TỔNG: {totalAmount.toLocaleString('vi-VN')}đ</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThanhToan;
