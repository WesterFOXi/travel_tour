import React from "react";
import cls from "./purchase.module.css";
import { useState } from "react";
import BookingDetails from "./BookingDetails/BookingDetails";
import TicketsOverview from "./TicketsOverview/TicketsOverview";
import ButtonBack from "./../../components/ButtonBack/ButtonBack";
import { useParams } from "react-router-dom";
import DetailsBuy from "./DetailsBuy/DetailsBuy";

const Purchase = () => {
   const params = useParams();
   const [countTickets, setCountTickets] = useState([
      { adult: 0 },
      { child: 0 },
      { infant: 0 },
   ]);
   const [isStage, setStage] = useState(1);
   return (
      <div className={cls.conteiner}>
         <span className={cls.buttonBack}>
            <ButtonBack />
         </span>
         <div className={cls.stage}>
            <div className={isStage >= 1 ? cls.stage_active : ""}>
               <span>1</span>
               <p>Booking Details</p>
            </div>
            <span
               className={[
                  cls.borderHR1,
                  isStage >= 2 ? cls.border_active_hr : "",
               ].join(" ")}
            ></span>
            <div className={isStage >= 2 ? cls.stage_active : ""}>
               <span>2</span>
               <p>Your Details</p>
            </div>
            <span
               className={[
                  cls.borderHR2,
                  isStage >= 3 ? cls.border_active_hr : "",
               ].join(" ")}
            ></span>

            <div className={isStage >= 3 ? cls.stage_active : ""}>
               <span>3</span>
               <p>Payment</p>
            </div>
         </div>

         <div className={cls.block_info}>
            {isStage === 1 && (
               <BookingDetails
                  countTickets={countTickets}
                  setCountTickets={setCountTickets}
                  params={params}
               />
            )}
            {isStage === 2 && <DetailsBuy />}
            {/* {isStage === 3 && <Payment />} */}
            <TicketsOverview
               countTickets={countTickets}
               setStage={setStage}
               params={params}
               isStage={isStage}
            />
         </div>
         <button onClick={() => setStage((prev) => prev - 1)}>back</button>
         <button onClick={() => setStage((prev) => prev + 1)}>go</button>
      </div>
   );
};

export default Purchase;
