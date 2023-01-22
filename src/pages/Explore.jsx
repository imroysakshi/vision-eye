import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
const Explore = () => {
  return (
    // Slider
    // <div className="explore">
    //   <header>
    //     <p className="pageHeader">Explore</p>
    //   </header>

    //   <main>
    //     {/* Slider */}

    //     <p className="exploreCategoryHeading">Categories</p>

    //     <div className="exploreCategories">
    //       <Link to="/category/android">
    //         {/* <img
    //           src={rentCategoryImage}
    //           alt="rent"
    //           className="exploreCategoryImg"
    //         /> */}
    //         <div className="exploreCategoryName">Android</div>
    //       </Link>
    //       <Link to="/category/web">
    //         {/* <img
    //           src={sellCategoryImage}
    //           alt="sell"
    //           className="exploreCategoryImg"
    //         /> */}
    //         <div className="exploreCategoryName">Web</div>
    //       </Link>
    //     </div>
    //   </main>
    // </div>

    //Harsh Sir
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <Slider />

        <p className="exploreCategoryHeading">Categories</p>

        <div className="exploreCategories">
          <Link to="/category/web">
            {/* <img
              src={rentCategoryImage}
              alt="web"
              className="exploreCategoryImg"
            /> */}
            <div className="exploreCategoryName">Web</div>
          </Link>
          <Link to="/category/android">
            {/* <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            /> */}
            <div className="exploreCategoryName">Android</div>
          </Link>
        </div>
      </main>
    </div>

    //w3shools
  );
};

export default Explore;
