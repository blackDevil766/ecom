import React from "react";
import Product from "./productCreator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Products from "../data/products";
// import Starsy from "./stars";

function NewProductArea() {

    


    return (
        <>
            <div className="product-title-container">
                <h2>New Arrivals</h2>
                <p>Consequat magna massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
            </div>

           <Products />
        </>
    )
}


export default NewProductArea;