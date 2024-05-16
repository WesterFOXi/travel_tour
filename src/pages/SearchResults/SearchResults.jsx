import React from "react";
import cls from "./search_result.module.css";
import FoundTourSection from "./FoundTourSection/FoundTourSection";
import { arr_cards_cour } from "../../pages/Home/PopularToup/arr_cards_tour";
import ButtonBack from "./../../components/ButtonBack/ButtonBack";
const SearchResults = ({ arrDateSearch, setIsOpenTourDetails, isActive }) => {

   const sortTourPeople = isActive
      ? arrDateSearch.people === ""
         ? arr_cards_cour
         : arr_cards_cour.filter((el) => el.people === arrDateSearch.people)
      : arr_cards_cour.filter((el) => el.people === "1-5");

   const sortTourTime =
      arrDateSearch.time === ""
         ? sortTourPeople
         : sortTourPeople.filter((el) => el.time === arrDateSearch.time);
   
   const sortTourName =
      arrDateSearch.tour === ""
         ? sortTourTime
         : sortTourTime.filter((el) => el.name === arrDateSearch.tour);
   
   const sortTourTransp =
      arrDateSearch.transport === ""
         ? sortTourName
         : sortTourName.filter(
              (el) => el.transport === arrDateSearch.transport
           );
   return (
      <div className={cls.conteiner_search_results}>
         <div className={cls.block_main}>
            <ButtonBack />
            {sortTourTransp.length === 0 ? (
               <h1>Tour not found</h1>
            ) : (
               <>
                  <h2>Search Results</h2>
                  {[...sortTourTransp].map((item) => (
                     <FoundTourSection
                        key={item.id}
                        setIsOpenTourDetails={setIsOpenTourDetails}
                        item={item}
                     />
                  ))}
               </>
            )}
         </div>
      </div>
   );
};

export default SearchResults;
