import React from "react";
import cls from "./detail_ticket.module.css";
import img from "../../../image/img_cards_tour/Cinque_Terre_Tour/Cinque_Terre_Tour.jpg";
const DetailTicket = () => {
   return (
      <div className={cls.block_ticket}>
         <img src={img} alt="img_tour" />
         <div className={cls.info_tour}>
            <h2>Wine</h2>
            <p>data</p>
            <p>time</p>
         </div>
         <div className={cls.method}>card</div>
         <div className={cls.price}>
            <p>price</p>
         </div>
         <div className={cls.status}>
            <p>ended</p>
         </div>
      </div>
   );
};

export default DetailTicket;
