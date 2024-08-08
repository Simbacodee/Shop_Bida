import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                setValues({
                    name: res.data[0].name,
                    description: res.data[0].description,
                    price: res.data[0].price,
                    image: res.data[0].image,
                    category_id: res.data[0].category_id
                });

            })
            .catch(err => console.log(err));
    }, [id]);

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        image: null, // Changed from "" to null
        category_id: ""
    });

    const handleFileChange = (e) => {
        setValues({ ...values, image: e.target.files[0] });
    };

    const handleEdit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('price', values.price);
        formData.append('category_id', values.category_id);
        if (values.image) {
            formData.append('image', values.image);
        }

        axios.put(`http://localhost:8081/edit/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res);
                navigate('/admin/home');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="container my-5">
            <Form className='form-group' onSubmit={handleEdit}>
                <h2>Edit Item</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter item name"
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            value={values.description}
                            onChange={e => setValues({ ...values, description: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            value={values.price}
                            onChange={e => setValues({ ...values, price: e.target.value })}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={values.category_id}
                            onChange={e => setValues({ ...values, category_id: e.target.value })}
                        >
                            <option value="1">Trang chủ</option>
                            <option value="2">Bàn Bida APlus</option>
                            <option value="3">Cơ Pool</option>
                            <option value="4">Cơ Lip/3C</option>
                            <option value="5">Ngọn - Shafts</option>
                            <option value="6">Phá-Nhảy</option>
                            <option value="7">Phụ Kiện</option>
                            <option value="8">Tin tức</option>
                            <option value="0">S4 Plus</option>
                            <option value="10">Athena</option>
                            <option value="11">9023 | Series 6</option>
                            <option value="12">Premier</option>
                            <option value="13">Special</option>
                            <option value="14">Chinese pool</option>
                            <option value="15">Carom 3C</option>
                            <option value="16">Libre</option>
                            <option value="17">Dòng cơ How</option>
                            <option value="18">Dòng cơ Rhino</option>
                            <option value="19">Dòng cơ Peri</option>
                            <option value="20">Dòng cơ Mezz</option>
                            <option value="21">Dòng cơ Universal</option>
                            <option value="22">Dòng cơ Cuetec</option>
                            <option value="23">Dòng cơ Mit</option>
                            <option value="24">Dòng cơ Predator</option>
                            <option value="25">Dòng cơ Focus</option>
                            <option value="26">Dòng cơ Dufferin</option>
                            <option value="27">Cơ đã qua sử dụng</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
                <Link to='/admin/home' className="btn btn-secondary ms-2">Back</Link>
            </Form>
        </div>
    );
}

export default Edit;
