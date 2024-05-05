import React from "react";
import cl from "./home.module.css";
import FindTour from "./FindTour/FindTour";
import PopularTour from "./PopularToup/PopularTour";
import FeedBackSection from "./FeedBeckSection/FeedBackSection";
import BlockWelcome from "./../../components/BlockWelcome/BlockWelcome";
import HappyCustomers from "./../../components/HappyCustomers/HappyCustomers";
import welcome_card from "./../../components/BlockWelcome/Welcome_card/welcome_card";
import AccountLoginSingUp from "../AccountEntry/AccountSingIn/AccountSingIn";
import { Analytics } from "@vercel/analytics/react";
const Home = ({ arrDateSearch, setArrDateSearch, isActive, setIsActive }) => {
   return (
      <>
         <div className={cl.home}>
            <div className={cl.home_shadow}></div>
            <div className={cl.home_text}>
               <p className={cl.home_first_text}>Enjoy in the best way!</p>
               <p className={cl.home_last_text}>
                  Enjoy our services for your trip anytime
               </p>
            </div>
            <FindTour
               isActive={isActive}
               setIsActive={setIsActive}
               setArrDateSearch={setArrDateSearch}
               arrDateSearch={arrDateSearch}
            />
         </div>
         {/* <AccountLoginSingUp /> */}
         <PopularTour />
         <BlockWelcome {...welcome_card[0]} />
         <FeedBackSection />
         <HappyCustomers />
      </>
   );
};

export default Home;
