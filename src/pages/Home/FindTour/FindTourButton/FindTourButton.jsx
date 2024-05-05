import React from 'react'
import cl from '../find_tour.module.css'

const FindTourButton = ({ children, onClick, active }) => {
    return (
        <button onClick={onClick} className={active ? `${cl.active_btn} ${cl.section_find_tour_button}` : cl.section_find_tour_button}>{children}</button>
    )
}

export default FindTourButton
