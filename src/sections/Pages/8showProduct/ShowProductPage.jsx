import React, { useState, useEffect, useLayoutEffect } from "react";
import Product from "../../3ProductArea/productCreator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Imgs from "../imgOffers";
import 'swiper/css/pagination';
import NewProductArea from "../../3ProductArea/NewProductArea";
import Products from "../../data/products";

function ProductsPages(props) {


    function Productss(propsy) {
        return (

            // <li className="productOnStand"><img src= alt="" /></li>
            <li onClick={whatItem} className="productOnStand"><img src={propsy.imgUrl} alt="" /></li>

        )
    }

    const [newClass, setNewClass] = useState(() => {
        return {
            info1: "moreInfo",
            info2: "moreInfo-hide",
            info3: "moreInfo-hide"
        }
    })

    const [activeIt, setActivaIt] = useState(() => {
        return {
            id1: "actives",
            id2: "",
            id3: ""
        }
    })

    function activeId1() {
        setActivaIt((rest) => {
            return {
                id1: "actives",
                rest

            }
        })
        setNewClass((rest) => {
            return {
                info1: "moreInfo",
                info2: "moreInfo-hide",
                info3: "moreInfo-hide"
            }
        })


    }

    function activeId2() {
        setActivaIt((rest) => {
            return {
                id2: "actives",
                rest
            }
        })
        setNewClass((rest) => {
            return {
                info1: "moreInfo-hide",
                info2: "moreInfo",
                info3: "moreInfo-hide"
            }
        })
    }

    function activeId3() {
        setActivaIt((rest) => {
            return {

                id3: "actives",
                rest

            }
        })

        setNewClass((rest) => {
            return {
                info1: "moreInfo-hide",
                info2: "moreInfo-hide",
                info3: "moreInfo"
            }
        })
    }

    const [choosenOne, setChoosenOne] = useState("https://htmldemo.net/beeta/beeta/assets/img/product/product32.jpg")

    function whatItem(w) {
        var imgt = w.target.src
        setChoosenOne(imgt);
        console.log(imgt);
    }




    const el = document.querySelector(".ShowProductsImg");
    function mouseMoved(e) {
        // el.4

        // .backgroundPositionX = -e.offsetX + "px";
        // el.style.backgroundPositionY = -e.offsetY + "px";
    }




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
        <>
            <div className="productShower-container">
                <div className="productShower-title">
                    <a href="/">Home</a>
                    <span>/</span>
                    <p>Single Product</p>
                </div>

                <div className="shower-container">

                    <div className="ShowProducts">
                        <img onMouseMove={mouseMoved} className="ShowProductsImg" src={choosenOne} alt="" />


                        <div className="products-container">


                            <Swiper
                                id="swipeContainer"
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                // modules={[Pagination]}
                                spaceBetween={0}
                                slidesPerView={4}
                                Navigation
                                loop="true"
                                // pagination={{ clickable: true }}
                                grabCursor="true"
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >

                                {/* <ul className="products-data"> */}


                                {/* {Imgs.map(Productss)} */}


                                {/* <SwiperSlide id="shit"><li className="productOnStand"><img src="https://htmldemo.net/beeta/beeta/assets/img/cart/cart4.jpg" alt="" /></li></SwiperSlide>
                                    <SwiperSlide id="shit"><li className="productOnStand"><img src="https://htmldemo.net/beeta/beeta/assets/img/cart/cart6.jpg" alt="" /></li></SwiperSlide>
                                    <SwiperSlide id="shit"><li className="productOnStand"><img src="https://htmldemo.net/beeta/beeta/assets/img/cart/cart7.jpg" alt="" /></li></SwiperSlide> */}



                                {/* </ul> */}


                                <ul className="products-data">
                                    <SwiperSlide id="shit"><Productss imgUrl="https://htmldemo.net/beeta/beeta/assets/img/product/product30.jpg" /></SwiperSlide>
                                    <SwiperSlide id="shit"><Productss imgUrl="https://htmldemo.net/beeta/beeta/assets/img/product/product31.jpg" /></SwiperSlide>
                                    <SwiperSlide id="shit"><Productss imgUrl="https://htmldemo.net/beeta/beeta/assets/img/product/product32.jpg" /></SwiperSlide>
                                    <SwiperSlide id="shit"><Productss imgUrl="https://htmldemo.net/beeta/beeta/assets/img/product/product33.jpg" /></SwiperSlide>
                                </ul>

                            </Swiper>

                        </div>
                    </div>

                    <div className="product-description">
                        <h1 className="title-description">Fusce Dolor Enim</h1>

                        <div className="ShowProduct-ratting">
                            <ul>
                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                            </ul>
                            <a href="/">Write a review</a>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati modi culpa voluptates illo,
                            quos magni totam inventore delectus perspiciatis necessitatibus,
                            iure rerum! Deleniti nobis voluptatibus minus, iusto ullam quae esse..
                        </p>
                        <p>
                            eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
                            sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat
                            vestibulum, metus nisi posuere nisl, in
                        </p>

                        <div className="showProduct-price">
                            <span className="current-price">$65.00</span>
                            <span className="old-price">$68.00</span>
                        </div>

                        <div className="whatColor">
                            <p className="choose-color-title">Color</p>

                            {/* <div id=""> */}


                            <select id="ChooseColor" name="color">
                                <option value="option1" className="colory">choose in option</option>
                                <option value="option2" className="colory">choose in option 2</option>
                                <option value="option3" className="colory">choose in option 3</option>
                                <option value="option4" className="colory">choose in option 4</option>
                            </select>
                        </div>

                        <div className="WhatSize">
                            <p className="choose-size-title">Size</p>

                            <select id="ChooseSize" name="size">
                                <option value="option0" className="colorySize">Size</option>
                                <option value="option1" className="colory">x</option>
                                <option value="option2" className="colory">xl</option>
                                <option value="option3" className="colory">md</option>
                                <option value="option4" className="colory">xxl</option>
                                <option value="option4" className="colory">s</option>
                            </select>
                        </div>

                        <div className="WhatQuantity">
                            <p className="choose-quantity-title">Quantity</p>
                            <input className="quantity-number" placeholder="1" min="0" max="100" type="number" />
                            <button type="button" className="AddToCart-btn">Add To Cart</button>
                        </div>

                        <ul className="product-action">
                            <li className="action-container"><a className="action-ico" href="#"><i className="ri-heart-line"></i></a></li>
                            <li className="action-container"><a className="action-ico" href="#"><i className="ri-eye-line"></i></a></li>
                        </ul>


                        <div className="shareLinks-container">
                            <ul className="shareLinks">
                                <li className="titleLinks">Share On:</li>
                                <li className="shareLinkIco"><a href="#"><i class="ri-rss-fill"></i></a></li>
                                <li className="shareLinkIco"><a href="#"><i class="ri-vimeo-fill"></i></a></li>
                                <li className="shareLinkIco"><a href="#"><i class="ri-tumblr-fill"></i></a></li>
                                <li className="shareLinkIco"><a href="#"><i class="ri-pinterest-fill"></i></a></li>
                                <li className="shareLinkIco"><a href="#"><i class="ri-linkedin-fill"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div >

                <div className="dateils-info">

                    <div className="titles-container">
                        <h2 onClick={activeId1} id={activeIt.id1} className="info-title">more info</h2>
                        <h2 onClick={activeId2} id={activeIt.id2} className="info-title">data sheet</h2>
                        <h2 onClick={activeId3} id={activeIt.id3} className="info-title">reviews</h2>
                    </div>

                    <div id="info" className={newClass.info1}>
                        <p className="more-info-data">Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                    </div>

                    <div id="tables" className={newClass.info2}>
                        <div className="table-container">
                            <table>
                                <tr>
                                    <td className="td-right">Compositions</td>
                                    <td className="td-left">Polyester</td>
                                </tr>
                                <tr>
                                    <td className="td-right">Styles</td>
                                    <td className="td-left">Girly</td>
                                </tr>
                                <tr>
                                    <td className="td-right">Properties</td>
                                    <td className="td-left">Short Dress</td>
                                </tr>
                            </table>
                        </div>
                        <p className="more-info-data">Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>

                    </div>

                    <div id="tables" className={newClass.info3}>

                        <p className="more-info-data">Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>

                        <div className="product-info-inner">
                            <div id="info-ratting" className="ShowProduct-ratting">
                                <ul id="stars">
                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                </ul>
                                <strong className="NameTitle">Posthemes</strong>
                                <p className="DateTitle">16/11/2022</p>
                            </div>
                            <div className="product-demo">
                                <strong className="NameTitle">demo</strong>
                                <p>That's OK!</p>
                            </div>
                        </div>

                        <div className="product-review-form">
                            <h2 className="review-title">Add a Review</h2>
                            <p className="review-para">Your email address will not be published. Required fields are marked</p>

                            <div className="review-title-container">
                                <form action="/">
                                    <div className="textArea-container">
                                        <label className="review-lable" htmlFor="review-comment">Your review</label>
                                        <textarea name="comment" id="review-comment"></textarea>
                                    </div>

                                    <div className="client-data-container">

                                        <div className="name-input">
                                            <label htmlFor="client-name">Name</label>
                                            <input className="author-name" type="text" />
                                        </div>

                                        <div className="email-input">
                                            <label htmlFor="client-email">Email</label>
                                            <input className="author-mail" type="email" />
                                        </div>

                                    </div>
                                    <button className="Submit-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >



            <div className="productShower-swiper-container">
                <h2 className="productsShower-swiper-title">RELATED PRODUCTS</h2>
                <Products />
            </div>






            <div id="productShower-swiper-container" className="productShower-swiper-container">

                <h2 className="productsShower-swiper-title">UPSELL PRODUCTS</h2>

                <div className="products">
                    <Swiper
                        id="swipeContainer"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        // modules={[Pagination]}
                        spaceBetween={space}
                        slidesPerView={slideView}
                        Navigation
                        loop="true"
                        // pagination={{ clickable: true }}
                        grabCursor="true"
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">

                            <Product
                                name="Aesthetica Cosmetics"
                                price="$65.00"
                                img="https://htmldemo.net/beeta/beeta/assets/img/product/product9.jpg"
                            />
                        </SwiperSlide>

                        <SwiperSlide Stars={<li><a href="#"><i class="fa fa-star"></i></a></li>} id="productSwipe">

                            <Product
                                name="Barber Title here"
                                price="$65.00"
                                img="https://htmldemo.net/beeta/beeta/assets/img/product/product4.jpg"
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
                                img="https://htmldemo.net/beeta/beeta/assets/img/product/product8.jpg"
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
                                name="Barber Title here "
                                price="$65.00"
                                img="https://htmldemo.net/beeta/beeta/assets/img/product/product1.jpg"
                            />

                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>


            <div className="brand-area">
                <div className="brand-area-container">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        // modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={5}
                        Navigation
                        loop="true"
                        pagination={{ clickable: true }}
                        grabCursor="true"
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide id="productSwipe"><img className="img-brands" src="https://htmldemo.net/beeta/beeta/assets/img/brand/brand1.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide id="productSwipe"><img className="img-brands" src="https://htmldemo.net/beeta/beeta/assets/img/brand/brand2.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide id="productSwipe"><img className="img-brands" src="https://htmldemo.net/beeta/beeta/assets/img/brand/brand3.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide id="productSwipe"><img className="img-brands" src="https://htmldemo.net/beeta/beeta/assets/img/brand/brand4.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide id="productSwipe"><img className="img-brands" src="https://htmldemo.net/beeta/beeta/assets/img/brand/brand5.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide id="productSwipe"><img className="img-brands" src="https://htmldemo.net/beeta/beeta/assets/img/brand/brand3.jpg" alt="" /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}


export default ProductsPages