// import { useNavigate, useLocation } from "react-router-dom";
// import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
// import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
// import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import { Link } from "react-router-dom";
import "../pages/Explore.css";
import logoImg from "../img/logoImg.jpg";
import { FaHome } from "react-icons/fa";
import {FaPodcast} from "react-icons/fa";
import {FaUserTie} from "react-icons/fa";
import {FaPhoneSquareAlt} from "react-icons/fa";
// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const pathMatchRoute = (route) => {
//     if (route === location.pathname) {
//       return true;
//     }
//   };

//   return (
//     <footer className="navbar">
//       <nav className="navbarNav">
//         <ul className="navbarListItems">
//           <li className="navbarListItem" onClick={() => navigate("/")}>
//             <ExploreIcon
//               fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
//               width="36px"
//               height="36px"
//             />
//             <p
//               className={
//                 pathMatchRoute("/")
//                   ? "navbarListItemNameActive"
//                   : "navbarListItemName"
//               }
//             >
//               Explore
//             </p>
//           </li>
//           <li className="navbarListItem" onClick={() => navigate("/remote")}>
//             <OfferIcon
//               fill={pathMatchRoute("/remote") ? "#2c2c2c" : "#8f8f8f"}
//               width="36px"
//               height="36px"
//             />
//             <p
//               className={
//                 pathMatchRoute("/offers")
//                   ? "navbarListItemNameActive"
//                   : "navbarListItemName"
//               }
//             >
//               Remote
//             </p>
//           </li>
//           <li className="navbarListItem" onClick={() => navigate("/profile")}>
//             <PersonOutlineIcon
//               fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
//               width="36px"
//               height="36px"
//             />
//             <p
//               className={
//                 pathMatchRoute("/profile")
//                   ? "navbarListItemNameActive"
//                   : "navbarListItemName"
//               }
//             >
//               Profile
//             </p>
//           </li>
//         </ul>
//       </nav>
//     </footer>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <>
      <header class="header">
        <Link to="/">
          <img src={logoImg} className="logoImg" />
        </Link>

        <nav class="nav-items">
          <FaHome/>
          <Link to="/">Home</Link>
          <FaPodcast/>
          <Link to="/remote">Remote</Link>
           <FaUserTie/>
          <Link to="/profile">Profile</Link>
          <FaPhoneSquareAlt/>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
