import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import cls from "./count_tickets.module.css";
import { FiPlus } from "react-icons/fi";
const CountTickets = ({ countTickets, setCountTickets, params }) => {
   const addTickets = () => {
      if (params === "adult") {
         setCountTickets((prev) =>
            [...prev, prev[0].adult++].filter((i) => i !== Number(i))
         );
      } else if (params === "child") {
         setCountTickets((prev) =>
            [...prev, prev[1].child++].filter((i) => i !== Number(i))
         );
      } else if (params === "infant") {
         setCountTickets((prev) =>
            [...prev, prev[2].infant++].filter((i) => i !== Number(i))
         );
      }
   };
   const removeTickets = () => {
      if (params === "adult" && countTickets[0].adult >= 1) {
         setCountTickets((prev) =>
            [...prev, prev[0].adult--].filter((i) => i !== Number(i))
         );
      } else if (params === "child" && countTickets[1].child >= 1) {
         setCountTickets((prev) =>
            [...prev, prev[1].child--].filter((i) => i !== Number(i))
         );
      } else if (params === "infant" && countTickets[2].infant >= 1) {
         setCountTickets((prev) =>
            [...prev, prev[2].infant--].filter((i) => i !== Number(i))
         );
      }
   };
   return (
      <div className={cls.block}>
         <span>
            <button onClick={() => removeTickets()} className={cls.btn_minus}>
               <AiOutlineMinus />
            </button>
         </span>
         <span>{params === "adult" && <p>{countTickets[0].adult}</p>}</span>
         <span>{params === "child" && <p>{countTickets[1].child}</p>}</span>
         <span>{params === "infant" && <p>{countTickets[2].infant}</p>}</span>
         <span>
            <button onClick={() => addTickets()} className={cls.btn_plus}>
               <FiPlus />
            </button>
         </span>
      </div>
   );
};

export default CountTickets;
