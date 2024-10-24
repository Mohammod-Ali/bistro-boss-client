import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import './Category.css'



const Category = () => {
    return (
        <>
        <section>
            <SectionTitle 
            heading={"Order Online"}
            subHeading={"From 11am to 10pm"}
            ></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className='text-4xl uppercase text-center -m-16 mr-20 text-white'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 mr-32 text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 mr-32 text-white'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 mr-32 text-white'>Dessert</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 mr-32 text-white'>Salad</h3>
        </SwiperSlide>
        
      </Swiper>

        </section>
    {/* second section of bistro */}
        <section className='order-online-bg p-24 text-center mb-20'>
           <div className='bg-white p-24'>
           <h1 className='uppercase text-4xl mb-3'>Bistro boss</h1>
           <p className='px-10'>"Treat yourself to the flavors of Bistro Boss! Order now and enjoy freshly prepared dishes, crafted with care. Fast, convenient, and delicious – your perfect meal awaits, just a click away!"</p>
           </div>
        </section>
        </>
    );
};

export default Category;