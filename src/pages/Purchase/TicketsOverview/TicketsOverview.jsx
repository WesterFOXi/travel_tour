import React from "react";
import cls from "./tickets_overview.module.css";
import { arr_cards_cour } from "../../Home/PopularToup/arr_cards_tour";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";

const TicketsOverview = ({ params, setStage, countTickets }) => {
   const price_adult =
      arr_cards_cour[params.tourId - 1].price * countTickets[0].adult;

   const price_child =
      arr_cards_cour[params.tourId - 1].price * countTickets[1].child;

   const prcie_infant = 0 * countTickets[2].infant;

   const all_price_total = price_adult + price_child;
   const clickNextSpen = () => {
      setStage((prev) => prev + 1);
   };
   return (
      <div className={cls.conteiner}>
         <h3>Your Tickets Overview</h3>
         <div className={cls.block_info}>
            <div className={cls.card_tour}>
               <img
                  src={arr_cards_cour[params.tourId - 1].image_main}
                  alt="img"
               />
               <div className={cls.detail_tour}>
                  <h3>{arr_cards_cour[params.tourId - 1].name}</h3>
                  <p>
                     <LuCalendarDays />
                     {params.date}
                  </p>
                  <p>
                     <MdOutlineAccessTime />
                     {arr_cards_cour[params.tourId - 1].time}
                  </p>
               </div>
            </div>
            <div className={cls.count_tickets}>
               <div className={cls.adult_tickets}>
                  <div>
                     <b>{countTickets[0].adult}</b>
                     Adult(+18) ({arr_cards_cour[params.tourId - 1].price}$)
                  </div>
                  <div className={cls.price}>{price_adult}$</div>
               </div>
               <div className={cls.child_tickets}>
                  <div>
                     <b>{countTickets[1].child}</b>
                     Child(6-17) (
                     {Math.floor(arr_cards_cour[params.tourId - 1].price / 1.3)}
                     $)
                  </div>
                  <div className={cls.price}>{price_child}$</div>
               </div>
               <div className={cls.infant_tickets}>
                  <div>
                     <b>{countTickets[2].infant}</b>
                     Infan(0-5) (0$)
                  </div>
                  <div className={cls.price}>{prcie_infant}$</div>
               </div>
            </div>
            <div className={cls.total_price}>
               <p>Total Price</p>
               <span>{all_price_total}$</span>
            </div>
            <button onClick={() => clickNextSpen()}>Go to next Step</button>
         </div>
      </div>
   );
};

export default TicketsOverview;
