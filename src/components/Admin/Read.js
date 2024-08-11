import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from 'react-bootstrap';
import './Read.css'; // Import file CSS để thêm phong cách tùy chỉnh

const Read = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
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
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!item) return <p>Không tìm thấy dữ liệu.</p>;

    return (
        <Container className="my-5">
            <Card.Body className="read">
                <div className="left">
                    {item.image && <img src={`http://localhost:8081/images/${item.image}`} alt={item.name} className="product-image" />}

                </div>
                <div className="right">
                    <Card.Title className="mt-3 mb-2 ">{item.name}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Brand: {item.brand_id}</Card.Subtitle> */}
                    <Card.Text className="mt-3 mb-4">{item.description}</Card.Text>
                    <Card.Text>
                        <strong>Gía: </strong>{item.price}đ
                    </Card.Text>
                    <Link to='/admin/home'>
                        <Button variant="primary">Quay lại</Button>
                    </Link>
                </div>


            </Card.Body>
        </Container>
    );
}

export default Read;
