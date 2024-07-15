import { IMG_CDN_URL,restaurants } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines, areaName }) => {
    return (
      <div className="card">
      <img src={ IMG_CDN_URL+ cloudinaryImageId} alt="Restaurant Image"/>
      <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-rating">⭐ {avgRating}</p>
          <p className="card-cuisines">{cuisines.join(", ")}</p>
          <p className="card-address">{areaName}</p>
      </div>
  </div>
    );
  }

  export default RestaurantCard;
