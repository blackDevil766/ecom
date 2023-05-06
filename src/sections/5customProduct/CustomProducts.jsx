
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Storeitem from "../data/StoreItem.json";
function CustomProducts() {
    function CustomProductCreator(props) {
        return (

            <div className="featured-product">

                <div className="shopProducts">

                    <img className="customProduct-img" src={props.imgs} alt="" />

                    <div className="customProductData-Container">

                        <div className="customProduct-Name">
                            <h2><a href="">{props.name}</a></h2>
                        </div>

                        <div className="customProduct-Price">
                            <span className="custom-current-price">{props.currentPrice}</span>
                            <span className="custom-old-price">{props.oldPrice}</span>
                        </div>

                        <div className="customProduct-stars">
                            <ul>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                            </ul>
                        </div>

                        <div className="hidden-icons-customProducts">
                            <a href="#"><img title="add to cart" className="hidden-Bag" src="imgs\shoppingBag.svg" alt="" /></a>
                            <a href="#"><img className="hidden-reverse" src="imgs\reverse.svg" alt="" /></a>
                            <a href="#"><img className="hidden-heart" src="imgs\heart.svg" alt="" /></a>
                        </div>

                    </div>


                </div>
            </div>
        )
    }


    return (
        <>
            <div className="customProduct-container">
                {/* <div className="row"> */}
                <div className="products-container col-lg-4 col-md-12">
                    <h2 className="custom-product-name">Featured</h2>

                    <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Aesthetica 5-Piece Brow" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product2.jpg" />
                    <CustomProductCreator currentPrice="$63.00" name="Barber Title here" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product1.jpg" />
                    <CustomProductCreator currentPrice="$85.00" name="Bareminerals Illuminating" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product3.jpg" />
                </div>

                <div className="products-container col-lg-4 col-md-12">

                    <h2 className="custom-product-name">Bestseller</h2>

                    <CustomProductCreator currentPrice="$55.00" oldPrice="$78.00" name="Aftershave Lotion" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product4.jpg" />
                    <CustomProductCreator currentPrice="$65.00" name="Barber Title here" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product5.jpg" />
                    <CustomProductCreator currentPrice="$45.00" name="Anastasia Beverly Hills" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product6.jpg" />

                </div>

                <div className="products-container col-lg-4 col-md-12">

                    <h2 className="custom-product-name">Trend Fashion</h2>
                    <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Aesthetica 5-Piece Brow" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product7.jpg" />
                    <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Barber Title here" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product8.jpg" />
                    <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Bareminerals Illuminating" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product9.jpg" />

                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default CustomProducts;


























{/* <>
<div className="customProduct-container">
    <div className="products-container col-lg-4 col-md-12">

        <h2 className="custom-product-name">Featured</h2>
        
        <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Aesthetica 5-Piece Brow" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product2.jpg" />
        <CustomProductCreator currentPrice="$63.00" name="Barber Title here" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product1.jpg" />
        <CustomProductCreator currentPrice="$85.00" name="Bareminerals Illuminating" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product3.jpg" />

    </div>

    <div className="products-container col-lg-4 col-md-12">

        <h2 className="custom-product-name">Bestseller</h2>
        <CustomProductCreator currentPrice="$55.00" oldPrice="$78.00" name="Aftershave Lotion" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product4.jpg" />
        <CustomProductCreator currentPrice="$65.00"  name="Barber Title here" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product5.jpg" />
        <CustomProductCreator currentPrice="$45.00" name="Anastasia Beverly Hills" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product3.jpg" />

    </div>

    <div className="products-container col-lg-4 col-md-12">

        <h2 className="custom-product-name">Trend Fashion</h2>
        <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Aesthetica 5-Piece Brow" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product4.jpg" />
        <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Barber Title here" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product5.jpg" />
        <CustomProductCreator currentPrice="$65.00" oldPrice="$68.00" name="Bareminerals Illuminating" imgs="https://htmldemo.net/beeta/beeta/assets/img/product/product3.jpg" />

    </div>
</div>
</> */}

























































































































































































// import React from "react"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Storeitem from "../data/StoreItem";

// function CustomProducts() {

//     function CustomProductCreator(props) {
//         return (

//             <div className="featured-product">

//                 <div className="shopProducts">

//                     <img className="customProduct-img" src={props.imgs} alt="" />

//                     <div className="customProductData-Container">

//                         <div className="customProduct-Name">
//                             <h2><a href="">{props.name}</a></h2>
//                         </div>

//                         <div className="customProduct-Price">
//                             <span className="custom-current-price">{props.currentPrice}</span>
//                             <span className="custom-old-price">{props.oldPrice}</span>
//                         </div>

//                         <div className="customProduct-stars">
//                             <ul>
//                                 <li><a href="#"><i class="fa fa-star"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-star"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-star"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-star"></i></a></li>
//                                 <li><a href="#"><i class="fa fa-star"></i></a></li>
//                             </ul>
//                         </div>

//                         <div className="hidden-icons-customProducts">
//                             <a href="#"><img title="add to cart" className="hidden-Bag" src="imgs\shoppingBag.svg" alt="" /></a>
//                             <a href="#"><img className="hidden-reverse" src="imgs\reverse.svg" alt="" /></a>
//                             <a href="#"><img className="hidden-heart" src="imgs\heart.svg" alt="" /></a>
//                         </div>

//                     </div>


//                 </div>
//             </div>
//         )
//     }


//     return (
//         <>
//             <div className="customProduct-container">
//                 {/* <div className="row"> */}
//                 <div className="products-container col-lg-4 col-md-12">
//                     <h2 className="custom-product-name">Featured</h2>

//                     {Storeitem.map(item =>{
//                         <h1 key={item.id}>
//                             <Storeitem id = {item.id} imgUrl = {item.imgUrl} name = {item.name} price = {item.price} />
//                         </h1>
//                     })}

//                 </div>

//                 <div className="products-container col-lg-4 col-md-12">

//                     <h2 className="custom-product-name">Bestseller</h2>

                    
//                 </div>

//                 <div className="products-container col-lg-4 col-md-12">

//                     <h2 className="custom-product-name">Trend Fashion</h2>


//                 </div>
//                 {/* </div> */}
//             </div>
//         </>
//     )
// }

// export default CustomProducts;
