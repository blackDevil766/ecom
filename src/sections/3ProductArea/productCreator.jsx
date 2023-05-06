import React from "react";


function Product(props) {

    return (
        <>
            <div className="product">
                
                <div className="product-hidden-part" href="">
                    <div>
                        <button onClick={props.addBtn}>+ Add To Cart</button>
                        <img className="hidden-reverse" src="imgs\reverse.svg" alt="" />
                        <img className="hidden-heart" src="imgs\heart.svg" alt="" />
                    </div>

                    <img className="hidden-eye" src="imgs\eye1.svg" alt="" />

                </div>
                <img className="product-imgs" src={props.img} alt="" />

                <div className="product-contact">
                    <h2 className="product-name">{props.name}</h2>

                    <div>
                        <p className="product-price">{props.price}</p>

                        <ul> 
                            {props.Stars}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;