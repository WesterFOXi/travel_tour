import { useEffect, useState } from "react";
import "../src/App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AbouUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import TourPackages from "./pages/TourPackages/TourPackages";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import SearchResults from "./pages/SearchResults/SearchResults";
import CardTourDetails from "./pages/CardTourDetails/CardTourDetails";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Account from "./pages/Account/Account";
import Purchase from "./pages/Purchase/Purchase";
function App() {
   const [isActive, setIsActive] = useState(true);

   const [arrDateSearch, setArrDateSearch] = useState({
      tour: "",
      time: "",
      people: "",
      transport: "",
      date: "",
   });

   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, [location]);

   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route
                  index
                  element={
                     <Home
                        setArrDateSearch={setArrDateSearch}
                        arrDateSearch={arrDateSearch}
                        isActive={isActive}
                        setIsActive={setIsActive}
                     />
                  }
               />
               <Route path="AboutUs" element={<AboutUs />} />
               <Route path="TourPackages" element={<TourPackages />} />
               <Route path="ContactUs" element={<ContactUs />} />
               <Route
                  path="SearchTour"
                  element={
                     <SearchResults
                        arrDateSearch={arrDateSearch}
                        isActive={isActive}
                     />
                  }
               />
               <Route
                  path="TourPackages/Card/:tourId"
                  element={<CardTourDetails />}
               />
               <Route path="account" element={<Account />} />
               <Route
                  path="TourPackages/Card/purchase/:tourId/:date"
                  element={<Purchase />}
               />
               <Route path="*" element={<NotFoundPage />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
