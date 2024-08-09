import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../Assets/Logo.png'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const navigate = useNavigate();

    const handleTitleClickTable = (e) => {
        e.preventDefault();
        navigate('/banbida');
    };
    const handleTitleClickCues = (e) => {
        e.preventDefault();
        navigate('/copool');
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand to='/'><img src={Logo} width='200px' height='40px' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>TRANG CHỦ</NavLink>
                        <NavDropdown title={<span onClick={handleTitleClickTable}>BÀN BIDA APLUS</span>} id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1" >Bàn Bida Aplus | S4 Plus (S4 King)</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Bàn Bida Aplus | Athena</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Bàn Bida Aplus 9023 | Series 6</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Bàn Bida Aplus | Premier</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Bàn Bida Aplus | Special</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Bàn Bida Aplus | Chinese Pool (Dragon A380)</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Bàn Bida Aplus | Carom 3C</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Bàn Bida Aplus | Libre</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span onClick={handleTitleClickCues}>CƠ POOL</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/howpool">Dòng cơ How</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Rhino</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Peri</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Mezz</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Universal</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Cuetec</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Mit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Predator</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Focus</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Dòng cơ Dufferin</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Cơ đã qua sử dụng</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/colip" className='nav-link'>CƠ LIP/3C</NavLink>
                        <NavLink to="/ngon" className='nav-link'>NGỌN - SHAFTS</NavLink>
                        <NavLink to="/phanhay" className='nav-link'>PHÁ - NHẢY</NavLink>
                        <NavLink to="/phukien" className='nav-link'>PHỤ KIỆN</NavLink>
                        <NavLink to="/tintuc" className='nav-link'>TIN TỨC</NavLink>
                        {/* <NavLink to="/admin" className='nav-link'>ADMIN</NavLink> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">GIỎ HÀNG / 0đ <FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                        <div className='search'><FontAwesomeIcon icon={faSearch} /></div>
                    </Nav>

                </Navbar.Collapse>

            </Container>

            <div className='admin'><Nav>
                <NavLink to="/admin" className='nav-link admin-nav'>ĐĂNG NHẬP</NavLink>
            </Nav> </div>
        </Navbar>

    );
}

export default Header;