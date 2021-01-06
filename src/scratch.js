// import logo from './logo.svg';
import './App.css';
import React from 'react';
import curebuttonImg from './images/curebutton.png';
import productImg from './images/productimg1.png';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import data from './data.js'
import framedPrint from './framedPrint';
import AboutPage from './AboutPage';
import Homescreen from './Homescreen';




function App() {
  return (
  <BrowserRouter>
    <div class="container">

      <header class="header" id="myHeader">

        <ul class="list">
            {/* <li><img className="cureimg" src="/images/curebutton.png" alt=""></img></li> */}
            <li><img className="cureimg" src={curebuttonImg} alt=""></img></li>

        </ul>

        <ul class="buttons">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><a className="home" href="/">Home</a></li> */}
            {/* <li><a className="home" href="index.html">About</a></li> */}
            {/* <li><a className="home" href="index.html">Gallery</a></li> */}
            {/* <li><a className="home" href="index.html">Contact</a></li> */}
        </ul>
      </header>


      <div class="content">

        <section id="welcome">
          <h3>HELP US HEAL AND CURE MORE CHILDREN EVERY DAY!</h3>
          <p>HIGH QULAITY DUAL PANEL FRAMED ART COMMENMORATIVES</p>
        </section>

        <section id="projects">

          <div id="mainbuttons">
              <button className="artbuttons" href="">FRAMED CANVAS OPTIONS</button>
              {/* <button className="artbuttons" href="">FRAMED PRINT OPTIONS</button> */}
              <Link to="/framedprint">
                <button className="artbuttons">FRAMED PRINT OPTIONS</button>
              </Link>

          </div>

          <Route
            path="/about"
            component={AboutPage}>
          </Route>

          <Route
            path="/framedprint"
            component={framedPrint}>
          </Route>

          <Route
            path="/"
            component={Homescreen}>
          </Route>





          <div class="project-grid">
                    
            <div className="product">
                <img className="image_prod" src={productImg} alt="product"/>
                <div className="itemstuff">
                  <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                  <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                  <button className="donate">CLICK TO DONATE</button>
                </div>
            </div>
            <br/>

            <div className="product">
                <img className="image_prod" src={productImg} alt="product"/>
                <div className="itemstuff">
                  <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                  <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                  <button className="donate">CLICK TO DONATE</button>
                </div>
            </div>
            <br/>


            <div className="product">
                <img className="image_prod" src={productImg} alt="product"/>
                <div className="itemstuff">
                  <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                  <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                  <button className="donate">CLICK TO DONATE</button>
                </div>
            </div>
            <br/>

            <div className="product">
                <img className="image_prod" src={productImg} alt="product"/>
                <div className="itemstuff">
                  <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                  <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                  <button className="donate">CLICK TO DONATE</button>
                </div>
            </div>
            <br/>

          </div>

        </section>


        <section id="contact">
          <ul id="connect-links">
            <li><a href="afd">GitHub</a>
            </li>

            <li><a href="asdf">LinkedIn</a></li>
            <li><a href="afs.com">Email Me</a></li>
          </ul>

        </section>

        <footer>
          <h3>Website Design by Craigpaulstudio.com and...</h3>
        </footer>

      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;







body {
  margin: auto 0;
  /* display: grid; */
  overflow: hidden;
  display: grid;

  background: url(images/backgroundimg.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  background-repeat: no-repeat; 
  width: 100%;
  height: 100%; 
  /* Resize the background image to cover the entire container
  background-repeat: no-repeat; 

  /* width: 100%; */
  /* font-family: Helvetica Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
} 

/* #root {
  height: 100%;
} */


/*grid container will take up all the viewport*/
.container {    

  /* background-repeat: no-repeat;  */
  /* font-size: 62.5%;  */
  /* box-sizing: border-box; */
  /* width: 100%;
  height: 100%; */
  height: 100%; 




height: 100vh;
width: 100vw;


display: grid;
  grid-template-columns: auto;
grid-template-rows: auto auto;
/* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 grid-template-columns: 1fr;*/
  /*overflow: hidden;*/
  /*font-size: 20px;*/
  /*width: 100%;*/
  /* justify-self: center; */
}

/*new stuff*/

#myHeader {
  display: grid;
  /*grid-template-columns: auto auto;*/
  /*grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));*/

  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));   WORKED (these 2 lines)
  grid-template-rows: auto; */

  grid-template-columns: 1fr 2.5fr;
    /* grid-template-columns: auto auto; */

  grid-template-rows: auto;

  /*grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));*/
  justify-items: center;
  width: 100%;
  height: 63px;
  /* background-color: rgb(52, 235, 158); */
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px; 
  background-color: rgb(0, 0, 0);
  opacity: 0.8;

}

