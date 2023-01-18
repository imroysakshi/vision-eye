import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    // Slider
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        {/* Slider */}

        <p className="exploreCategoryHeading">Categories</p>

        <div className="exploreCategories">
          <Link to="/category/android">
            {/* <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            /> */}
            <div className="exploreCategoryName">Android</div>
          </Link>
          <Link to="/category/web">
            {/* <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            /> */}
            <div className="exploreCategoryName">Web</div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
