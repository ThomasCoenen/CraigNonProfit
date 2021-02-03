//ReactStripeCheckout - only component u need to configure stripe on frontend
//npm install react-stripe-checkout

//create .ENV file in frontend ROOT
//React comes w/ DOTENV pckg so dont need to install it
//Place PublishableKey in front end. Secret Key goes in Backend


import './App.css';
import React, {useState, useEffect} from 'react';
import StripeCheckout from "react-stripe-checkout"
import curebuttonImg from './images/curebutton.png';
import homebuttonimg from './images/home.png';
import { BrowserRouter, Link, Route, Switch, useLocation, useParams} from 'react-router-dom';
import data from './data.js'
import FramedPrint from './FramedPrint';
import FramedCanvas from './FramedCanvas';

import AboutPage from './AboutPage';
import Homescreen from './Homescreen';
import GalleryScreen from './GalleryScreen';
import Contact from './components/Contact';
import Homescreen2 from './screens/Homescreen2';
import DualPanel from './DualPanel';

//pckg.json:
// "proxy": "http://localhost:3000",


function App() {

  const [path, setPath] = useState(window.location.pathname)

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

  console.log('pathname:', window.location.pathname)
  console.log('pathname:', typeof(window.location.pathname))

  useEffect(() => {
    // alert(path)
  },)

  return (
  // <BrowserRouter>
  <body className={path=== "/" ? "homepage" : "productpage"}>
    <BrowserRouter>

      <div class="container">

        <header className="header" id="myHeader">
          <img className="cureimg" src={curebuttonImg} alt=""></img>
          <Link to="/" onClick={() => setPath('/')}><img className="homebutton" src={homebuttonimg} alt=""></img></Link>
        </header>

        <header className="header2" id="myHeader2">
          <div></div>
          <h3 className="mainsaying">HELP US HEAL AND CURE MORE CHILDREN EVERY DAY!</h3>
          <br/>
        </header>

          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/framedprint">
              <FramedPrint path={path} setPath={setPath}/>
            </Route>
            <Route path="/framedcanvas">
              <FramedCanvas path={path} setPath={setPath}/>
            </Route>
            <Route path="/dualpanel">
              <DualPanel path={path} setPath={setPath}/>
            </Route>
            <Route path="/gallery">
              <GalleryScreen />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            {/* <Route path="/">
              <Homescreen />
            </Route> */}
            <Route path="/">
              <Homescreen2 path={path} setPath={setPath}/>
            </Route>
          </Switch>

          {/* <section id="contact">
            <ul id="connect-links">
              <li><a className="connect" href="http://www.craigpaulstudio.com/">CraigPaulStudio</a>
              </li>

              <li><a className="connect"  href="asdf">LinkedIn</a></li>
              <li><a className="connect"  href="afs.com">Email Me</a></li>
            </ul>

          </section> */}

          <footer>
            <h3>Website Design by Craigpaulstudio.com</h3>
          </footer>

      </div>
    </BrowserRouter>

  </body>

  // {/* </BrowserRouter> */}
  );
}

export default App;

//https://www.youtube.com/watch?v=F8s4Ng-re0E&list=LL&index=7

//npm install gh-pages --save-dev
//git init
//git remote add origin https://github.com/ThomasCoenen/CraigNonProfit.git
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

