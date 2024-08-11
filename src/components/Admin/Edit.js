import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Edit.css';
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
                setPreviewImage(`http://localhost:8081/images/${res.data[0].image}`);
            })
            .catch(err => console.log(err));
    }, [id]);

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        image: null,
        category_id: ""
    });

    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (e) => {
        setValues({ ...values, image: e.target.files[0] });
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
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
        <div className="container-fluid px-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <Form className="p-5 bg-light shadow-lg rounded-lg" onSubmit={handleEdit}>
                        <h2 className="text-center mb-4 font-weight-bold text-primary">CHỈNH SỬA SẢN PHẨM</h2>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label className="font-weight-bold">Tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter item name"
                                    value={values.name}
                                    onChange={e => setValues({ ...values, name: e.target.value })}
                                    required
                                    className="border-secondary form-control-lg"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDescription">
                                <Form.Label className="font-weight-bold">Mô tả</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Enter description"
                                    value={values.description}
                                    onChange={e => setValues({ ...values, description: e.target.value })}
                                    required
                                    className="border-secondary form-control-lg"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label className="font-weight-bold">Gía</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter price"
                                    value={values.price}
                                    onChange={e => setValues({ ...values, price: e.target.value })}
                                    required
                                    className="border-secondary form-control-lg"
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridCategory">
                                <Form.Label className="font-weight-bold">Danh mục</Form.Label>
                                <Form.Select
                                    value={values.category_id}
                                    onChange={e => setValues({ ...values, category_id: e.target.value })}
                                    required
                                    className="border-secondary form-control-lg"
                                >
                                    {/* Các tùy chọn danh mục */}
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

                        <Form.Group className="mb-4" controlId="formGridImage">
                            <Form.Label className="font-weight-bold">Hình ảnh</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={handleFileChange}
                                className="border-secondary form-control-lg"
                            />
                            {previewImage && (
                                <div className="mt-3 text-center">
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                                    />
                                </div>
                            )}
                        </Form.Group>

                        <div className='btn-action'>
                            <Button variant="primary" type="submit" className="px-5 py-3 update">
                                Update
                            </Button>
                            <Button variant="primary" type="submit" className="px-5 py-3">
                                <Link to='/admin/home' >Back</Link>
                            </Button>

                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Edit;
