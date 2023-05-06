import React from "react";
import { useState } from "react";
import Product from "../../3ProductArea/productCreator";
import Products from "../../data/productData";
function Cart() {

    const items = []
    const [addToCart, setAddToCart] = useState([]);

    function AddedCart(props) {
        return (
            <tr>
                <td><img onClick={removeIt} src="imgs/trash.svg" alt="" /></td>
                <td ><img src="https://htmldemo.net/beeta/beeta/assets/img/cart/cart17.jpg" alt="" /></td>
                <td>prodct name</td>
                <td>product price</td>
                <td><input className="inputQuntity" type="number" min="1" max="100" /></td>
                <td>product totle</td>
            </tr>
        )
    }

  

    function clickIt(click) {
        // setAddToCart(items.map(item => {
        //     return item
        // }))
    }

    function removeIt(props) {
        setAddToCart("")
    }


    // console.log(addToCart);


    return (
        <>
            <div className="cartContainer">
                <div className="productShower-title">
                    <a href="/">Home</a>
                    <span>/</span>
                    <p>Cart</p>
                </div>
                <div className="cart-table">
                    <table className="cart-table">

                        <tr className="headTextTable">
                            <th>delete</th>
                            <th>image</th>
                            <th>product</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                        </tr>

                        
                        {addToCart}


                    </table>



                </div>
                {/* <button type="submit" onClick={clickIt}>add</button> */}
            </div>

            <div className="products">
                {
                Products.map((product) =>{
                    return <Product addBtn = {clickIt} id = {product.id} name = {product.name} price = {product.price} img = {product.img}/>
                })
                }
            </div>
        </>
    )
}


export default Cart;




















































// import React from "react";
// import { useState } from "react";

// function Cart() {

//     const [addToCart, setAddToCart] = useState({});

//     function AddedCart(porps) {
//         return (
//             <tr>
//                 <td><img src="imgs/trash.svg" alt="" /></td>
//                 <td><img src="https://htmldemo.net/beeta/beeta/assets/img/cart/cart17.jpg" alt="" /></td>
//                 <td>prodct name</td>
//                 <td>product price</td>
//                 <td><input className="inputQuntity" type="number" min="1" max="100" /></td>
//                 <td>product totle</td>
//             </tr>
//         )
//     }

//     function clickIt(props) {
//         setAddToCart(() =>{
//             AddedCart.map(name => (
//                 <>
//                     {name}
//                 </>
//             ))
//         })
//     }

//     // console.log(addToCart);


//     return (
//         <>
//             <div className="cartContainer">
//                 <div className="productShower-title">
//                     <a href="/">Home</a>
//                     <span>/</span>
//                     <p>Cart</p>
//                 </div>
//                 <div className="cart-table">
//                     <table className="cart-table">

//                         <tr className="headTextTable">
//                             <th>delete</th>
//                             <th>image</th>
//                             <th>product</th>
//                             <th>price</th>
//                             <th>quantity</th>
//                             <th>total</th>
//                         </tr>

//                         {
//                             addToCart.map(item =>{
//                                 <>
//                                     {item}
//                                 </>
//                             })
//                         }
                        


//                     </table>

//                 </div>
//                 <button type="submit" onClick={clickIt}>add</button>
//             </div>
//         </>
//     )
// }


// export default Cart;
