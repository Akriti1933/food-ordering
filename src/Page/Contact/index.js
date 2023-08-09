import "./Contact.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import NoData from "../../Component/NoData/NoData";

const Contact = () => {
  const foodDetail = useSelector((state) => state.foods.foodDetail);

  return (
    <>
      {foodDetail !== null ? (
        <div
          className="contact-wrapper"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foodDetail?.src})`,
          }}
        >
          <h3 className="title">Fill below form to confirm your order</h3>
          <fieldset>
            <legend>Selected Food</legend>
            <div className="food-details">
              <h2>{foodDetail?.name}</h2>
              <p>{foodDetail?.rate}</p>
            </div>
          </fieldset>
          <fieldset>
            <legend>Delivery Detail</legend>
            <div className="form-container">Form here</div>
          </fieldset>
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default React.memo(Contact);
