import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcPaypal, faCcStripe, faCashRegister } from '@fortawesome/free-brands-svg-icons';
import img_page from '../../Assets/Footer/page.png'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className='footer-top'>
                    <div className="footer-contact footer-item" >
                        <h5>THÔNG TIN LIÊN HỆ</h5>
                        <p>{`Hoàng Sao Shop chuyên cung cấp các dòng cơ bida chính 
                    hãng, bàn bida Aplus cùng các phụ kiện tập luyện chuyên 
                    nghiệp được chính Hoàng Sao chọn lựa - tư vấn - bảo hành. Đến 
                    với Hoàng Sao Shop, các bạn có thể tìm được các dòng cơ phù 
                    hợp nhất với khả năng và nhu cầu tập luyện, thi đấu môn Pool.`}</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Địa chỉ showroom: 152 Nguyễn Oanh, P7, Gò Vấp, TPHCM</p>
                        <p><FontAwesomeIcon icon={faPhone} />Hotline: (+84) 842 44 1234 </p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> Facebook: https://fb.com/hoangsaoshop</p>
                    </div>
                    <div className="footer-ship footer-item">
                        <h5>CHÍNH SÁCH</h5>
                        <ul>
                            <li>Chính sách vận chuyển</li>
                            <li>Chính sách bảo hành</li>
                            <li>Chính sách thanh toán</li>
                            <li>Hướng dẫn mua hàng</li>
                        </ul>
                    </div>
                    <div className="footer-infor footer-item">
                        <h5>THÔNG TIN</h5>
                        <ul>
                            <li>Trang Chủ</li>
                            <li>Bàn Bida Aplus</li>
                            <li>Cơ Pool</li>
                            <li>Cơ Lip/3C</li>
                            <li>Ngọn – Shafts</li>
                            <li>Phá – Nhảy</li>
                            <li>Phụ kiện</li>
                            <li>Tin tức</li>
                        </ul>
                    </div>
                    <div className="footer-page footer-item">
                        <img src={img_page} />
                        <input placeholder='Nhập email' className='input-mail'></input>
                        <button className='button-sub'>ĐĂNG KÝ</button>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className='payment'>
                    <div className='payment-icon'><FontAwesomeIcon icon={faCcVisa} size="2x" /></div>
                    <div className='payment-icon'><FontAwesomeIcon icon={faCcPaypal} size="2x" /></div>
                    <div className='payment-icon'><FontAwesomeIcon icon={faCcStripe} size="2x" /></div>
                    <div className='payment-icon'><FontAwesomeIcon icon={faCcMastercard} size="2x" /></div>
                </div>
                <p>Copyright 2024 © Hoàng Sao Shop</p>
            </div>
        </>
    )
}
export default Footer;