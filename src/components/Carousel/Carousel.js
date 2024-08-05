import brand1 from '../../Assets/Trangchu/brand1.jpg'
import brand2 from '../../Assets/Trangchu/brand2.jpg'
import brand3 from '../../Assets/Trangchu/brand3.jpg'
import brand4 from '../../Assets/Trangchu/brand4.jpg'
import brand5 from '../../Assets/Trangchu/brand5.jpg'
import brand6 from '../../Assets/Trangchu/brand6.jpg'
import brand7 from '../../Assets/Trangchu/brand7.jpg'
import brand8 from '../../Assets/Trangchu/brand8.png'
import './Carousel.css';
const Carousel = () => {
    return (
        <>
            <div className='brands'>
                <div className='caption'>
                    <h4>CÁC DÒNG CƠ DANH TIẾNG</h4>
                    <p>Top những dòng cơ danh tiếng trong làng pool</p>
                </div>
                <div className='brand'>
                    <div className='brand-item'><img src={brand1} /></div>
                    <div className='brand-item'><img src={brand2} /></div>
                    <div className='brand-item'><img src={brand3} /></div>
                    <div className='brand-item'><img src={brand4} /></div>
                    <div className='brand-item'><img src={brand5} /></div>
                    <div className='brand-item'><img src={brand6} /></div>
                    <div className='brand-item'><img src={brand7} /></div>
                    <div className='brand-item'><img src={brand8} /></div>
                </div>
            </div>
        </>
    )
}
export default Carousel;