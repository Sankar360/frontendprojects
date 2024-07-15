import React from 'react'
import "./Style.css";
import { Link } from "react-router-dom";
import ten from "./images/kg1.jpeg";
import eleven from "./images/kg2.jpeg";
import twele from "./images/kg3.jpg";
import thirteen from "./images/kg4.webp";
import fourteen from "./images/kg5.jpg";
import fifteen from "./images/kg6.jpg";
import sixteen from "./images/kg7.jpg";
import seventeen from "./images/kg8.jpeg";
import eighteen from "./images/kg9.jpeg";

export const Kids = () => {
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
                        <img src={ten} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Girl Floral A-line Dress</p>
                            <p>Rs.550</p>
                    </div>
                    <div class="product-box">
                    <img src={eleven} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Girls Party Dress</p>
                            <p>Rs.800</p>
                    </div>
                    <div class="product-box">
                    <img src={twele} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Kids Frocks</p>
                            <p>Rs.460</p>
                    </div>
                    <div class="product-box">
                    <img src={thirteen} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Sleeve Kids Dress</p>
                            <p>Rs.650</p>
                    </div>
                    <div class="product-box">
                    <img src={fourteen} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Baby Gown</p>
                            <p>Rs.350</p>
                    </div>
                    <div class="product-box">
                    <img src={fifteen} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Kids Boutique</p>
                            <p>Rs.1250</p>
                    </div>
                    <div class="product-box">
                    <img src={sixteen} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Sequin-Embroidered Dress</p>
                            <p>Rs.1500</p>
                    </div>
                    <div class="product-box">
                    <img src={seventeen} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Foreverkids Party Dress</p>
                            <p>Rs.1300</p>
                    </div>
                    <div class="product-box">
                    <img src={eighteen} style={{width:"220px", height:"220px"}} alt="" />
                            <p class="product-boxp">Printed Crepe</p>
                            <p>Rs.730</p>
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
