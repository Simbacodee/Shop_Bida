import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './OrderItem.css'; // Đảm bảo bạn đã import file CSS

const OrderItem = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/orders');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const groupItemsByOrder = (orders) => {
        const grouped = {};

        orders.forEach(order => {
            if (!grouped[order.id]) {
                grouped[order.id] = {
                    ...order,
                    items: []
                };
            }
            if (order.item_name) {
                grouped[order.id].items.push({
                    item_name: order.item_name,
                    quantity: order.quantity
                });
            }
        });

        return Object.values(grouped);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/orders/${id}`);
            setOrders(orders.filter(order => order.id !== id));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    const handleConfirm = async (id) => {
        try {
            await axios.put(`http://localhost:8081/api/orders/${id}/confirm`);
            setOrders(orders.map(order =>
                order.id === id ? { ...order, status: 'confirmed' } : order
            ));
        } catch (error) {
            console.error('Error confirming order:', error);
        }
    };

    const groupedOrders = groupItemsByOrder(orders);

    return (
        <div>
            <h2>QUẢN LÝ ĐƠN HÀNG</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Tổng hóa đơn</th>
                        <th>Ngày tạo đơn</th>
                        <th>Sản phẩm</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {groupedOrders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer_name}</td>
                            <td>{order.address}</td>
                            <td>{order.phone_number}</td>
                            <td>{order.email}</td>
                            <td>{formatCurrency(order.total_amount)}</td>
                            <td>{new Date(order.created_at).toLocaleString()}</td>
                            <td>
                                {order.items.map((item, index) => (
                                    <div key={index}>
                                        {item.item_name} (Số lượng: {item.quantity})
                                    </div>
                                ))}
                            </td>
                            <td>
                                <div className="action-buttons">
                                    <Button className="btn btn-custom-warning">Đang xử lý</Button>
                                    <Button className="btn btn-primary">Đã giao</Button>
                                    <Button className="btn btn-secondary">Đã hủy</Button>
                                    <Button className="btn btn-danger" onClick={() => handleDelete(order.id)}>Xóa</Button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default OrderItem;
