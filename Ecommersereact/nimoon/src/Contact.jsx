import React from 'react'
import { Link } from "react-router-dom";

export const Contact = () => {
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
            <div class="container">
                <div class="comand">
                    <h3>Contact Us</h3>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                    <textarea rows="5" placeholder="Message"></textarea>
                </div>
                <div class="map">
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.56499958916!2d80.22835408638143!3d13.04259364646681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716481293389!5m2!1sen!2sin" width="500" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
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
