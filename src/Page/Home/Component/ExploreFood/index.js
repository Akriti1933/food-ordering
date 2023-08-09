import "./ExploreFood.css";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFoodDetail } from "../../../../Redux/Foods/foodsSlice";
import chickenDrumstick from "../../../../assets/chicken-drumstick.jpg";
import vegPakora from "../../../../assets/veg-pakora.jpg";
import chickenTikka from "../../../../assets/chicken-tikka.jpg";

const foodList = [
  { id: 1, src: chickenDrumstick, name: "Chicken Drumstick", rate: "Rs. 400" },
  { id: 2, src: vegPakora, name: "Veg. Pakora", rate: "Rs. 200" },
  { id: 3, src: chickenTikka, name: "Chicken Tikka", rate: "Rs. 350" },
];

const ExploreFood = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOrderFood = useCallback((food) => {
    dispatch(setFoodDetail(food));
    navigate("/contact");
  }, []);

  return (
    <div className="explore-food-container">
      <h1 className="title">- Explore Foods -</h1>
      <div className="image-list row">
        {foodList?.map((food) => {
          return (
            <div
              key={food.id}
              className="col-12"
              style={{ backgroundImage: `url(${food.src})` }}
              onClick={() => navigate("/foods")}
            >
              <div className="image-detail">
                <h5>{food.name}</h5>
                <p>{food.rate}</p>
                <button
                  type="button"
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

export default React.memo(ExploreFood);
