import "./Foods.css";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFoodDetail } from "../../Redux/Foods/foodsSlice";
import chickenDrumstick from "../../assets/chicken-drumstick.jpg";
import vegPakora from "../../assets/veg-pakora.jpg";
import chickenTikka from "../../assets/chicken-tikka.jpg";
import momo from "../../assets/momo.jpg";
import chomein from "../../assets/chomein.jpg";
import jholmomo from "../../assets/jholmomo.jpg";
import sadekomomo from "../../assets/sadekomomo.jpg";
import chickenwing from "../../assets/chickenwing.jpg";

const foodsList = [
  { id: 1, src:  jholmomo , name: " jholmomo ", rate: "Rs. 450" },
  { id: 2, src: vegPakora, name: "Veg. Pakoda", rate: "Rs. 200" },
  { id: 3, src: chickenTikka, name: "Chicken", rate: "Rs. 350" },
  { id: 4, src: chomein, name: "Chicken chowmein", rate: "Rs. 350" },
  { id: 5, src: vegPakora, name: "Veg. Pakoda", rate: "Rs. 200" },
  { id: 6, src: chickenwing, name: "chickenwing", rate: "Rs. 550" },
  { id: 7, src: chickenDrumstick, name: "Chicken Drumstick", rate: "Rs. 400" },
  { id: 8, src: sadekomomo, name: "sadekomomo", rate: "Rs. 500" },
  { id: 9, src: chickenTikka, name: "Chicken Roast", rate: "Rs. 350" },

];

const Foods = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOrderFood = useCallback((detail) => {
    dispatch(setFoodDetail(detail));
    navigate("/contact");
  }, []);

  return (
    <div className="foods-wrapper">
      <h1 className="title">- Foods -</h1>
      <div className="image-list row">
        {foodsList?.map((food) => {
          return (
            <div
              key={food.id}
              className="col-12"
              style={{ backgroundImage: `url(${food.src})` }}
            >
              <div className="image-detail">
                <h5>{food.name}</h5>
                <p>{food.rate}</p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOrderFood(food);
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Foods);
