import React from 'react'
import cls from './tour_details_info.module.css'
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdOutlineAccessTime } from 'react-icons/md';
import { LuLanguages } from 'react-icons/lu';
import { MdOutlineDateRange } from "react-icons/md";
import { FaBus } from 'react-icons/fa';
import { GiPayMoney } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
const TourDetailsInfo = ({ people, duration, language, transport, date, time, guide_service, entry_fees }) => {
   return (
      <div className={cls.tour_includes}>
         <p><MdOutlineDateRange /><span>Date:&nbsp; </span>{date}</p>
         <p><IoMdTime /><span>Time:&nbsp; </span>{time}</p>
         <p><FaPeopleGroup /><span>Number of group:&nbsp; </span>{people}</p>
         <p><FaBus /><span>Transport:&nbsp;</span> {transport}</p>

         <p><MdOutlineAccessTime /><span>Duration:&nbsp; </span>{duration}</p>
         <p><LuLanguages /><span>Language:&nbsp; </span>{guide_service}</p> 
         <p><LuLanguages /><span>Language:&nbsp; </span>{language}</p>
         <p><GiPayMoney /><span>Entry Fees:&nbsp; </span>{entry_fees}</p>

      </div>
   )
}

export default TourDetailsInfo
