import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import cls from "./calendar_date.module.css";
import { LuCalendarDays } from "react-icons/lu";
const CalendarDate = ({ setChooseTime }) => {
   useEffect(() => {
      flatpickr(".date_choose", {
         minDate: "today",
         // defaultDate: arr_cards_cour[isOpenTourDetails.tourId - 1].day[0],
         // enable: [{
         //    from: arr_cards_cour[isOpenTourDetails.tourId - 1].day[0],
         //    to: arr_cards_cour[isOpenTourDetails.tourId - 1].day[1]
         // }],
         defaultDate: "today",
         onValueUpdate: function (dObj, dStr) {
            setChooseTime(dStr);
         },
      });
   }, [setChooseTime]);
   return (
      <div className={cls.calendar}>
         <label htmlFor="date">
            <LuCalendarDays />
         </label>
         <input type="time" id="date" className="date_choose" />
      </div>
   );
};

export default CalendarDate;
