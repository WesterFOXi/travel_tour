import React, { useEffect, useState } from "react";
import cls from "./card_tour_details.module.css";
import flatpickr from "flatpickr";
import { MdOutlineAccessTime } from "react-icons/md";
import TourDetailsInfo from "./TourDetailsInfo/TourDetailsInfo";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";
import { arr_cards_cour } from "../Home/PopularToup/arr_cards_tour";
import { useParams, NavLink } from "react-router-dom";
import CalendarDate from "./../../components/CalendarDate/CalendarDate";
import ButtonBack from "./../../components/ButtonBack/ButtonBack";
const CardTourDetails = () => {
   const { tourId } = useParams();

   console.log(tourId);
   const [chooseTime, setChooseTime] = useState(
      [
         new Date().getFullYear(),
         new Date().getUTCMonth() + 1,
         new Date().getDate(),
      ].join("-")
   );
   console.log(chooseTime);
   useEffect(() => {
      flatpickr(".time_choose", {
         disableMobile: "true",
         defaultDate: arr_cards_cour[tourId - 1].time,
         // enableTime: true,
         noCalendar: true,
         dateFormat: "H:i",
         time_24hr: true,
      });
   }, [tourId]);

   return (
      <div className={cls.card_detail}>
         <div className={cls.conteiner_card}>
            <ButtonBack />
            <div className={cls.conteiner_info_main}>
               <div className={cls.block_image}>
                  <img src={arr_cards_cour[tourId - 1].image_main} alt="" />
               </div>
               <div className={cls.block_info}>
                  <div className={cls.block_text_about_tour}>
                     <h1>{arr_cards_cour[tourId - 1].name}</h1>
                     <p className={cls.price}>
                        Price:&nbsp;
                        <span>{arr_cards_cour[tourId - 1].price}$</span>
                     </p>
                     <p className={cls.body_text}>
                        {arr_cards_cour[tourId - 1].body}
                     </p>
                  </div>
                  <div className={cls.conteiner_info_and_value_date}>
                     <div className={cls.choose_value}>
                        <div className={cls.choose_value_time}>
                           <p>
                              <MdOutlineAccessTime />
                              Time
                           </p>
                           <input type="date" className="time_choose" />
                        </div>
                        <div className={cls.choose_value_date}>
                           <p>Select a date</p>
                           <CalendarDate
                              setChooseTime={setChooseTime}
                              chooseTime={chooseTime}
                           />
                        </div>
                     </div>
                  </div>
                  <NavLink
                     className={cls.btn_buy}
                     to={`/TourPackages/Card/purchase/${tourId}/${chooseTime}`}
                  >
                     <button onClick={() => {}}>Buy Now</button>
                  </NavLink>
               </div>
            </div>

            <div className={cls.block_details_tour}>
               <h1>Details</h1>
               <p>{arr_cards_cour[tourId - 1].details_text}</p>
               <TourDetailsInfo {...arr_cards_cour[tourId - 1]} />
            </div>
            <div className={cls.conteiner_gallery}>
               <div className={cls.block_nav_gallery}>
                  <h1>Gallery</h1>
               </div>
               <div className={cls.block_gallary}>
                  {arr_cards_cour[tourId - 1].gallery.map((item) => (
                     <img src={item} key={item} alt="img" />
                  ))}
               </div>
            </div>
         </div>
         <HappyCustomers />
      </div>
   );
};

export default CardTourDetails;
