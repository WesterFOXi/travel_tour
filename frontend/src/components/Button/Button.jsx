import React from "react";
import cls from "./button.module.css";
const Button = ({ children, isActive, className, onClick, type }) => {
   return (
      <button
         type={type && 'submit'}
         onClick={onClick}
         className={[
            cls.button,
            className,
            isActive ? cls.buttonIsActive : "",
         ].join(" ")}
      >
         {children}
      </button>
   );
};

export default Button;
