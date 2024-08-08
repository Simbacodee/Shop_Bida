import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from 'react-bootstrap';

const Read = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null); // Thay đổi từ [] thành null để dễ dàng kiểm tra dữ liệu
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                setItem(res.data[0]);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Có lỗi xảy ra khi tải dữ liệu.");
                setLoading(false);
            });
    }, [id]); // Thêm id vào danh sách phụ thuộc

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!item) return <p>Không tìm thấy dữ liệu.</p>;

    return (
        <div>
            <Container className="my-5">
                <Card className="text-center">
                    <Card.Body>
                        {item.image && <img src={`http://localhost:8081/images/${item.image}`} alt={item.name} style={{ width: '50%', height: 'auto', maxWidth: '400px' }} />}
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Category: {item.category_id}</Card.Subtitle>
                        {/* <Card.Subtitle className="mb-2 text-muted">Brand: {item.brand_id}</Card.Subtitle> */}
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price: </strong>{item.price}đ
                        </Card.Text>
                        <Link to='/admin/home' className="btn btn-primary">Back</Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default Read;
