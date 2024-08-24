import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Customer = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu từ bảng orders
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

    // Nhóm các mặt hàng theo đơn hàng
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

    // Hàm định dạng tiền tệ
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);
    };

    // Xóa đơn hàng
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/orders/${id}`);
            setOrders(orders.filter(order => order.id !== id));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    const groupedOrders = groupItemsByOrder(orders);

    return (
        <div>
            <h2>QUẢN LÝ KHÁCH HÀNG</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã khách hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
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
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(order.id)}
                                >
                                    Xóa
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Customer;
