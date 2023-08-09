import "./Home.css";
import React from "react";
import ExploreFood from "./Component/ExploreFood";
import Categories from "./Component/CategoriesList";
import Footer from "../../Dashboard/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="homepage-image d-flex justify-content-center align-items-center">
          <h4>
            "One cannot think well, love well, sleep well, if one has not dined
            well."
          </h4>
        </div>
      </div>
      <ExploreFood />
      <Categories />
      <Footer />
    </>
  );
};

export default React.memo(Home);
