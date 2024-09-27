import UserContext from "../../utils/userContext";
import { IMG_CDN_URL,restaurants } from "../config";
import "/index.css";
import { useContext } from "react";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines, areaName }) => {
   
  const data = useContext(UserContext);
  
  return (
    <div className = "w-56 p-2 m-2 shadow-2xl bg-pink-100">
      <img src={ IMG_CDN_URL+ cloudinaryImageId} alt="Restaurant Image"/>
      <div className="card-body">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="card-rating">⭐ {avgRating}</p>
          <p className="card-cuisines">{cuisines.join(", ")}</p>
          <p className="card-address">{areaName}</p>
          <h2 className="font-bold">{data.loggedInUser}</h2>

      </div>
  </div>
    );
  }

export default RestaurantCard;