.cureimg {
  height: 60px;
  max-width: 18rem;
  min-width: 80px;
  width: 70%;
  display: grid;
  /* justify-self: start; */
  /* align-self: start; */
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px -42px;
}

.list {
  list-style: none;
  justify-self: start;
  /*align-self: end;*/
  padding: 5px 0px 0px 40px;
  margin: 0px 0px 0px 0px;
  /* width: 100%; */
}

.buttons {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto;
  /* justify-items: start; */
  /* justify-items: end; */
  justify-self: end;
  padding: 10px 30px 0px 2px;
  margin: 0px 0px 0px 10px;
  /* width: 10%; */

}

.buttons li {
  display: grid;
  /* grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto; */
  text-decoration: none;
  /* justify-self: end; */
  margin: 15px 18px 0px 0px;
  font-size: 15px;
  /* width: 100%; */

}

.home {
  text-decoration: none;
  padding: 0px 10px 0px 0px;
  margin: 0px 0px 0px 2px;
}

.content {
  /* height: 100vh;
  width: 100vw; */
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;

   overflow: hidden; /*hide any overflow to ensure that nothing leaks outside of the .content element that would disturb the parent’s layout.*/
   overflow-y: scroll;
   /* background-color: Lightgrey; */
  font-size: 25px;
   /*margin: 0px;*/
   /*margin: auto 0;*/
   /*padding: 0px -10px 0px 0px;*/
   /*padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;*/
  /*float: left;*/
  width: 100%;
     /* width: 100vw; */

}

#welcome {
  display: grid;
  grid-template-columns: auto;
  /*grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));*/
  grid-template-rows: auto auto;
  /* justify-items: center; */
  text-align: center;
  width: 85%;
  font-size: 13px;
  justify-items: center;
  align-items: center;
  grid-gap: 0px;
}

#projects {
  display: grid;
  grid-template-columns: auto;
  /*grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));*/
  grid-template-rows: auto;
  justify-items: center;
  /* background-color: red; */
  width: 100%;
}

#mainbuttons {
  /* font-size: 35px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  grid-template-rows: auto auto;
  width: 80%; */


  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 50px;
  padding: 0px 30px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 70%;
}

button {
  border-radius: 7px;
  /* color: blue; */
  color: white;
  font-weight: bold;
  background-color: blue;
  width: 80%;
}

button:hover {
  -webkit-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  -moz-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  -o-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
} 


.artbuttons {
  /* width: 200px; */
  height: 3.5rem;
  /* width: 80%; */
  font-size: 15px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}




.project-grid {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /*grid-template-columns: auto;*/
  /* grid-template-rows: 1fr;
  grid-gap: 20px;
  width: 80%;
  background-color: rgb(203, 245, 66);  */

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  padding: 0px 0px 0px 10px;
  margin: 15px 0px 0px 0px;

}

.product{
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  width: 100%;

}

.image_prod {
  /* height: 250px; */
  /* width: 265px; */
  min-width: 200px;
  max-width: 500px;
  width: 75%;
  /* height: 60%; */
}

.itemstuff {
  font-size: 1rem;
  display: grid;
  /* justify-items: center; */
  /* align-items: center; */
  /* justify-content: start; */
  /* justify-items: start; */
  /* text-align: center; */

  /* align-content: center; */
  padding: 0px 0px 0px 0px;
  margin: -15px 90px 0px 0px;
  width: 75%;
  /* font-size: 1rem; */
}

.itemname {
  font-size: 0.95rem;
}

.description {
  font-size: 0.8rem;
  margin: -17px 0px 0px 0px;
}

