import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import AccountSingIn from "./pages/AccountEntry/AccountSingIn/AccountSingIn";
import AccountLogin from "./pages/AccountEntry/AccountLogin/AccountLogin";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import { sql } from "@vercel/postgres";
const Layout = () => {
   // async function test() {
   //    const { rows } = await sql`SELECT * from users `;
   //    console.log(rows);
   // }
   // test();
   const [isOpenSingIn, setIsOpenSing] = useState(false);
   const [isOpenLogin, setIsOpenLogin] = useState(false);
   return (
      <>
         <SpeedInsights />
         <Header
            setIsOpenLogin={setIsOpenLogin}
            setIsOpenSing={setIsOpenSing}
         />
         {isOpenLogin && (
            <AccountLogin
               setIsOpenSing={setIsOpenSing}
               setIsOpenLogin={setIsOpenLogin}
            />
         )}
         {isOpenSingIn && (
            <AccountSingIn
               setIsOpenSing={setIsOpenSing}
               setIsOpenLogin={setIsOpenLogin}
            />
         )}
         <Outlet />
      </>
   );
};

export default Layout;
