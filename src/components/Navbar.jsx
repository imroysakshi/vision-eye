// import { useNavigate, useLocation } from "react-router-dom";
// import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
// import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
// import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import { Link } from "react-router-dom";
import "../pages/Explore.css";
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
        <a href="#" class="logo"></a>
        <nav class="nav-items">
          <Link to="/">Home</Link>

          <Link to="/remote">Remote</Link>

          <Link to="/profile">Profile</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
