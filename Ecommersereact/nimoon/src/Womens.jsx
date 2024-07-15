import React from 'react'
import "./Style.css";
import { Link } from "react-router-dom";
import threesix from "./images/g1.jpg";
import threeseven from "./images/g2.jpeg";
import threeeight from "./images/g3.jpeg";
import threenine from "./images/g4.jpeg";
import fourty from "./images/g5.jpg";
import fourone from "./images/g6.jpg";
import fourtwo from "./images/f1.jpeg";
import fourthree from "./images/f3.jpeg";
import fourfour from "./images/w9.jpeg";
import fourfive from "./images/w6.jpeg";
import foursix from "./images/w1.jpg";
import fourseven from "./images/w8.jpg";
import foureight from "./images/w5.jpeg";

export const Womens = () => {
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
                    <img src={threesix} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Black Print Gown</p>
                            <p>Rs.1800</p>
                    </div>
                    <div class="product-box">
                    <img src={threeseven} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Georgetta Ladies Gown</p>
                            <p>Rs.1500</p>
                    </div>
                    <div class="product-box">
                    <img src={threeeight} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Ladies Fashion Dress</p>
                            <p>Rs.800</p>
                    </div>
                    <div class="product-box">
                    <img src={threenine} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Casual Western Dress</p>
                            <p>Rs.1000</p>
                    </div>
                    <div class="product-box">
                    <img src={fourty} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Party Wear Look Gown</p>
                            <p>Rs.600</p>
                    </div>
                    <div class="product-box">
                    <img src={fourone} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Party Womens Dress</p>
                            <p>Rs.2000</p>
                    </div>
                    <div class="product-box">
                    <img src={fourtwo} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">High Heel Sandal</p>
                            <p>Rs.500</p>
                    </div>
                    <div class="product-box">
                    <img src={fourthree} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Mysore Garden Bellies</p>
                            <p>Rs.400</p>
                    </div>
                    <div class="product-box">
                    <img src={fourfour} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Brand Flat Shoes</p>
                            <p>Rs.900</p>
                    </div>
                    <div class="product-box">
                    <img src={fourfive} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Quartz Watch</p>
                            <p>Rs.1200</p>
                    </div>
                    <div class="product-box">
                    <img src={foursix} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Daniel Kelvin</p>
                            <p>Rs.800</p>
                    </div>
                    <div class="product-box">
                    <img src={fourseven} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Diamond Elegant Watch</p>
                            <p>Rs.900</p>
                    </div>
                    <div class="product-box">
                    <img src={foureight} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Luxury Casual Watch</p>
                            <p>Rs.600</p>
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
