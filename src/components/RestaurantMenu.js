import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerCard from "./ShimmerCard";
import MenuItemCard from "./MenuItemCard.js";
import useRestaurant from "../../utils/useRestaurant.js";
import { useState } from "react";

const RestaurantMenu = () => {

    // how to read dynamic url parameter.
    const {id} = useParams();

    
    const [restaurant,category,nestedCategory] = useRestaurant(id);
    const [showIndex,setShowIndex] = useState(null);

    //console.log(category);

    return !restaurant ? <ShimmerCard.js/>:(
        <div>
            <h1 className="text-center p-3 text-xl font-bold">Restaurant Name: {restaurant.name}</h1>
            <h2 className="text-center p-3 font-bold">Menu</h2>

            {/* category accordion*/ }
           { category.map((c,index) => <MenuItemCard 
           key={c?.card?.card?.title} 
           data={c?.card?.card} 
           showItems={index===showIndex?true:false}  
           setShowIndex = { () => setShowIndex(index === showIndex ? null : index) }
           />
           )}
          
            {/* nestedcategory accordion */}
           
        </div>
    );
}

export default RestaurantMenu;