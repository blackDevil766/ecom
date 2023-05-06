import React from "react";

function Footer() {

    function FooterData(props) {
        return (
            <div className="Footer-data">

                <div className="footer-containers-classs">
                    <h3 className="footer-title">{props.title}</h3>

                    <ul>
                        <li className="footerList"> {props.li1}</li>
                        <li className="footerList"> {props.li2}</li>
                        <li className="footerList"> {props.li3}</li>
                        <li className="footerList"> {props.li4}</li>
                        <li className="footerList"> {props.li5}</li>
                        <li className="footerList"> {props.li6}</li>
                        <li className="footerList"><img className="payment-method" src={props.imgy} alt="" /></li>
                    </ul>

                </div>

            </div>
        )
    }


    function Contact(props) {
        return (
            <div className="Footer-data">

                <div className="footer-containers-classs">
                    <h3 className="footer-title">{props.title}</h3>

                    <ul>
                        <li><img src={props.HomeIco} alt="" /> {props.li1}</li>
                        <li><img src={props.phoneIco} alt="" /> {props.li2}</li>
                        <li><img src={props.faxIco} alt="" /> {props.li3}</li>
                        <li><img src={props.mailIco} alt="" /> <a className="mail" href="">{props.li4}</a></li>
                        
                        <li><img className="payment-method" src={props.imgy} alt="" /></li>
                    </ul>

                </div>

            </div>
        )
    }


    return (
        <>
            <div className="Footer-container">
                <div className="Footer">

                    <div className="Footer-data">

                        <div className="footer-containers-classs">
                            <h3 className="footer-title">About Us</h3>
                            <p className="footer-describ">The new hero pieces bring instant fashion credibility. Bright florals clash with camouflage prints</p>
                            <div className="community">
                                <h3 className="footer-title">Follow Us</h3>
                                <div className="followUsIn">

                                    <ul className="social-links">
                                        <li className="faceBook"> <img src="" alt="" /><i className="socialIco ri-facebook-fill"></i></li>
                                        <li className="Twitter"  > <img src="" alt="" /><i className="socialIco ri-twitter-fill"></i></li>
                                        <li className="rss"     > <img src="" alt="" /><i className="socialIco ri-rss-fill"></i></li>
                                        <li className="Google"  > <img src="" alt="" /><i className="socialIco ri-google-fill"></i></li>
                                        <li className="linkedin"  > <img src="" alt="" /><i className="socialIco ri-linkedin-fill"></i></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>


                    <FooterData title="Information" li1="About Us" li2="Services" li3="Delivery Information" li4="Privacy Policy" li5="Terms & Conditions" li6="Return Policy" />
                    <FooterData title="My Account" li1="My account" li2="Cart" li3="Checkout" li4="Contact" li5="Validation" li6="Wishlist" />
                    <Contact title="Get In Touch" li1="123 Main Street, Anytown, CA 12345 USA." li2="+02 010 1560 3786" li3="123 456 789" li4=" Contact@towerthemes.com" HomeIco="imgs\home.svg" phoneIco="imgs\phone.svg" faxIco="imgs\fax.svg" mailIco="imgs\openMail.svg" imgy="https://htmldemo.net/beeta/beeta/assets/img/visha/payment.png" />




                </div>



                <div className="copyRight">
                    <div className="madeBy">
                        <p>© Beeta 2021 Made With ❤ By <span><a className="ownerName" href="/allam"> ALLAM</a></span></p>
                    </div>

                    <div className="footer-menu">
                        <ul>
                            <li>Online Shopping</li>
                            <li>Promotions</li>
                            <li>My Orders</li>
                            <li>Help</li>
                            <li>Customer Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;