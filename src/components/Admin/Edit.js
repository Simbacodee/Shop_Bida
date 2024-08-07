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
                console.log(res)
                setValues({ ...values, name: res.data[0].name, description: res.data[0].description, price: res.data[0].price, image: res.data[0].image, category_id: res.data[0].category_id, brand_id: res.data[0].brand_id })
            })
            .catch(err => console.log(err));
    }, []);

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category_id: "",
        brand_id: ""
    });


    const handleEdit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8081/edit/${id}`, values)
            .then(res => {
                console.log(res);
                navigate('/admin/home');
            })
            .catch(err => {
                console.log(err);
            });
    }



    return (
        <div>
            <Form className='form-group' onSubmit={handleEdit} >
                <h2>Edit item</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDescription">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                            value={values.description}
                            onChange={e => setValues({ ...values, description: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Gía</Form.Label>
                        <Form.Control
                            value={values.price}
                            onChange={e => setValues({ ...values, price: e.target.value })}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Danh mục</Form.Label>
                        <Form.Select
                            value={values.category_id}
                            onChange={e => setValues({ ...values, category_id: e.target.value })}
                        ><option value="1">Trang chủ</option>
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

                    <Form.Group as={Col} controlId="formGridBrand">
                        <Form.Label>Hãng</Form.Label>
                        <Form.Select
                            value={values.brand_id}
                            onChange={e => setValues({ ...values, brand_id: e.target.value })}
                        >
                            <option value="1">APlus</option>
                            <option value="2">Dòng cơ How</option>
                            <option value="3">Dòng cơ Rhino</option>
                            <option value="4">Dòng cơ Peri</option>
                            <option value="5">Dòng cơ Mezz</option>
                            <option value="6">Dòng cơ Universal</option>
                            <option value="7">Dòng cơ Cuetec</option>
                            <option value="8">Dòng cơ Mit</option>
                            <option value="9">Dòng cơ Predator</option>
                            <option value="10">Dòng cơ Focus</option>
                            <option value="11">Dòng cơ Dufferin</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridImage">
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control
                        value={values.image}
                        onChange={e => setValues({ ...values, image: e.target.value })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
                <Link to='/admin/home' className="btn btn-primary">Back</Link>
            </Form>
        </div>
    );
}

export default Edit;