.donate {
  height: 41px;
  /* width: 200px; */
  width: 80%;
  font-size: 1rem;
}


/* .specific-project:hover {
  -webkit-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  -moz-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  -o-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
} */







#contact {
  /*text-align: center;*/
  display: grid;
  /* grid-template-columns: auto; */
  grid-template-columns: repeat(auto-fit, minmax(1rem, auto));
  /*grid-template-rows: auto auto auto;*/
  grid-template-rows: auto;
  justify-items: center;
  /*align-items: center;*/
  /*align-self: center;*/
  width: 82%;
}

#connect-links {
  display: grid;
  grid-template-columns: auto auto auto;
  /*grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));*/
  grid-template-rows: auto;
  justify-items: center;
  /*grid-gap: 170px;*/
  list-style: none;
  width: 88%;
  /*margin: 0px 0px 0px 0px;
  padding: 20px 0px 0px 0px;*/
}


#connect-links li:hover {
  transform: scale(1.15); 
}

footer {
  display: grid;
  justify-self: center;
}












<section id="welcome">
<h3>HELP US HEAL AND CURE MORE CHILDREN EVERY DAY!</h3>
<p>HIGH QULAITY DUAL PANEL FRAMED ART COMMENMORATIVES</p>
</section>

<section id="projects">

<div id="mainbuttons">
    {/* <button className="artbuttons" href="">FRAMED CANVAS OPTIONS</button> */}
    {/* <button className="artbuttons" href="">FRAMED PRINT OPTIONS</button> */}

    <Link to="/framedcanvas">
        <button className="artbuttons">FRAMED CANVAS OPTIONS</button>
    </Link>
    <Link to="/framedprint">
        <button className="artbuttons">FRAMED PRINT OPTIONS</button>
    </Link>

</div>


<div class="project-grid">
            
    <div className="product">
        <img className="image_prod" src={productImg} alt="product"/>
        <div className="itemstuff">
        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
        <button className="donate">CLICK TO DONATE</button>
        </div>
    </div>
    <br/>

    <div className="product">
        <img className="image_prod" src={productImg} alt="product"/>
        <div className="itemstuff">
        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
        <button className="donate">CLICK TO DONATE</button>
        </div>
    </div>
    <br/>


    <div className="product">
        <img className="image_prod" src={productImg} alt="product"/>
        <div className="itemstuff">
        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
        <button className="donate">CLICK TO DONATE</button>
        </div>
    </div>
    <br/>

    <div className="product">
        <img className="image_prod" src={productImg} alt="product"/>
        <div className="itemstuff">
        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
        <button className="donate">CLICK TO DONATE</button>
        </div>
    </div>
    <br/>

</div>

</section>


@media only screen and (max-width: 400px)
{
    /* body { display:none; }
    body { display:block; color: white;} */

    body
    {
      background: url(images/backgroundimg.png) no-repeat center center;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      height: 100vh;
      width: 100vw;
    }       
}




// import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import "../App.css";
import axios from 'axios';
// import { db } from "../firebase";

export default class Form extends Component {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // //do something with the state that checks if the user is submitting and 
    // //the process was succesful with adding the data
    // const [loader, setLoader] = useState(false);

    // const handleSubmit = (e) => {
    //     //do this or it will refresh page if u dont and all the 
    //     //data u stored will be gone
    //     e.PreventDefault();
    //     //once user submits want to make sure laoder is working so set to true
    //     setLoader(true);

    //     //2 different ways to set data in firebase: Add or Set
    //     //Set-overrides the data thats already there
    //     //Add-if u want unique values like user singing up and 
    //     //should be unique for every user use Add but if u want to
    //     // override stuff like user Profile infor use SET
    //     db.collection("contacts")
    //         .add({
    //             name: name, 
    //             email: email,
    //             message: message,
    //     }) 
    //     //
    //     .then(() => {
    //         //after promise made want loader to be false after adding the data
    //         setLoader(false); 
    //         //alert to the frontend
    //         alert("message has been submitted");
    //     })
    //     //firebase does all the error stuff for us
    //     .catch((error) => { 
    //         alert(error.message);
    //         setLoader(false); //bc we want loading to stop if theres an err
    //     })
    //     //after user hits submit button the values will stay the same
    //     //inside thet input so clear them
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    // };

