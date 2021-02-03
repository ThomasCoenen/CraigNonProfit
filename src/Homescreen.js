import './App.css';
import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout"
import { Link} from 'react-router-dom';
import data from './data.js'

export default function Homescreen() {

let token;
let product;

//token automatically created for u
const makePayment = (token, product) => {
  const body = {
    token,
    product
  }
  // alert(product)
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
    //!!!!!!
    <div class="content"> 
        <section id="welcome">
          <h3 className="saying">HELP US HEAL AND CURE MORE CHILDREN EVERY DAY!</h3>
          <p className="saying">HIGH QULAITY DUAL PANEL FRAMED ART COMMENMORATIVES</p>
        </section>

        <section id="projects">

          <div id="mainbuttons">
              <Link to="/framedcanvas">
                <button className="artbuttons">FRAMED CANVAS OPTIONS</button>
              </Link>
              <Link to="/framedprint">
                <button className="artbuttons">FRAMED PRINT OPTIONS</button>
              </Link>


          </div>

          <div class="project-grid">
                    
                {
                  data.products.map((product, i) => (
                    <>
                        <div key={product._id} className="product">
                          <img className="image_prod" src={product.image} alt={product.name}/>
                          <div className="itemstuff">
                            <h1 className="itemname">{product.name}</h1>
                            <p className="description">Features:<br/>Beautiful Champagne Siler Finish<br/>Triple Matted w/ Float Spacer<br/>Tru Vue Glass<br/>High Quality engraved CURE Gold Partner<br/>Commenmorative plate<br/>Great Silent CURE Witness<br/><br/>"REDEEMED"<br/>CURE Commenmorative (White Version)<br/>20"x32" Outside Dimension<br/>With ${product.price} Donation</p>
                            <StripeCheckout
                              stripeKey={process.env.REACT_APP_KEY}
                              token={makePayment(token, product)}
                              name="Click to Donate"
                              amount={product.price * 100}
                              shippingAddress
                              billingAddress
                            >
                              <button className="donate">CLICK TO DONATE ${product.price}</button>
                            </StripeCheckout>
                          </div>
                        </div>  
                      <br/>
                    </>            
                  ))
                }
                
          </div>

        </section>

    </div>
    )
}
