import React from 'react'
import cl from './find_tour.module.css'
import FindTourButton from './FindTourButton/FindTourButton'
import { GrGroup } from "react-icons/gr";
import { IoEarthSharp } from "react-icons/io5";
import PublicTourSearch from './PublicTourSearch/PublicTourSearch';
import { Transition } from 'react-transition-group';
const FindTour = ({ setSelectPage, arrDateSearch, setArrDateSearch, isActive, setIsActive}) => {

   return (
      <div className={cl.section_find_tour}>
         <div className={cl.section_button}>
            <FindTourButton
               onClick={() => setIsActive(true)}
               active={isActive}
            >
               <IoEarthSharp className={cl.logo_button} />
               Public Tour
            </FindTourButton>

            <FindTourButton
               onClick={() => setIsActive(false)}
               active={!isActive}
            >
               <GrGroup className={cl.logo_button} />
               Private Tour
            </FindTourButton>
         </div>
         <Transition
            timeout={300}
            in={isActive}
         >
            {state => <PublicTourSearch setArrDateSearch={setArrDateSearch}
               arrDateSearch={arrDateSearch} setSelectPage={setSelectPage}
               choose_tour={isActive} className={state} />}
         </Transition>
      </div>
   )
}

export default FindTour
