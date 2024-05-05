import React from "react";
import cls from "./account.module.css";
import imgNotTickets from "../../image/notFoundPage.png";
import DetailTicket from './DetailTicket/DetailTicket';
import PopularTour from './../Home/PopularToup/PopularTour';

const Account = () => {
   return (
      <div className={cls.conteiner}>
         <h2>My Tickets</h2>
         <div className={cls.main_block}>
            {/* <div className={cls.notFindTickets}>
               <img
                  className={cls.imgNotTickets}
                  src={imgNotTickets}
                  alt="Not tickets"
               />
               <p>
                  You don't have any tickets yet. Start planning your next trip!
               </p>
            </div> */}
            <div className={cls.grid_list}>
               <div className={cls.designation}>
                  <div className={cls.name_tour}>
                     <p>Tour name</p>
                  </div>
                  <div className={cls.payment_method}>
                     <p>Payment Method</p>
                  </div>
                  <div className={cls.price}>
                     <p>Price</p>
                  </div>
                  <div className={cls.status}>
                     <p>Status</p>
                  </div>
               </div>
               <DetailTicket />
               <DetailTicket />
            </div>
         </div>
         <PopularTour />
      </div>
   );
};

export default Account;
