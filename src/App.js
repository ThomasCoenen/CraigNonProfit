//ReactStripeCheckout - only component u need to configure stripe on frontend
//npm install react-stripe-checkout

//create .ENV file in frontend ROOT
//React comes w/ DOTENV pckg so dont need to install it
//Place PublishableKey in front end. Secret Key goes in Backend


import './App.css';
import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout"
import curebuttonImg from './images/curebutton.png';
// import productImg from './images/productimg1.png';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import data from './data.js'
import FramedPrint from './FramedPrint';
import AboutPage from './AboutPage';
import Homescreen from './Homescreen';
// import FramedCanvas from './FramedCanvas';
import GalleryScreen from './GalleryScreen';
// import ContactScreen from './ContactScreen';
// import ContactForm from './contact'
import Contact from './components/Contact';



//pckg.json:
// "proxy": "http://localhost:3000",


function App() {

  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10, //10$
    productBy: "facebook"
  });

  //token automatically created for u
  const makePayment = token => {

    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }
    //fire up request to backend. can also use Axios to do this. 
    //MAKE SURE IF HOSTING ON AN REAL SERVER USE HTTPS
    return fetch(`http://localhost:3000/payment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
    //success part
    .then(response => { //lets see what the response looks like
      console.log("RESPONSE: ", response)
      const {status} = response; //destructure status from response
      console.log("STATUS: ", status);
    })
    .catch(error => console.log(error));
  }

  return (
  <BrowserRouter>
    <div class="container">

      <header class="header" id="myHeader">

        <ul class="list">
            {/* <li><img className="cureimg" src="/images/curebutton.png" alt=""></img></li> */}
            <li><img className="cureimg" src={curebuttonImg} alt=""></img></li>

        </ul>

        <ul class="links">
            <li className="try"><Link className="home" to="/">Home</Link></li>
            <li className="try"><Link className="home"  to="/about">About</Link></li>
            <li className="try"><Link className="home"  to="/gallery">Gallery</Link></li>
            <li className="try"><Link className="home"  to="/contact">Contact</Link></li>
            {/* <Link className="brand" to="/about">amazona</Link> */}

            {/* <li><a className="home" href="/">Home</a></li> */}
            {/* <li><a className="home" href="index.html">About</a></li> */}
        </ul>
      </header>

      {/* must pass publishablekey, token, name(not necesssary). Token responsible 
      for firing up some things. Fires up a method   */}
      {/* <StripeCheckout 
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name="Click to Donate"
        amount={product.price * 100}
        shippingAddress
        billingAddress>
        <button className="donate">Click to Donate ${product.price}</button>
      </StripeCheckout> */}

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/framedprint">
            <FramedPrint />
          </Route>
          <Route path="/framedcanvas">
            <Homescreen />
          </Route>
          <Route path="/gallery">
            <GalleryScreen />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Homescreen />
          </Route>
        </Switch>

        <section id="contact">
          <ul id="connect-links">
            <li><a className="connect" href="http://www.craigpaulstudio.com/">CraigPaulStudio</a>
            </li>

            <li><a className="connect"  href="asdf">LinkedIn</a></li>
            <li><a className="connect"  href="afs.com">Email Me</a></li>
          </ul>

        </section>

        <footer>
          <h3>Website Design by Craigpaulstudio.com</h3>
        </footer>

    </div>

  </BrowserRouter>
  );
}

export default App;



// git add .
//git commit -m "fixxxxxed"
//npm run deploy
//git push -u origin master





// "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
// "main": "index.js",
// "repository": {
//   "type": "git",
//   "url": "git+https://github.com/ThomasCoenen/Craigssite-.git"
// },
// "author": "",
// "license": "ISC",
// "bugs": {
//   "url": "https://github.com/ThomasCoenen/Craigssite-/issues"
// }




// html {
//     /* margin: auto 0; */
//     /* overflow: hidden; */
//     background: url(images/backgroundimg.png) no-repeat center center fixed;
//     /* background-image: url("images/backgroundimg.png"); */
//     /* background-repeat: no-repeat; Do not repeat the image */
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     background-size: cover; /* Resize the background image to cover the entire container
//     /* background-attachment: fixed; */ 
//     background-repeat: no-repeat; 
//     font-size: 62.5%; 
//     /* box-sizing: border-box; */
//   }
  
//   body {
//     margin: 0;
//     height: 100vh; /* set height to the full height */
//     font-size: 1.6rem;
//     font-family: Helvetica Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   /* 
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif; */
//   }
  
//   /* code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   } */
  
//   /* add this line. use bc we have root id inside public/index.html */
//   #root {
//     height: 100%;
//   }
  
//   .grid-container {
//     display: grid;
//     /* 3 sections here */
//     /* grid-template-areas: 
//       'header'
//       'main'
//       'footer'; */
//     /* define rows and columns */
//     /* grid-template-columns: auto;
//     grid-template-rows: auto; */
//     height: 100%; 
//   }
  
//   /* Top header */
  
//   .topheader {
//     display: grid;
//     /* grid-template-columns: 50px 1fr; */
//     grid-template-columns: auto auto;
//     grid-template-rows: auto;
//     /* grid-template-columns: auto;
//     grid-template-rows: auto auto; */
//     grid-gap: 500px;
//     align-items: center;
//     /* align-items: start; */
//     /* justify-items: center; */
//     height: 100px;
//     background-color: rgb(0, 0, 0);
//     opacity: 0.7;
//     font-size: 22px;
    
//     /* text-decoration: none; */
//     /* justify-items: end; */
//   }
  
//   .cureimg {
//     display: grid;
//     justify-items: center;
//     text-decoration: none;
//     height: 100px;
//     width: 375px;
//   }
  
//   .navigation {
//     display: grid;
//     grid-template-columns: auto auto auto auto auto auto;
//     justify-items: center;
//     /* text-decoration: none; */
//   }
  
//   .navigation a {
//     text-decoration: none;
//   }
  
//   /* .cureimg {
//     height: 100px;
//     width: 375px;
//   } */
  
//   .center {
//     display: grid;
//     justify-items: center;
//   }
  
//   /* Bottom header */
  
//   .bottomheader {
//     display: grid;
//     /* grid-gap: 50px; */
//     margin-bottom: 50px;
//     /* align-items: center; */
//     justify-items: center;
//   }
  
//   .options {
//     display: grid;
//     grid-template-columns: auto auto;
//     grid-gap: 40px;
//     justify-items: center;
//   }
  
//   /* .buttonhome {
//     height: 60px;
//     width: 400px;
//   } */
  
//   /* MAIN */
  
//   main {
//     display: grid;
//     grid-gap: 14px;
//     /* justify-items: center; */
//   }
  
//   .product{
//     display: grid;
//     grid-template-columns: auto auto;
//     grid-gap: 30px;
//   }
  
//   .image_prod {
//     height: 500px;
//     width: 500px;
//   }
  
//   /* .donate {
//     text-align: center;
//     color: white;
//     background-color: blue;
//     height: 60px;
//     width: 400px;
//     font-size: 35px;
//   } */
  
  
//   /* Common */
  
//   button {
//     text-align: center;
//     border-radius: 0.5rem;
//     padding: 0rem;
//     /* margin: 5px; */
//     color: white;
//     background-color:blue;
//     height: 60px;
//     width: 400px;
//     font-size: 27px;
//     border: none;
//   }
  
  
