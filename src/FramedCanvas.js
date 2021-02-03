import React from 'react';
import StripeCheckout from "react-stripe-checkout"
import { Link } from 'react-router-dom';
import './App.css';
// import data from './data2.js'
import data from './data/framedcanvas.js'


export default function FramedCanvas(props) {
    const {path, setPath} = props
    let token;
    let product;
  
    //token automatically created for u
    const makePayment = (token, product) => {
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
    <body className={path === "/" ? "homepage" : "productpage"}>

        <div className="projects">
            <p className="saying" style={{ paddingBottom: "16px", fontWeight: "bold"}}>HIGH QUALITY FRAMED CANVAS ART COMMENMORATIVES</p>
            <div className="mainbuttons">
                <Link to="/dualpanel">
                  <button className="artbuttons" onClick={() => setPath('dualpanel')}>DUAL PANEL OPTIONS</button>
                </Link>
                <Link to="/framedprint">
                  <button className="artbuttons" onClick={() => setPath('framedprint')}>FRAMED PRINT OPTIONS</button>
                </Link>
            </div>
            <br/>

          { 
          data.products.map((product) => (
            // <div className="project-grid">
            <div key={product._id} className="project-grid">
              <div className="imgitemcont">
                <img className="imgitem" src={product.image} alt={product.name}/>
              </div>
              <div className="itemstuff">
                <h1 className="itemname">{product.name}</h1>
                <p className="description">Features:<br/>Beautiful Champagne Siler Finish<br/>Triple Matted w/ Float Spacer<br/>Tru Vue Glass<br/>High Quality engraved CURE Gold Partner<br/>Commenmorative plate<br/>Great Silent CURE Witness<br/><br/>"REDEEMED"<br/>CURE Commenmorative (White Version)<br/>20"x32" Outside Dimension<br/>With ${product.price} Donation</p>
                <StripeCheckout
                  stripeKey={process.env.REACT_APP_KEY}
                  token={makePayment(product)}
                  name="Click to Donate"
                  amount={product.price * 100}
                  shippingAddress
                  billingAddress
                >
                  <button className="donate">CLICK TO DONATE ${product.price}</button>
                </StripeCheckout>
              </div>
              <br/>
            </div>
            // <br/>
          // </div>            
          ))
          }

            <div className="mainbuttons">
              <Link to="/dualpanel">
                  <button className="artbuttons">DUAL PANEL OPTIONS</button>
                </Link>
                <Link to="/framedcanvas">
                  <button className="artbuttons">FRAMED CANVAS OPTIONS</button>
              </Link>
            </div>

        </div>
    </body>

    )
}
