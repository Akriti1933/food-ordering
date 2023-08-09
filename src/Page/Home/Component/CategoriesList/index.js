import "./CategoriesList.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import chickenDrumstick from "../../../../assets/chicken-drumstick.jpg";
import vegPakora from "../../../../assets/veg-pakora.jpg";
import chickenTikka from "../../../../assets/chicken-tikka.jpg";

const categoriesList = [
  { id: 1, src: chickenDrumstick, name: "Chicken Items" },
  { id: 2, src: vegPakora, name: "Veg. Items" },
  { id: 3, src: chickenTikka, name: "Mutton Items" },
];

const CategoriesList = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-container">
      <h1 className="title">- Categories -</h1>
      <div className="image-list row">
        {categoriesList?.map((image) => {
          return (
            <div
              key={image.id}
              className="col-12"
              style={{ backgroundImage: `url(${image.src})` }}
              onClick={() => navigate("/categories")}
            >
              <div className="image-detail">
                <h5>{image.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(CategoriesList);
