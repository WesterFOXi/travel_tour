import React from 'react'
import cls from './about_us.module.css'
import HappyCustomers from './../../components/HappyCustomers/HappyCustomers';
import welcome_card from './../../components/BlockWelcome/Welcome_card/welcome_card';
import Button from './../../components/Button/Button';
import BlockWelcome from './../../components/BlockWelcome/BlockWelcome';
import { NavLink } from 'react-router-dom';
const AboutUs = ({ }) => {
   return (
      <>
         <div className={cls.about_us_main_text}>
            <div className={cls.block_main_text_}>
               <h1>Our team cares about your full relax</h1>
               <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
               <NavLink to={'/TourPackeges'}>
                  <Button onClick={() => {
                  }} className={cls.button_view_tour}>View our Tour Packages</Button>
               </NavLink>
            </div>
         </div >
         <BlockWelcome {...welcome_card[1]} />
         <HappyCustomers />
      </>
   )
}

export default AboutUs
