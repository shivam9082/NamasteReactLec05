import { useState,useEffect } from "react";
import {FETCH_MENU_URL} from "../src/config.js";

const useRestaurant = (id) => {

    const [restaurant,setRestaurant] = useState({});
    const [category, setCategory] = useState([]);
    const [nestedCategory, setNestedCategory] = useState([]);
   

    //const {restaurant,menuList} = useRestaurant(id);

    useEffect(() => {
        getRestaurantInfo();
    }, []);


    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL + id); 
        const json = await data.json();  

        setRestaurant(json?.data?.cards[2]?.card?.card?.info);

       // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

        const cat = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => 
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        setCategory(cat);

        const nestedCat = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => 
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
        setNestedCategory(nestedCat);

        // console.log(category);
        // console.log(nestedCategory);
        //console.log(json.data);
        //console.log(menuItems);
        //console.log(json.data);

    }

    return [restaurant,category,nestedCategory];
}

export default useRestaurant;