import { GrGroup } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa";
import { IoIosBus } from "react-icons/io";
import { arr_cards_cour } from "../../PopularToup/arr_cards_tour.js";
const choose_sort = [
   {
      title: "Number of people",
      id: 0,
      icon: <GrGroup />,
      body: "Choose people",
      sort: ["1-5", "6-10", "11-20", "More 20"],
      choose: "Choose people",
   },

   {
      id: 2,
      title: "Time",
      icon: <IoTimeOutline />,
      body: "Choose Time",
      sort: [`9:00`, `11:00`, `16:00`, `20:00`],
      choose: "Choose Time",
   },
   {
      title: "Tour",
      id: 3,
      icon: <FaRegFlag />,
      body: "Select Tour",
      sort: arr_cards_cour.map((item) => item.name),
      choose: "Select Tour",
   },
   {
      title: "Transportation",
      id: 4,
      icon: <IoIosBus />,
      body: "Select auto",
      sort: ["Bus", "Miniven"],
      choose: "Select auto",
   },
];

export default choose_sort;
