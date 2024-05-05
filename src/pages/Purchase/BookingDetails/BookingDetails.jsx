import React from "react";
import cls from "./booking_details.module.css";
import { arr_cards_cour } from "../../Home/PopularToup/arr_cards_tour";
import CountTickets from "./CountTickets/CountTickets";

const BookingDetails = ({ params, setCountTickets, countTickets }) => {
   return (
      <div className={cls.conteiner}>
         <div className={cls.count_tickets}>
            <p>Select Your Tickets</p>
            <div className={[cls.info, cls.catecory_people].join(" ")}>
               <p>Adult(+18)</p>
               <div className={cls.block_cout_tickets}>
                  <span className={cls.price}>
                     ${arr_cards_cour[params.tourId - 1].price}
                  </span>
                  <CountTickets
                     params={"adult"}
                     setCountTickets={setCountTickets}
                     countTickets={countTickets}
                  />
               </div>
            </div>
            <div className={[cls.info, cls.catecory_people].join(" ")}>
               <p>Child (6-17)</p>
               <div className={cls.block_cout_tickets}>
                  <span className={cls.price}>
                     $
                     {Math.floor(arr_cards_cour[params.tourId - 1].price / 1.3)}
                  </span>
                  <CountTickets
                     params={"child"}
                     setCountTickets={setCountTickets}
                     countTickets={countTickets}
                  />
               </div>
            </div>
            <div className={[cls.info, cls.catecory_people].join(" ")}>
               <p>Infant (0-5) </p>
               <div className={cls.block_cout_tickets}>
                  <span className={cls.price}>FREE</span>
                  <CountTickets
                     params={"infant"}
                     setCountTickets={setCountTickets}
                     countTickets={countTickets}
                  />
               </div>
            </div>
            <div className={cls.amount_price}>
               <ul>
                  <li>Free for kids under 6 and disabled visitors (74%+)</li>
                  <li>
                     Pregnant women, families with strollers, and visitors on
                     crutches can buy priority tickets at the venue
                  </li>
               </ul>
            </div>
         </div>
         {/* <div className={[cls.date_visits, cls.info].join(" ")}>
            <p>When you will visit</p>
            <span>
               <LuCalendarDays />
               {params.date}
            </span>
         </div>
         <div className={[cls.tame_visits, cls.info].join(" ")}>
            <p>Which time</p>
            <span>
               <MdOutlineAccessTime />
               {arr_cards_cour[params.tourId - 1].time}
            </span>
         </div> */}
      </div>
   );
};

export default BookingDetails;
