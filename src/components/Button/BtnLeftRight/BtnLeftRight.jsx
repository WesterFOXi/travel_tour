import React from 'react'
import Button from '../Button';
import cls from './btn_left_right.module.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const BtnLeftRight = ({ count, setCount, lengthArr, num }) => {
   const handleClickLeft = () => {
      if (count.start > 0 && count.start <= count.end)
         setCount({ start: count.start - num, end: count.end - num })
   }
   const handleClickRight = () => {
      if (count.end < lengthArr.length)
         setCount({ start: count.start + num, end: count.end + num })
   }
   return (
      <div className={cls.block_nav_button}>
         <Button
            className={count.start !== 0 ? cls.button : cls.disebled}
            onClick={() => handleClickLeft()}><MdKeyboardArrowLeft />
         </Button>
         <Button
            className={count.end < lengthArr.length ? cls.button : cls.disebled}
            onClick={() => handleClickRight()}><MdKeyboardArrowRight />
         </Button>
      </div >
   )
}

export default BtnLeftRight
