import React from 'react'
import cl from './header.module.css'
import logoHeader from '../../image/logo_header.png'
import Button from '..//Button/Button';
import { NavLink, useLocation } from 'react-router-dom';
import CustomLink from './CustomLink';

const Header = ({ setIsOpenSing, setIsOpenLogin }) => {
   const location = useLocation().pathname
   const isPageChoose = location === '/AboutUs' || location === '/'
   return (
      <header className={[cl.header].join(' ')}>

         <CustomLink isPageChoose={isPageChoose} to={'/'}><img src={logoHeader} alt="logoHeader" /> </CustomLink>

         <nav className={cl.nav_button} >
            <CustomLink isPageChoose={isPageChoose} to={'/'}> <Button >Home</Button></CustomLink>
            <CustomLink isPageChoose={isPageChoose} to={'/AboutUs'}  ><Button>About Us</Button></CustomLink>
            <CustomLink isPageChoose={isPageChoose} to={'/TourPackeges'} ><Button>Tour Packeges</Button></CustomLink>
            <CustomLink isPageChoose={isPageChoose} to={'/ContactUs'}><Button>Contact Us</Button></CustomLink>
         </nav>

         <div className={cl.btn_reg}>
            <Button
            onClick={() => setIsOpenLogin(true)}
               className={[cl.header_login, cl.header_button_account].join(' ')}>
               Login
            </Button>

            <Button
               // onClick={() => setIsOpenSing(true)}
               className={[cl.header_sing_up, cl.header_button_account].join(' ')}>
               Sing In</Button>
         </div>

      </header >
   )
}

export default Header
