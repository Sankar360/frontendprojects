import React from 'react'
import "./Style.css";
import { Link } from "react-router-dom";
import one from "./images/s8.jpg";
import two from "./images/s7.jpg";
import three from "./images/w7.jpg";
import four from "./images/g1.jpg";
import five from "./images/f2.jpeg";
import six from "./images/h3.jpeg";
import seven from "./images/g7.jpg";
import eight from "./images/kg5.jpg";
import nine from "./images/m2.jpeg";

export const Home = () => {
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
            <div class="loadpage">
                <div>
                    <h1>Level Up Your Style</h1>
                    <p>With Our Stunning Collections</p>
                    <button class="loadpage-button ">Shop Now</button>
                </div>
                <div class="loadpage-img">
                    <img src={one} style={{ width: "220px", height: "240px" }} alt="" />
                </div>
            </div>
            <div class="service">
                <div class="service-container-1">
                    <div>
                        <h2>We Provide Best</h2>
                        <h2>Customer Experience</h2>
                    </div>
                    <div>
                        <p>|| We ensure thatour customer have the best shopping Experience</p>
                    </div>
                </div>
                <div class="service-container-2">
                    <div>
                        <i class="fa-regular fa-face-smile"></i>
                        <h4>Statisfaction Guarentee</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium</p>
                    </div>
                    <div>
                        <i class="fa-regular fa-star"></i>
                        <h4>New Arraivel Everyday</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, mollitia?</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-bell"></i>
                        <h4>Statisfaction Guarentee</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, mollitia?</p>
                    </div>
                </div>
            </div>
            <div class="section"><h2>Most Wanted</h2></div>
            <div class="section-box">
                <div class="section-box1">
                    <img src={two} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now  <i class="fa-solid fa-check"></i></button>
                </div>
                <div class="section-box1">
                    <img src={three} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now  <i class="fa-solid fa-check"></i></button>
                </div>
                <div class="section-box1">
                    <img src={four} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now  <i class="fa-solid fa-check"></i></button>
                </div>
                <div class="section-box1">
                    <img src={five} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now  <i class="fa-solid fa-check"></i></button>
                </div>
            </div>
            <div class="section"><h2>New Arreival</h2></div>
            <div class="section-box">
                <div class="section-box1">
                    <img src={six} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now  <i class="fa-solid fa-check"></i></button>
                </div>
                <div class="section-box1">
                    <img src={seven} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now <i class="fa-solid fa-check"></i></button>
                </div>
                <div class="section-box1">
                    <img src={eight} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now  <i class="fa-solid fa-check"></i></button>
                </div>
                <div class="section-box1">
                    <img src={nine} style={{ width: "220px", height: "240px" }} alt="" />
                    <button class="section-button">Shop Now <i class="fa-solid fa-check"></i></button>
                </div>
            </div>
            <div class="news">
                <h2>Join our News Letter</h2>
                <p>Signup for our newsletter to get exclusive discounts and updates and more</p>
                <div>
                    <input type="text" class="search" />
                </div>
                <div>
                    <button>subscribe  <i class="fa-solid fa-arrow-right"></i></button>
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
