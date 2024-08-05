// ScrollBack.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ScrollBack = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        // Kiểm tra vị trí cuộn và cập nhật trạng thái
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        // Thêm sự kiện cuộn khi component được gắn vào DOM
        window.addEventListener('scroll', handleScroll);

        // Xóa sự kiện cuộn khi component bị gỡ bỏ
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <div className="scrollToTop" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            )}
        </>
    );
};

export default ScrollBack;
