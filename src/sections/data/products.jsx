import React, { useState, useEffect, useLayoutEffect } from "react";
import Product from "../3ProductArea/productCreator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css/navigation";
// import { Navigation } from "swiper";
import "swiper/css/bundle";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);

export default function Products() {

    function useWindowSize() {
        const [size, setSize] = useState([1, 0]);

        useLayoutEffect(() => {

            function updateSize() {
                if (window.innerWidth >= 800) {
                    setSize([4, 10]);

                } if (window.innerWidth <= 800) {
                    setSize([2, 0]);
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
        <div className="products">

            <Swiper
                id="swipeContainer"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={space}
                slidesPerView={slideView}
                Navigation
                loop="true"
                grabCursor="true"
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
            >


                <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">
                    <Product
                        name="Aesthetica Cosmetics"
                        price="$65.00"
                        img="https://htmldemo.net/beeta/beeta/assets/img/product/product1.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">
                    <Product
                        name="Barber Title here"
                        price="$65.00"
                        img="https://htmldemo.net/beeta/beeta/assets/img/product/product2.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">
                    <Product
                        name="Aftershave Lotion"
                        price="$65.00"
                        img="https://htmldemo.net/beeta/beeta/assets/img/product/product3.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">
                    <Product
                        name="Aesthetica Cosmetics"
                        price="$65.00"
                        img="https://htmldemo.net/beeta/beeta/assets/img/product/product4.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">
                    <Product
                        name="Aftershave Lotion"
                        price="$65.00"
                        img="https://htmldemo.net/beeta/beeta/assets/img/product/product5.jpg"
                    />
                </SwiperSlide>

                <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">
                    <Product
                        name="Barber Title here"
                        price="$65.00"
                        img="https://htmldemo.net/beeta/beeta/assets/img/product/product6.jpg"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}