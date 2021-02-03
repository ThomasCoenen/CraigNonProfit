import React, {useState, useEffect} from 'react';
import curebuttonImg from '../images/curebutton.png';
import product1img from '../images/productimg1.jpg';

import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';

export default function Homescreen2(props) {
    const {path, setPath} = props

    return (
    <body className={path === "/" ? "homepage" : "productpage"}>

        <div className="homecontent">

            <div className="tophomecontainer">
                <div className="homequotecontainer">
                    <h3 className="homequote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br/> <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br/> <br/>in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br/> <br/> officia deserunt mollit anim id est laborum.</h3>
                </div>

                <div className="homeimgcontainer">
                    <img className="image_prodhome" src={product1img} alt=""/>
                </div>
            </div>

            <div id="homepagecontainer">
                <div className="singlecontainer">
                    <Link to="/dualpanel" className="artbuttons">
                        <button className="artbuttons" onClick={() => setPath('dualpanel')} style={{fontSize:"15px"}}>DUAL PANEL OPTIONS</button>
                    </Link>
                    <div className="homeimgprod">
                        <img className="image_prod" src={product1img} alt=""/>
                    </div>
                    <div className="homeimgprodname">
                        <h2>BRONZE LEVEL PARTNER</h2>
                    </div>
                </div>
                <div className="singlecontainer">
                    <Link to="/framedprint" className="artbuttons">
                        <button className="artbuttons" onClick={() => setPath('framedprint')} style={{fontSize:"15px"}} style={{fontSize:"15px"}}>FRAMED PRINT OPTIONS</button>
                    </Link>
                    <div className="homeimgprod">
                        <img className="image_prod" src={product1img} alt=""/>
                    </div>
                    <div className="homeimgprodname">
                        <h2>GOLD LEVEL PARTNER</h2>
                    </div>
                </div>
                <div className="singlecontainer">
                    <Link to="/framedcanvas" className="artbuttons">
                        <button className="artbuttons" onClick={() => setPath('framedcanvas')} style={{fontSize:"15px"}}>FRAMED CANVAS OPTIONS</button>
                    </Link>
                    <div className="homeimgprod">
                        <img className="image_prod" src={product1img} alt=""/>
                    </div>
                    <div className="homeimgprodname">
                        <h2>PLATINUM LEVEL PARTNER</h2>
                    </div>
                </div>
            </div>

            <div className="bottomhomeimgcontainer">
                <div className="" style={{display:"grid", gridGap: "10px"}}>
                    <div className="homeimgprod">
                        <img className="homebottomaboutimg" src={product1img} alt=""/>
                    </div>
                    <div className="homeimgprodnamebottom">
                        <h2>ABOUT THE REDEEMED PAINTING</h2>
                    </div>
                </div>
            </div>
        </div>
    </body>
    )
}
