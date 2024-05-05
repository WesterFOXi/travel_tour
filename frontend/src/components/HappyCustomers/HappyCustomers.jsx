import React, { useEffect, useState } from 'react'
import cls from './happy_customers.module.css'
import customers from './Customers/data_custorers';
import BlockCustomers from './Customers/BlockCustomers';
import BtnLeftRight from '../Button/BtnLeftRight/BtnLeftRight';
const HappyCustomers = () => {
   const [countPeople, setCountPeople] = useState([...customers])
   const [count, setCount] = useState({ start: 0, end: 3 })
   countPeople.length = 2
   useEffect(() => {
      return count.start >= 0 ? setCountPeople(customers.filter((el, index) => (el.id > count.start) && (el.id < count.end))) : void 0
   }, [count, countPeople.id])


   return (
      <section className={cls.section_heppy_customers}>
         <div className={cls.block_nav}>
            <h1>Happy Customers Says</h1>
            <BtnLeftRight asideClick={'Right'} count={count} num={2} setCount={setCount} lengthArr={customers} />
         </div>
         <div className={cls.section_people}>
            {countPeople.map(item => <BlockCustomers key={item.id} {...item} />)}
         </div>
      </section>
   )
}

export default HappyCustomers
