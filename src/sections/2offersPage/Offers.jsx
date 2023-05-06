import React from "react";
import useCountdown from "./Times"
import { useTime } from 'react-timer-hook';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from "../0navbar/nav";
import Home from "../1homePage/1homeSection/Home";


function Offers(propss) {

    function Creator(props) {
        return (
            <div className="offersContainer">
                <div className="discribtionContainer">
                    <h3>{props.title}</h3>
                    <p>{props.describe}</p>
                </div>
                <div id={props.id} className="offerImgContainer">
                    <img className="offerImg" src={props.imgs} alt="" />
                </div>
            </div>
        )
    }








    return (
        <>

            <div className="offers-container">
                <Creator imgs="https://htmldemo.net/beeta/beeta/assets/img/banner/banner1.jpg" title="Clothing.No18" describe="Sale Off 20% All Store" />
                <Creator id="mensOfferId" imgs="https://htmldemo.net/beeta/beeta/assets/img/banner/banner2.jpg" title="Men's Summer Sneaker" describe="Big Sale Off This Week" />
                <Creator imgs="https://htmldemo.net/beeta/beeta/assets/img/banner/banner3.jpg" title="Bag.No1" describe="Big Sale No Limited" />
            </div>


            <div className="bigOffer">

                <div className="offer-img-shower">

                    <a href="offers"><img className="img-offer" src="https://htmldemo.net/beeta/beeta/assets/img/product/product45.jpg" alt="" /></a>
{/*  */}



                </div>

                <div className="offer-details">
                    <div className="countDown-product-details">

                        <div className="product-name">
                            <h2> <a href="offers">Aesthetica Cosmetics</a> </h2>
                        </div>

                        <div className="product-ratting">

                            <ul>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                            </ul>

                        </div>

                        <div className="product-price">
                            <span className="current-price">$65.00</span>
                            <span className="old-price">$68.00</span>
                        </div>

                        <div className="product-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique saepe consectetur possimus perferendis, accusantium.</p>
                        </div>

                        <div className="product-timing">





                            <div className="DayTime">
                                <h4>{useCountdown.days}</h4>
                                <span>Days</span>
                            </div>

                            <div className="HourTime">
                                <h4>{useCountdown.hours}</h4>
                                <span>Hrs</span>
                            </div>

                            <div className="MinsTime">
                                <h4>{useCountdown.minutes}</h4>
                                <span>Mins</span>
                            </div>

                            <div className="SecsTime">
                                <h4>{useCountdown.seconds}</h4>
                                <span>Secs</span>
                            </div>




                        </div>

                        <div className="product-button">
                            <button onClick={propss.addIt} className="add-btn"> Add to Cart</button>
                            <a href="offers"><button className="show-btn">Show</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Offers;