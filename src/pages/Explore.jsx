import React from "react";
import { Link } from "react-router-dom";
//import Slider from "../components/Slider";
import "./Explore.css";
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
    // <div className="explore">
    //   <header>
    //     <p className="pageHeader">Explore</p>
    //   </header>

    //   <main>
    //     <Slider />

    //     <p className="exploreCategoryHeading">Categories</p>

    /*{ <div className="exploreCategories">
          <Link to="/category/web"> }*/
    /*{ <img
              src={rentCategoryImage}
              alt="web"
              className="exploreCategoryImg"
            /> }*/
    /*{ <div className="exploreCategoryName">Web</div>
          </Link>
          <Link to="/category/android"> }*/
    /*{ <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            /> }*/
    /*{ <div className="exploreCategoryName">Android</div>
          </Link>
        </div>
      </main>
    </div> }

    //w3shools
    */

    <>
      <body>
        <main>
          <div class="intro">
            <h1>Vision-Eye</h1>
            <p>platform where the real opportunity emerges...</p>
          </div>
          <div class="about-me">
            <div class="about-me-text">
              <h2>Categories</h2>

              <Link to="/category/web">
                <button className="categoryButton">Web</button>
              </Link>
              <Link to="/category/android">
                <button className="categoryButton">Android</button>
              </Link>
              <Link to="/category/cloud-computing">
                <button className="categoryButton">Cloud Computing</button>
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt="me"
            />
          </div>
        </main>
        <footer class="footer">
          <div class="copy">© 2022 Developer</div>
        </footer>
      </body>
    </>
  );
};

export default Explore;
