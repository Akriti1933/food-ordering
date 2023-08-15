import "./Header.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderImage from "../../assets/header-icon.svg";
import Search from "../../Component/Search/Search";
import axios from "axios";
import { Alert } from "bootstrap";

const Header = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [options, setOptions] = useState([]);


  useEffect(() => {
    axios.get("https://run.mocky.io/v3/fc9dcb0e-3eb6-4316-91a9-d8dc6d5daf08")
      .then((response) => {
        const searchData = response.data;

        const mappedOptions = searchData.map((item) => ({
          value: item.restaurant_name,
          label: item.id
        }));

        setOptions(mappedOptions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  // const options = [

  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  
  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-fluid">
          <Link to="/">
            <img src={HeaderImage} width="80" height="50" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-center align-items-center flex-row gap-2">
              <li className="nav-item">
                <Link
                  className={`nav-link ${currentRoute === "/" ? "active" : ""}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/categories" ? "active" : ""
                  }`}
                  to="/categories"
                >
                  Categories
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/foods" ? "active" : ""
                  }`}
                  to="/foods"
                >
                  Foods
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/Login" ? "active" : ""
                  }`}
                  to="/Login"
                >
                  Login
                </Link>
              </li>
            

            
            <li className="nav-item">
                <Link
                  className={`nav-link ${
                    currentRoute === "/register" ? "active" : ""
                  }`}
                  to="/register"
                >
                  Register
                </Link>
              </li>
              </ul>

            <div className="search-container">
              <select options={options} />

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
