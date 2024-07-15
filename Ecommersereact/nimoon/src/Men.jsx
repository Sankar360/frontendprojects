import "./Style.css";
import { Link } from "react-router-dom";
import ninteen from "./images/s1.jpeg";
import twenty from "./images/s2.jpg";
import twoone from "./images/s3.jpg";
import twotwo from "./images/s4.jpg";
import twothree from "./images/s5.jpg";
import twofour from "./images/s6.jpg";
import twofive from "./images/s7.jpg";
import twosix from "./images/s8.jpg";
import twoseven from "./images/s9.jpeg";
import twoeight from "./images/w2.jpeg";
import twonine from "./images/w3.jpeg";
import thirty from "./images/w4.jpeg";
import threeone from "./images/w7.jpg";
import threetwo from "./images/f2.jpeg";
import threethree from "./images/f5.jpeg";
import threefour from "./images/f4.jpeg";
import threefive from "./images/f6.jpeg";

import React from 'react'

export const Men = () => {
  return (
    <div>
                    <div class="header">
                <h1 class="headerh">KingMaker</h1>
                <div class="nav">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/kids"}>Kids</Link></li>
                        <li><Link to={"/mens"}>Mens</Link></li>
                        <li><Link to={"/womens"}>Womens</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div class="headersymbol">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div class="sidenavbar">
                <div class="sidenavsymbol" style={{textAlign: "end"}}><i class="fa-solid fa-xmark"></i></div>
                <div class="sidenav">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/kids"}>Kids</Link></li>
                        <li><Link to={"/mens"}>Mens</Link></li>
                        <li><Link to={"/womens"}>Womens</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div class="product">
                <form class="product-search">
                    <input type="text" id="search" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>
                <div class="product-section">
                    <div class="product-box">
                    <img src={ninteen} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Checkered Casual Shirt</p>
                            <p>Rs.500</p>
                    </div>
                    <div class="product-box">
                    <img src={twenty} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Half Sleeve Shirt</p>
                            <p>Rs.300</p>
                    </div>
                    <div class="product-box">
                    <img src={twoone} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Lymio Casual Shirt</p>
                            <p>Rs.600</p>
                    </div>
                    <div class="product-box">
                    <img src={twotwo} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Printed Slim Fit</p>
                            <p>Rs.400</p>
                    </div>
                    <div class="product-box">
                    <img src={twothree} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Printed Casual Shirt</p>
                            <p>Rs.450</p>
                    </div>
                    <div class="product-box">
                    <img src={twofour} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Marshmellow T-shirt</p>
                            <p>Rs.550</p>
                    </div>
                    <div class="product-box">
                    <img src={twofive} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Cotton Round Mens T-shirt</p>
                            <p>Rs.350</p>
                    </div>
                    <div class="product-box">
                    <img src={twosix} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Veirdo Pure Cotton T-shirt</p>
                            <p>Rs.450</p>
                    </div>
                    <div class="product-box">
                    <img src={twoseven} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Man of Cliff Black T-shirt</p>
                            <p>Rs.650</p>
                    </div>
                    <div class="product-box">
                    <img src={twoeight} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Smart Watch</p>
                            <p>Rs.1550</p>
                    </div>
                    <div class="product-box">
                    <img src={twonine} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Fossil</p>
                            <p>Rs.1250</p>
                    </div>
                    <div class="product-box">
                    <img src={thirty} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Ghatika Jee Watch</p>
                            <p>Rs.500</p>
                    </div>
                    <div class="product-box">
                    <img src={threeone} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Timewear Strap Watch</p>
                            <p>Rs.250</p>
                    </div>
                    <div class="product-box">
                    <img src={threetwo} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Sports shoe</p>
                            <p>Rs.830</p>
                    </div>
                    <div class="product-box">
                    <img src={threethree} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Addidas slipper</p>
                            <p>Rs.470</p>
                    </div>
                    <div class="product-box">
                    <img src={threefour} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Urban slipper</p>
                            <p>Rs.409</p>
                    </div>
                    <div class="product-box">
                    <img src={threefive} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Casual Shoe</p>
                            <p>Rs.650</p>
                    </div>
                </div>

            </div>
            <div class="footer">
                <h2>KingMaker</h2>
                <p>The product quality is 100% perfuct.Every time purchase you get more coins.Use the coins to extra offer for the product.</p>
                <div class="footer-icon-container">
                    <i class="fa-brands fa-instagram" style={{color: "rgb(224, 82, 82)"}}></i>
                    <i class="fa-brands fa-twitter" style={{color: "darkblue"}}></i>
                    <i class="fa-brands fa-facebook" style={{color: "darkblue"}}></i>
                </div>
                <p>@ 2024 Perfume.com</p>
            </div>
    </div>
  )
}