    state = {
        name: "",
        email: "",
        message: "",
        sent: "false",
        //if message is sent we want to be able to see the CSS class for it
    }

    //handle inputs
    handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handleMessage = (e) => {
        this.setState({
            message: e.target.value,
        })
    }

    //end of handle inputs
    formSubmit = (e) => {
        e.preventDefault();

        //data to send
        let data ={
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }

        //axios to make a post. 2nd param: what u want to send: DATA
        axios.post('/api/forma', data)
            .then(res => {
                this.setState({
                    sent: true,
                    //reset form
                }, this.resetForm())
            })
            .catch(() => {
                console.log('message not sent');
            })
    }

    //reset form after submitting
    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: ''
        })

        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }


    render() {
        return (
            <form className="form" onSubmit={this.formSubmit}>
                <h1>Contact Fooorrrrmmm</h1>

                <div className="singleItem">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleName}
                        //onChange={(e) => this.setState({name:e.target.value})}  TRY THIS
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="singleItem">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        required
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="textArea singleItem">
                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        className="message"
                        cols="30"
                        rows="5"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleMessage}
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <div className={this.state.sent ? 'msg msgApprear' : 'msg'}>
                Message has been sent</div>
                <div className="btn">
                    <button 
                        type="submit"
                        // if loader true(if its actually loading) set background to #ccc, 
                        // else bring up same loader we have in the css
                        // style={{background: loader ? "#ccc" : " rgb(2,2,110)"}}
                        >Submit

                    </button>
                </div>

            </form>
        )
    };
}


<div class="project-grid">
                    
                    <div className="product">
                        {/* <img className="image_prod" src={productImg1} alt="product"/> */}
                        <div className="itemstuff">
                          <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                          <p className="description">Features:<br/>Beautiful Champagne Siler Finish<br/>Triple Matted w/ Float Spacer<br/>Tru Vue Glass<br/>High Quality engraved CURE Gold Partner<br/>Commenmorative plate<br/>Great Silent CURE Witness<br/><br/>"REDEEMED"<br/>CURE Commenmorative (White Version)<br/>20"x32" Outside Dimension<br/>With $750 Donation</p>
                          <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>
        
                    <div className="product">
                        {/* <img className="image_prod" src={productImg1} alt="product"/> */}
                        <div className="itemstuff">
                          <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                          <p className="description">Features:<br/>Beautiful Champagne Siler Finish<br/>Triple Matted w/ Float Spacer<br/>Tru Vue Glass<br/>High Quality engraved CURE Gold Partner<br/>Commenmorative plate<br/>Great Silent CURE Witness<br/><br/>"REDEEMED"<br/>CURE Commenmorative (White Version)<br/>20"x32" Outside Dimension<br/>With $750 Donation</p>
                          <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>
        
        
                    <div className="product">
                        {/* <img className="image_prod" src={productImg1} alt="product"/> */}
                        <div className="itemstuff">
                          <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                          <p className="description">Features:<br/>Beautiful Champagne Siler Finish<br/>Triple Matted w/ Float Spacer<br/>Tru Vue Glass<br/>High Quality engraved CURE Gold Partner<br/>Commenmorative plate<br/>Great Silent CURE Witness<br/><br/>"REDEEMED"<br/>CURE Commenmorative (White Version)<br/>20"x32" Outside Dimension<br/>With $750 Donation</p>
                          <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>
        
                    <div className="product">
                        {/* <img className="image_prod" src={productImg1} alt="product"/> */}
                        <div className="itemstuff">
                          <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                          <p className="description">Features:<br/>Beautiful Champagne Siler Finish<br/>Triple Matted w/ Float Spacer<br/>Tru Vue Glass<br/>High Quality engraved CURE Gold Partner<br/>Commenmorative plate<br/>Great Silent CURE Witness<br/><br/>"REDEEMED"<br/>CURE Commenmorative (White Version)<br/>20"x32" Outside Dimension<br/>With $750 Donation</p>
                          <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>
        
                  </div>