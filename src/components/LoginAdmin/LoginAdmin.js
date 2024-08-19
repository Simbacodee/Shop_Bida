import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Link } from 'react-router-dom';

const LoginAdmin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Gửi yêu cầu POST đến backend để kiểm tra thông tin đăng nhập
            const response = await axios.post('http://localhost:8081/api/login', { username, password });

            if (response.data.success) {
                // Nếu đăng nhập thành công, chuyển hướng đến trang admin
                navigate('/admin/home');
            } else {
                // Nếu thông tin đăng nhập không chính xác, hiển thị thông báo lỗi
                setError('Invalid username or password');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred while logging in');
        }
    };

    return (
        <section className="login">
            <div className="login_box">
                <div className="left">
                    <div className="top_link"> <Link to="/" className='nav-link'>Return home</Link></div>
                    <div className="contact">
                        <form onSubmit={handleSubmit}>
                            <h3>SIGN IN</h3>
                            <input
                                type="text"
                                placeholder="USERNAME"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <Alert variant="danger">{error}</Alert>}
                            <button className="submit" type="submit">LET'S GO</button>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="right-text">
                        <h2>Hoàng Sao Billiards</h2>
                    </div>
                    <div className="right-inductor"></div>
                </div>
            </div>
        </section>
    );
};

export default LoginAdmin;
