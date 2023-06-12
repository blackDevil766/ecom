import React, { useState } from "react";
import NavItem from "./navItemCreator";
import Items1, { Items21, Items22, Items23, Items31, Items32, Items33, Items4 } from "./innerItems";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {

    const [onscrolls, setOnScroll] = useState()

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 150) {
            setOnScroll("navBar")
        } else {
            setOnScroll("")
        }

    })


    return (
        <>



            <Navbar className="navset" id={onscrolls} bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Toggle className="nav-toggle" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="navContainer me-auto my-2 my-lg-0" >

                            <Nav.Link href="/">
                                <NavItem lines="hello ahmed allam" classy="nav-link activetem" nameOfNavItem="Home" iteys=
                                    {
                                        <ul className="nav-items-container">
                                            {Items1.map(i => {
                                                return <li className="nav-items1"><a className="nav-items-links" href="#">{i}</a> </li>;
                                            })}
                                        </ul>
                                    }
                                />
                            </Nav.Link>

                            <Nav.Link href="#action2"><NavItem lines="hello ahmed allam1" classy="nav-link navItem" nameOfNavItem="Shop"
                                iteys=
                                {

                                    <ul className="div-nav-container">

                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>SHOP LAYOUTS</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items21.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>

                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>OTHER PAGES</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items22.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>


                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>PRODUCT TYPES</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items23.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>
                                    </ul>

                                }
                            />
                            </Nav.Link>

                            <Nav.Link href="#">
                                <NavItem lines="hello ahmed allam1" classy="nav-link navItem" nameOfNavItem="Blog"
                                    iteys={
                                        <ul className="div-nav-container">

                                            <li className="nav-items-container2">
                                                <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>BLOG LAYOUTS</strong></a></li>
                                                <ul className="ul-nav-container">
                                                    {Items31.map(i => {
                                                        return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                    })}
                                                </ul>
                                            </li>

                                            <li className="nav-items-container2">
                                                <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>BLOG PAGES</strong></a></li>
                                                <ul className="ul-nav-container">
                                                    {Items32.map(i => {
                                                        return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                    })}
                                                </ul>
                                            </li>


                                            <li className="nav-items-container2">
                                                <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>POST FORMATS</strong></a></li>
                                                <ul className="ul-nav-container">
                                                    {Items33.map(i => {
                                                        return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>
                                    }
                                />
                            </Nav.Link>

                            <Nav.Link href="#">
                                <NavItem lines="hello ahmed allam1" classy="nav-link navItem" nameOfNavItem="Pages"
                                    iteys={
                                        <ul className="nav-items-container">
                                            {Items4.map(i => {
                                                return <li className="nav-items1"><a className="nav-items-links" href="#">{i}</a> </li>;
                                            })}
                                        </ul>
                                    }
                                />
                            </Nav.Link>

                            <Nav.Link href="#action1">
                                <a id="item" className="nav-link navItem" href="Contact Us">Contact Us</a>
                            </Nav.Link>

                            {/*       brand      */}
                            <Navbar.Brand href="#">
                                <a id="brandImg" className="navbar-brand" href="#"><img src="https://htmldemo.net/beeta/beeta/assets/img/logo/logo.png" alt="" style={{ maxWidth: "110px" }} /></a>
                            </Navbar.Brand>
                            {/*      brand       */}


                            <Nav.Link href="#action2">
                                <a id="item" className="nav-link navItem" href=""><span>Login / Register</span></a>
                            </Nav.Link>

                            <div class="wd-header-divider wd-full-height  whb-divider-element"></div>

                            <Nav.Link href="#">
                                <a id="navIco" className="nav-link" href=""><span><img src="imgs\search.svg" alt="" /></span></a>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <a id="navIco" className="nav-link" href=""><span><img src="imgs\heart.svg" alt="" /></span></a>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <a className="shoping-btn" href="Cart">
                                    <span><img src="imgs\shopping-bag.svg" alt="" /></span>
                                    <span><p>0 / $0.00</p></span>
                                </a>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>





            {/* <nav id={onscrolls} className="navset navbar navbar-expand-lg navbar-light" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul id="item-nav-continer" className="navbar-nav">

                        <div className="nav-item-container">

                            <NavItem lines="hello ahmed allam" classy="nav-link activetem" nameOfNavItem="Home" iteys=
                                {
                                    <ul className="nav-items-container">
                                        {Items1.map(i => {
                                            return <li className="nav-items1"><a className="nav-items-links" href="#">{i}</a> </li>;
                                        })}
                                    </ul>
                                }
                            />

                            <NavItem lines="hello ahmed allam1" classy="nav-link navItem" nameOfNavItem="Shop"
                                iteys=
                                {

                                    <ul className="div-nav-container">

                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>SHOP LAYOUTS</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items21.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>

                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>OTHER PAGES</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items22.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>


                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>PRODUCT TYPES</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items23.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>
                                    </ul>

                                }
                            />

                            <NavItem lines="hello ahmed allam1" classy="nav-link navItem" nameOfNavItem="Blog"
                                iteys={
                                    <ul className="div-nav-container">

                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>BLOG LAYOUTS</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items31.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>

                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>BLOG PAGES</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items32.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>


                                        <li className="nav-items-container2">
                                            <li className="nav-items title-nav"><a className="nav-items-title" href="#"><strong>POST FORMATS</strong></a></li>
                                            <ul className="ul-nav-container">
                                                {Items33.map(i => {
                                                    return <li className="nav-items"><li className="nav-items-links" href="#">{i}</li></li>;
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                }
                            />
                            <NavItem lines="hello ahmed allam1" classy="nav-link navItem" nameOfNavItem="Pages"
                                iteys={
                                    <ul className="nav-items-container">
                                        {Items4.map(i => {
                                            return <li className="nav-items1"><a className="nav-items-links" href="#">{i}</a> </li>;
                                        })}
                                    </ul>
                                }
                            />

                            <li className="nav-item active">
                                <a id="item" className="nav-link navItem" href="Contact Us">Contact Us</a>
                            </li>
                        </div>


                        <div className="brand-container">
                            <a id="brandImg" className="navbar-brand" href="#"><img src="https://htmldemo.net/beeta/beeta/assets/img/logo/logo.png" alt="" style={{ maxWidth: "110px" }} /></a>
                        </div>


                        <div class="wd-header-divider wd-full-height  whb-divider-element"></div>

                        <div className="rightNavSection">
                            <li className="nav-item active">
                                <a id="item" className="nav-link navItem" href=""><span>Login / Register</span></a>
                            </li>

                            <li className="nav-item active">
                                <a id="navIco" className="nav-link" href=""><span><img src="imgs\search.svg" alt="" /></span></a>
                            </li>

                            <li className="nav-item active">
                                <a id="navIco" className="nav-link" href=""><span><img src="imgs\heart.svg" alt="" /></span></a>
                            </li>

                            <li className="nav-item active">
                                <a className="shoping-btn" href="Cart">
                                    <span><img src="imgs\shopping-bag.svg" alt="" /></span>
                                    <span><p>0 / $0.00</p></span>
                                </a>
                            </li>

                        </div>


                    </ul>
                </div>
            </nav> */}
        </>
    )
}

export default NavBar;