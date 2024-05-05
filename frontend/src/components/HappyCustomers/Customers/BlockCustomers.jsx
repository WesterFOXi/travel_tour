import React from 'react'
import cls from './block_customers.module.css'

const BlockCustomers = ({ name, photo, review }) => {
   return (
      <div className={cls.block_customers}>
         <div className={cls.about_people}>
            <img src={photo} alt="avator" />
            <p>{name}</p>
         </div>
         <div className={cls.block_review}>
            {review}
         </div>
      </div>
   )
}

export default BlockCustomers
