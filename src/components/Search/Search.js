import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (query) {
            try {
                const response = await axios.get(`/api/items?name=${query}`);
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching search results', error);
            }
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
            navigate(`/search?query=${query}`);
        }
    };

    const handleResultClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className='search-container'>
            <NavLink to="/shoppingcart" className='nav-link'>
                GIỎ HÀNG <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
            <div className='search'>
                <FontAwesomeIcon icon={faSearch} onClick={() => setShowSearch(!showSearch)} />
                {showSearch && (
                    <div className='search-box'>
                        <input
                            type='text'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder='Tìm kiếm sản phẩm...'
                        />
                        <button onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        {results.length > 0 && (
                            <ul className='search-results'>
                                {results.map(item => (
                                    <li key={item.id} onClick={() => handleResultClick(item.id)}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
