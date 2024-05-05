import React from "react";
import cls from "./found_tour_section.module.css";
import { FaEuroSign } from "react-icons/fa";
import TourDetailsInfo from "./../../CardTourDetails/TourDetailsInfo/TourDetailsInfo";
import { NavLink } from "react-router-dom";
const FoundTourSection = ({ item }) => {
   return (
      <section className={cls.found_tour_section}>
         <img className={cls.found_tour_image} src={item.image_main} alt="" />
         <div className={cls.found_tour_block_info}>
            <div className={cls.found_tour_block_info_details}>
               <h2>{item.name}</h2>
               <TourDetailsInfo {...item} />
            </div>
            <div className={cls.block_view_details}>
               <h3>
                  Price: {item.price} <FaEuroSign />
               </h3>
               <div className={cls.block_btn}>
                  <NavLink
                     to={`/TourPackages/Card/${item.id}`}
                     className={cls.btn_view_tour}
                  >
                     View tour
                  </NavLink>
                  <NavLink to="/purchase" className={cls.btn_book_now}>
                     Book Now
                  </NavLink>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FoundTourSection;
