import "./Categories.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import chickenDrumstick from "../../assets/chicken-drumstick.jpg";
import vegPakora from "../../assets/veg-pakora.jpg";
import chickenTikka from "../../assets/chicken-tikka.jpg";
import momo from "../../assets/momo.jpg";
import chomein from "../../assets/chomein.jpg";
import jholmomo from "../../assets/jholmomo.jpg";
import sadekomomo from "../../assets/sadekomomo.jpg";
import chickenwing from "../../assets/chickenwing.jpg";

const categoriesList = [
  { id: 1, src: chickenwing, name: "Chicken Items" },
  { id: 2, src: vegPakora, name: "Veg. Items" },
  { id: 3, src: chickenTikka, name: "Mutton Items" },
  { id: 4, src: momo, name: "Veg. Items" },
  { id: 5, src: jholmomo, name: "Mutton Items" },
  { id: 6, src: chomein, name: "Veg. Items" },
  { id: 7, src: chickenwing, name: "Mutton Items" },
  { id: 8, src: vegPakora, name: "Veg. Items" },
  { id: 9, src: sadekomomo, name: "Mutton Items" },
  { id: 10, src: jholmomo, name: "Veg. Items" },
  { id: 11, src: chickenTikka, name: "Mutton Items" },
  
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-wrapper">
      <h1 className="title">- Categories -</h1>
      <div className="image-list row">
        {categoriesList?.map((image) => {
          return (
            <div
              key={image.id}
              className="col-12"
              style={{ backgroundImage: `url(${image.src})` }}
              onClick={() => navigate("/foods")}
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

export default React.memo(Categories);
