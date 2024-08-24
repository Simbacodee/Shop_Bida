import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../Assets/Logo.png'
import './Header.css'
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
const Header = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);

    const handleSearchText = async (value) => {
        setSearchText(value);
        if (value.trim() === '') {
            setSearchResults([]);
            return;
        }
        try {
            const response = await axios.get(`http://localhost:8081/api/items/search?q=${value}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching items:', error);
        }
    };

    const handleSearchSelect = (itemId) => {
        navigate(`/product/${itemId}`);
        setSearchText('');
        setSearchResults([]);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand as={Link} to='/'>
                    <img src={Logo} width='200px' height='40px' alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>TRANG CHỦ</NavLink>
                        <NavDropdown title="BÀN BIDA APLUS" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/product/187" >Bàn Bida Aplus | S4 Plus (S4 King)</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/product/164">Bàn Bida Aplus | Athena</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/product/188">Bàn Bida Aplus 9023 | Series 6</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/product/169">Bàn Bida Aplus | Premier</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/product/189">Bàn Bida Aplus | Special</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/product/166">Bàn Bida Aplus | Chinese Pool (Dragon A380)</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/product/165">Bàn Bida Aplus | Carom 3C</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/product/168">Bàn Bida Aplus | Libre</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="CƠ POOL" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/howpool">Dòng cơ How</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/rhinopool">Dòng cơ Rhino</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/peripool">Dòng cơ Peri</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/mezzpool">Dòng cơ Mezz</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/universalpool">Dòng cơ Universal</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/cuetecpool">Dòng cơ Cuetec</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/mitpool">Dòng cơ Mit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/predatorpool">Dòng cơ Predator</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/focuspool">Dòng cơ Focus</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/dufferinpool">Dòng cơ Dufferin</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Cơ đã qua sử dụng</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/colip" className='nav-link'>CƠ LIP/3C</NavLink>
                        <NavLink to="/ngon" className='nav-link'>NGỌN - SHAFTS</NavLink>
                        <NavLink to="/phanhay" className='nav-link'>PHÁ - NHẢY</NavLink>
                        <NavLink to="/phukien" className='nav-link'>PHỤ KIỆN</NavLink>
                        {/* <NavLink to="/tintuc" className='nav-link'>TIN TỨC</NavLink> */}
                        {/* <NavLink to="/admin" className='nav-link'>ADMIN</NavLink> */}
                    </Nav>
                    <Nav>
                        <NavLink to="/shoppingcart" className='nav-link'>
                            GIỎ HÀNG <FontAwesomeIcon icon={faShoppingCart} />
                        </NavLink>
                        <div className='search' ref={searchRef}>
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                value={searchText}
                                onChange={(e) => handleSearchText(e.target.value)}
                            />
                            {searchText && searchResults.length > 0 && (
                                <ul className="search-results">
                                    {searchResults.map(item => (
                                        <li key={item.id} onClick={() => handleSearchSelect(item.id)}>
                                            <img src={`http://localhost:8081/images/${item.image}`} alt={item.name} width="50" height="50" />
                                            <span>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </Nav>

                </Navbar.Collapse>

            </Container>

            <div className='admin'><Nav>
                <NavLink to="/login" className='nav-link admin-nav'>ĐĂNG NHẬP</NavLink>
            </Nav> </div>
        </Navbar>

    );
}

export default Header;

