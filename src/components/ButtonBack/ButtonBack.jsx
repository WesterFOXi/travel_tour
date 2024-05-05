import React from "react";
import Button from "./../Button/Button";
import { useNavigate } from "react-router-dom";
import cls from "./button_back.module.css";
import { IoArrowBack } from "react-icons/io5";
const ButtonBack = () => {
   const navigate = useNavigate();
   return (
      <Button className={cls.btn_back} onClick={() => navigate(-1)}>
         <IoArrowBack /> Back
      </Button>
   );
};

export default ButtonBack;
