import React from "react";
import cls from "./footer.module.css";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import logo_twitter from "../../image/twitter_media.png";
import logo_faccebok from "../../image/faccebok_media.png";
import logo_instagram from "../../image/instagram_media.png";

const Footer = () => {
   return (
      <footer className={cls.footer}>
         <div className={cls.block_img}>
            <img src={logo} alt="logo" />
         </div>
         <div className={cls.conteiner}>
            <div className={[cls.block_home, cls.block].join(" ")}>
               <h4>Home</h4>
               <Link to={"/"}>Home</Link>
               <Link to={"/AboutUs"}>About Us</Link>
               <Link to={"/TourPakages"}>Tour Packages</Link>
            </div>
            <div className={[cls.block_help, cls.block].join(" ")}>
               <h4>Help</h4>
               <Link to={"/*"}>Terms of Use</Link>
               <Link to={"/*"}>Provicy Posicy</Link>
            </div>
            <div className={[cls.block_contact, cls.block].join(" ")}>
               <h4>Contacts</h4>
               <p>Piazza Napoleone, Lucca, Tuscany</p>
               <p> +39 346 368 5708</p>
               <p> italiainlimo@gmail.com</p>
            </div>
            <div className={[cls.block_social_media, cls.block].join(" ")}>
               <h4>Social Media</h4>
               <div className={cls.block_media_img}>
                  <img src={logo_twitter} alt="logo_twitter" />
                  <img src={logo_faccebok} alt="logo_faccebok" />
                  <img src={logo_instagram} alt="logo_instagram" />
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
