import React, { useEffect, useState } from "react";
import { arr_cards_cour } from "./arr_cards_tour";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import cls from "./popular_tour.module.css";
import CardTour from "./CardTour/CardTour";
import "./css.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from "./../../../components/Button/Button";
import { Link } from "react-router-dom";
const PopularTour = () => {
   const [arr_card, setArrCard] = useState([...arr_cards_cour]);
   const [target, setTarget] = useState({
      left: 0,
      right: 4,
   });
   const countLeft = () => {
      if (target.left === 0) return;
      else if (target.left % 3 === 0) {
         target.left -= 3;
         target.right -= 3;
      } else {
         target.left -= 4;
         target.right -= 4;
      }
      return setTarget({ left: target.left, right: target.right });
   };
   useEffect(() => {
      setArrCard(
         arr_cards_cour.filter(
            (el) => el.id > target.left && el.id <= target.right
         )
      );
   }, [target]);

   const countRight = () => {
      if (target.right >= arr_cards_cour.length) return;
      else if (target.right % 3 === 0) {
         target.left += 3;
         target.right += 3;
      } else {
         target.left += 4;
         target.right += 4;
      }
      return setTarget({ left: target.left, right: target.right });
   };

   return (
      <div className={cls.popular_tour}>
         <div className={cls.block_text_and_arrow}>
            <p>Explore Our Popular Destinantions </p>
            {/* {JSON.stringify(target, null, 2)} */}
            <div className={cls.button_arrow}>
               <Button
                  className={target.left === 0 ? cls.disabled : cls.active}
                  onClick={() => countLeft()}
               >
                  <MdKeyboardArrowLeft />
               </Button>
               <Button
                  className={
                     target.right >= arr_cards_cour.length
                        ? cls.disabled
                        : cls.active
                  }
                  onClick={() => countRight()}
               >
                  <MdKeyboardArrowRight />
               </Button>
            </div>
         </div>

         <div className={cls.cards_conteiner}>
            {arr_card.map((item, index) => (
               <div key={item.id} className={cls.card}>
                  <CardTour target={target} {...item} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default PopularTour;
