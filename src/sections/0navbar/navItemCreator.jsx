import React from "react";
import { useState } from "react";

function NavItem(props) {

    const [init, setInit] = useState(() => {
        return {
            visible: "",
            opacity: "",
            transform:""
        }
    });


    function iny() {
        setInit(() => {
            return {
                visible: "visible",
                opacity: "100%",
                transform: "scaley(1)"
            }
        })
    }

    function lefty() {
        setInit(() => {
            return {
                visible: "hidden",
                opacity: "0%",
                transform: "scaley(0)"
            }
        })
    }


    function iny2() {
        setInit(() => {
            return {
                visible: "visible",
                opacity: "100%",
                transform : "scaley(1)"
            }
        })
    }

    function lefty2() {
        setInit(() => {
            return {
                visible: "hidden",
                opacity: "0%",
                transform: "scaley(0)"
            }
        })
    }


    return (
        <>
            <li className="nav-item active">
                <a onMouseOver={iny} onMouseOut={lefty} id="item" className={props.classy} href="Home">{props.nameOfNavItem} <img className="arrowIco" src="imgs\downArrow.svg" alt="" /> </a>

                <div onMouseOver={iny2} onMouseOut={lefty2} className="flyingDiv" style={{ visibility: init.visible, opacity: init.opacity, transform: init.transform }}>
                    {props.iteys}
                    {/* <li>{props.lines}</li> */}
                </div>
            </li>
        </>
    )
}


export default NavItem;