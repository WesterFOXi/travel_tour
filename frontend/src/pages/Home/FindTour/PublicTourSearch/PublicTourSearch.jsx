import React, { useEffect, useState } from "react";
import cls from "./public_team_search.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import choose_sort from "./choose_sort";
import "./css.css";
import flatpickr from "flatpickr";
import Button from "./../../../../components/Button/Button";
import { NavLink } from "react-router-dom";
const PublicTourSearch = ({
   choose_tour,
   className,
   arrDateSearch,
   setArrDateSearch,
}) => {
   const [sortArr, setSortArr] = useState([...choose_sort]);
   const [hideChoose, setHideChoose] = useState(true);
   const [isClearSearch, setIsClearSearch] = useState(false);
   useEffect(() => {
      flatpickr(".date_search", {
         minDate: "today",
         disableMobile: "true",
         defaultDate: "today",
         onValueUpdate: function (dObj, dStr) {
            setArrDateSearch((prev) => ({ ...prev, date: dStr }));
         },
      });
   }, []);

   useEffect(() => {
      setHideChoose(false);
      if (!choose_tour) {
         setSortArr(
            choose_sort.filter((el) => el.title !== "Number of people")
         );
         arrDateSearch.people = "";
         sortArr[0].choose = "Choose people";
      } else {
         setSortArr(choose_sort);
      }
   }, [choose_tour]);

   useEffect(() => {
      if (isClearSearch) {
         sortArr.map((item) => (item.choose = item.body));
         setArrDateSearch(
            (prev) =>
               (prev = {
                  tour: "",
                  time: "",
                  people: "",
                  transport: "",
                  date: "",
               })
         );
         setIsClearSearch(false);
      }
   }, [isClearSearch, setArrDateSearch, sortArr]);

   const handleClick = (item, el) => {
      setIsClearSearch(false);
      switch (item.title) {
         case "Number of people":
            setArrDateSearch({ ...arrDateSearch, people: el });
            break;
         case "Time":
            setArrDateSearch({ ...arrDateSearch, time: el });
            break;
         case "Tour":
            setArrDateSearch((prev) => ({ ...prev, tour: el }));
            break;
         case "Transportation":
            setArrDateSearch({ ...arrDateSearch, transport: el });
            break;
         default:
            break;
      }
   };
   const sortSearchTour = () => {
      !choose_tour ? delete arrDateSearch.people : void 0;
   };
   return (
      <div className={[cls.public_team, className].join(" ")}>
         <div className={cls.grid_conteiner}>
            {sortArr.map((item, index) => (
               <div
                  onClick={(e) => {
                     setHideChoose(index);
                  }}
                  key={item.id}
                  className={cls.block_filter}
               >
                  <div className={cls.block_filter_name}>
                     {" "}
                     {item.icon} {item.title}{" "}
                  </div>
                  <div className={[cls.block_filter_body].join(" ")}>
                     <div className={cls.block_filter_body_first}>
                        {item.choose} <IoIosArrowDown />
                     </div>
                     {hideChoose === index && (
                        <div className={cls.block_choose}>
                           {item.sort.map((el) => (
                              <p
                                 key={el}
                                 onClick={(e) => {
                                    handleClick(item, el);
                                    e.stopPropagation();
                                    item.choose = el;
                                    setHideChoose(() => false);
                                 }}
                              >
                                 {el}
                              </p>
                           ))}
                        </div>
                     )}
                  </div>
               </div>
            ))}

            <div className={cls.block_filter}>
               <div className={cls.block_filter_name}>
                  {" "}
                  <MdDateRange /> Choose Date
               </div>
               <div className={[cls.block_filter_body].join(" ")}>
                  <input type="date" className="date_search" />
               </div>
            </div>
         </div>
         <NavLink to={"/SearchTour"}>
            <Button
               onClick={() => {
                  sortSearchTour();
               }}
               className={cls.btn_search}
            >
               <IoIosSearch />
            </Button>
         </NavLink>
         <Button
            className={[
               cls.btn_search,
               Object.entries(arrDateSearch)
                  .map((item) => item[1])
                  .filter((el) => el).length
                  ? cls.btn_search_on
                  : cls.btn_search_off,
            ].join(" ")}
            onClick={() => {
               setIsClearSearch(true);
               setHideChoose(() => false);
            }}
         >
            <MdDeleteOutline />
         </Button>
      </div>
   );
};

export default PublicTourSearch;
