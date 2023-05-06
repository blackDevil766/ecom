// // // import './App.css';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import NavBar from './sections/0navbar/nav';
// import Home from './sections/1homePage/1homeSection/Home';
// import Contact from './sections/2contactPage/Contact';


// function App() {
//   return (
//     <>

//       <NavBar />

//       <Router>
//         <Route path="/" component={Home} />
//       </Router>

//       <Router>
//         <Route path="/contact" component={Contact} />
//       </Router>


//     </>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './sections/0navbar/nav';
import Home from './sections/1homePage/1homeSection/Home';
import Offers from './sections/2offersPage/Offers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewProductArea from './sections/3ProductArea/NewProductArea';
import NewLetter from './sections/4Newsletter/newsLetter';
import CustomProducts from './sections/5customProduct/CustomProducts';
import Blog from './sections/6Blog/Blog';
import Footer from './sections/7Footer/Footer'; 
import ProductsPages from './sections/Pages/8showProduct/ShowProductPage';
import { useEffect, useState } from 'react';
import Cart from "./sections/Pages/CashSection/Cart";
// import Contact from './sections/2contactPage/Contact';

export default function App() {

  

  return (
    <>

      <Router>
        <Switch>

          <Route path="/offers">
            <Products />
          </Route>

          <Route path="/Cart">
            <CartPart />
          </Route>

          <Route path="/">
            <Homey />
          </Route>

        </Switch>
      </Router>

    </>

  );
}



function Homey() {

  // const [details, setDetails] = useState(()=>{
  //   return{
  //     temp: "",
  //     describ:""
  //   }
  // });

  // useEffect((de) => {
  //   fetch("http://localhost:8000")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDetails(()=>{
  //         return{
  //           temp: data.temprary,
  //           describ: data.description
  //         }
  //       })
  //       // setMessage(data.temprary)
  //       // setTime(data.description)
  //       // console.log(data);  
  //     })
  // } , []);
  

  return (
    <>
      <NavBar />
      <Home />
      <Offers />
      <NewProductArea />
      <NewLetter />
      <CustomProducts />
      <Blog />
      <Footer />
    </>
  )
}

function Products() {
  return (
    <>
      <NavBar />
      <ProductsPages />
      <Footer />
    </>
  )
}


function CartPart() {
  return (
    <>
      <NavBar />
      <Cart />
      <Footer />
    </>
  )
}



