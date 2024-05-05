import React from "react";
import cls from "./tour_packages.module.css";
import { arr_cards_cour } from "../Home/PopularToup/arr_cards_tour";
import CardTour from "../Home/PopularToup/CardTour/CardTour";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";
const TourPackages = () => {
   return (
      <>
         <div className={cls.tour_packeges}>
            <h1>Tour Packages</h1>
            <div className={cls.block_tour_cards}>
               {arr_cards_cour.map((item) => (
                  <CardTour key={item.id} {...item} card={item} />
               ))}
            </div>
         </div>
         <HappyCustomers />
      </>
   );
};

export default TourPackages;
