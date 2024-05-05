import React from 'react'
import cls from './feed_beck_section.module.css'
import imageGirl from '../../../image/home_feedBack_grls.png'
import Button from './../../../components/Button/Button';
import { NavLink } from 'react-router-dom';
const FeedBackSection = () => {
   return (
      <div className={cls.block_background_section}>
         <div className={cls.feed_back_section}>
            <img src={imageGirl} alt="" />
            <div className={cls.block_main}>
               <h1>Get Special Offers for Organizations</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
               <NavLink to={'/ContactUs'} >
                  <Button className={cls.button}>
                     Contact Us
                  </Button>
               </NavLink>
            </div>
         </div>
      </div>
   )
}

export default FeedBackSection
