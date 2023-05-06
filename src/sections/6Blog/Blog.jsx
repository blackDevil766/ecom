import React, { useState, useEffect, useLayoutEffect } from "react";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';


function Blog() {

    function Shipping(props) {
        return (
            <div className="shipping">
                <div className="shipping-data-container">
                    <img src={props.img} alt="" />
                    <div className="shipping-data">
                        <h3>{props.title}</h3>
                        <p>{props.data}</p>
                    </div>
                </div>
            </div>
        )
    }



    function useWindowSize() {
        const [size, setSize] = useState([1, 0]);

        useLayoutEffect(() => {

            function updateSize() {
                if (window.innerWidth >= 800) {
                    setSize([3, 80]);

                } if (window.innerWidth <= 800) {
                    setSize([1, 0]);
                }
            }
            
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [slideView, space] = useWindowSize();

        return (
            <>
                <div className="blog-container">
                    <div className="blog-title">
                        <h2>From Our Blog</h2>
                        <p>Consequat magna massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
                    </div>

                    <div className="blog-card-container">


                        <Swiper
                            id="swipeContainer"
                            modules={[Pagination, Scrollbar, A11y]}
                            spaceBetween={space}
                            slidesPerView={slideView}
                            loop="true"
                            grabCursor="true"
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        >


                            <SwiperSlide id="BlogSwipe"><BlogCard img="https://htmldemo.net/beeta/beeta/assets/img/blog/blog1.jpg" /></SwiperSlide>
                            <SwiperSlide id="BlogSwipe"><BlogCard img="https://htmldemo.net/beeta/beeta/assets/img/blog/blog2.jpg" /></SwiperSlide>
                            <SwiperSlide id="BlogSwipe"><BlogCard img="https://htmldemo.net/beeta/beeta/assets/img/blog/blog3.jpg" /></SwiperSlide>
                            <SwiperSlide id="BlogSwipe"><BlogCard img="https://htmldemo.net/beeta/beeta/assets/img/blog/blog4.jpg" /></SwiperSlide>
                            <SwiperSlide id="BlogSwipe"><BlogCard img="https://htmldemo.net/beeta/beeta/assets/img/blog/blog5.jpg" /></SwiperSlide>
                            <SwiperSlide id="BlogSwipe"><BlogCard img="https://htmldemo.net/beeta/beeta/assets/img/blog/blog6.jpg" /></SwiperSlide>
                            <SwiperSlide id="BlogSwipe"><BlogCard img="https://htmldemo.net/beeta/beeta/assets/img/blog/blog7.jpg" /></SwiperSlide>



                        </Swiper>


                    </div>
                </div>

                <div className="shipping-container">
                    <Shipping title="Free Shipping Worldwide" data="Diam augue augue in fusce voluptatem" img="https://htmldemo.net/beeta/beeta/assets/img/ship/icon1.png" />
                    <Shipping title="Free Shipping Worldwide" data="Diam augue augue in fusce voluptatem" img="https://htmldemo.net/beeta/beeta/assets/img/ship/icon2.png" />
                    <Shipping title="Free Shipping Worldwide" data="Diam augue augue in fusce voluptatem" img="https://htmldemo.net/beeta/beeta/assets/img/ship/icon3.png" />
                </div>
            </>
        )
    }

    export default Blog;