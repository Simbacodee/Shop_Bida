import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from 'react-bootstrap';

const Read = () => {
    const { id } = useParams();
    const [item, setItem] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                console.log(res)
                setItem(res.data[0]);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Container className="my-5">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{item.image}</Card.Title>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Category: {item.category_id}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Brand: {item.brand_id}</Card.Subtitle>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price: </strong>${item.price}
                        </Card.Text>
                        <Link to='/admin/home' className="btn btn-primary">Back</Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default Read;