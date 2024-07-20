import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerCard from "./ShimmerCard";
import MenuItemCard from "./MenuItemCard.js";
import "./RestaurantMenu.css";
import useRestaurant from "../../utils/useRestaurant.js";

const RestaurantMenu = () => {

    // how to read dynamic url parameter.
    const {id} = useParams();

    
    const [restaurant,menuList] = useRestaurant(id);

    //console.log(id);
    return !restaurant ? <ShimmerCard.js/>:(
        <div>
            <h1 className="heading">Restaurant Name: {restaurant.name}</h1>
            <h2 className="subheading">Menu</h2>
            <div>
               {
                  menuList?.map((item) => <MenuItemCard {...item} key={item.id}/>)
               }
            </div>
        </div>
    );
}

export default RestaurantMenu;