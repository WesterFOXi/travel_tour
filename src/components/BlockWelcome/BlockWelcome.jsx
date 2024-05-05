import React from 'react'
import cls from './block_welcome.module.css'
const BlockWelcome = ({ img, main_text, about_text }) => {
   return (
      <div className={cls.block_welcome}>
         <img src={img} alt="image_welcome" />
         <div className={cls.block_about}>
            <div className={cls.block_main_text}>
               <p>WELCOME TO OUR SITE!</p>
               <h1>{main_text}</h1>
            </div>
            <div className={cls.block_about_text}>
               <p>{about_text}</p>
            </div>
            <div className={cls.grade_site}>
               <div className={cls.block_grade}>
                  <h2>20+</h2>
                  <p>Years Experience</p>
               </div>
               <div className={cls.block_grade}>
                  <h2>100+</h2>
                  <p>Happy Customer</p>
               </div>
               <div className={cls.block_grade}>
                  <h2>15+</h2>
                  <p>Choice of Services</p>
               </div>
               <div className={cls.block_grade}>
                  <h2>10+</h2>
                  <p>Professional Guides</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockWelcome
