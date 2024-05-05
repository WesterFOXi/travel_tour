import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import cl from './header.module.css'

import { useMatch } from 'react-router-dom';


const CustomLink = ({ to, isPageChoose, children, ...props }) => {
   const match = useMatch(to)
   return (
      <Link to={to}
         className={[!isPageChoose ? cl.other_page_color  : '', match && cl.active_button_page].join(' ')}
         {...props}
      >
         {children}
      </Link>
   )
}

export default CustomLink
