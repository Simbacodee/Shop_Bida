import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const OrderItem = () => {
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
    const groupedOrders = groupItemsByOrder(orders);

    return (
        <div>
            <h2>QUẢN LÝ ĐƠN HÀNG</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Tổng hóa đơn</th>
                        <th>Ngày tạo đơn</th>
                        <th>Sản phẩm</th>
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
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default OrderItem;
