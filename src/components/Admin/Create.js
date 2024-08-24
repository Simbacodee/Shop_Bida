import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import './Create.css'; // Import CSS

const Create = () => {
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        category_id: "",
        image: null
    });

    const [imagePreview, setImagePreview] = useState(null); // State để lưu preview hình ảnh

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValues({ ...values, image: file });

        // Tạo URL cho hình ảnh để xem trước
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('price', values.price);
        formData.append('category_id', values.category_id);
        if (values.image) {
            formData.append('image', values.image);
        }

        try {
            const response = await axios.post('http://localhost:8081/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response:', response);
            navigate('/admin/home');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='form-container'>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                            placeholder="Nhập tên sản phẩm"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDescription">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                            value={values.description}
                            onChange={e => setValues({ ...values, description: e.target.value })}
                            placeholder="Nhập mô tả sản phẩm"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Giá</Form.Label>
                        <Form.Control
                            type="number"
                            value={values.price}
                            onChange={e => setValues({ ...values, price: e.target.value })}
                            placeholder="Nhập giá sản phẩm"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Danh mục</Form.Label>
                        <Form.Select
                            value={values.category_id}
                            onChange={e => setValues({ ...values, category_id: e.target.value })}
                        >
                            <option value="1">Trang chủ</option>
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
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                    />
                </Form.Group>

                {imagePreview && (
                    <div className="image-preview">
                        <img src={imagePreview} alt="Preview" />
                    </div>
                )}

                <Button variant="primary" type="submit">
                    Lưu
                </Button>
            </Form>
        </div>
    );
}

export default Create;

