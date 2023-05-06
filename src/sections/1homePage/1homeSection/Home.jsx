import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Home() {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop="true"
            pagination={{ clickable: true }}
            grabCursor="true"
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="swipey">
                <div className="homeSection">
                    <div  className="slider-text">
                        <h4>new arrivals</h4>
                        <h1>coat hoody</h1>
                        <a href="#">discover now</a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swipey">
                <div className="homeSection2">
                    <div className="slider-text">
                        <h4>old arrivals</h4>
                        <h1>jact hoody</h1>
                        <a href="#">undiscover now</a>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper>
    );
}

export default Home;













// return (
//     <>
//         <div className="home-container">

//             <div className="homeSection">
//                 <div className="slider-text">
//                     <h4>new arrivals</h4>
//                     <h1>coat hoody</h1>
//                     <a href="#">discover now</a>
//                 </div>
//             </div>

//             <div className="homeSection2">
//                 <div className="slider-text">
//                     <h4>old arrivals</h4>
//                     <h1>jact hoody</h1>
//                     <a href="#">undiscover now</a>
//                 </div>
//             </div>

//         </div>

//     </>
// )














// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const slideImages = [
//     {
//         url: 'images/slide_2.jpg',
//         caption: 'Slide 1'
//     },
//     {
//         url: 'images/slide_3.jpg',
//         caption: 'Slide 2'
//     },
//     {
//         url: 'images/slide_4.jpg',
//         caption: 'Slide 3'
//     },
// ];

// const Slideshow = () => {
//     return (
//         <div className="slide-container">
//             <Slide>
//                 {slideImages.map((slideImage, index) => (
//                     <div className="each-slide" key={index}>
//                         <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
//                             <span>{slideImage.caption}</span>
//                         </div>
//                     </div>
//                 ))}
//             </Slide>
//         </div>
//     )
// }
