import React from 'react'
import cls from './card_tour.module.css'
import { FaEuroSign } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { Link, useParams } from 'react-router-dom';
const CardTour = ({ image_main, name, price, date, people, body, id, }) => {
   return (
      <div className={cls.card}>
         <Link className={cls.link_tour}
            to={`/TourPackeges/Card/${id}`}>
            <img src={image_main} alt="img" />
            <div className={cls.content_card}>
               <h3 className={cls.name_card}>
                  {name}
               </h3>
               <p className={cls.text_price}>
                  Price: <span>{price}$</span>
               </p>
               <div className={cls.conteiner_day_count_people}>
                  <p><LuCalendarDays /> {date}</p>
                  <div className={cls.block_count_people}>
                     <GoPeople />{people} people
                  </div>
               </div>
               <div className={cls.block_body}>{body}</div>
            </div>
         </Link>
      </div >

   )
}

export default React.memo(CardTour)
