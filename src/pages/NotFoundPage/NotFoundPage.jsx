import React from "react";
import cls from "./not_found_page.module.css";
import imgNotFoundPage from "../../image/notFoundPage.png";

const NotFoundPage = () => {
   return (
      <div className={cls.not_found_page}>
         <div className={cls.contener}>
            <h1>404</h1>
            <h3>Not found page</h3>
            <img src={imgNotFoundPage} alt="" />
         </div>
      </div>
   );
};

export default NotFoundPage;
