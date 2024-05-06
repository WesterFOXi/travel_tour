import React from "react";
import cls from "./details_buy.module.css";
const DetailsBuy = () => {
   return (
      <div className={cls.conteiner}>
         <h4>Who shall we send these tickets to?</h4>
         <form action="">
            <div className={cls.block_info}>
               <div>
                  <label htmlFor="name">Name</label>
                  <input
                     required
                     id="name"
                     type="text"
                     placeholder="Enter your name"
                  />
               </div>
               <div>
                  <label htmlFor="surname">Surname</label>
                  <input
                     required
                     id="surname"
                     type="text"
                     placeholder="Enter your surname"
                  />
               </div>
            </div>
            <div className={cls.block_info}>
               <div>
                  <label htmlFor="telephone">Telephone Number</label>
                  <input
                     required
                     id="telephone"
                     type="phone"
                     placeholder="Enter your  telephone number"
                  />
               </div>
               <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                     required
                     id="email"
                     type="email"
                     placeholder="Enter your email address"
                  />
               </div>
            </div>
         </form>
      </div>
   );
};

export default DetailsBuy;
