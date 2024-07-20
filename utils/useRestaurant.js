import { useState,useEffect } from "react";
import {FETCH_MENU_URL} from "../src/config.js";

const useRestaurant = (id) => {

    const [restaurant,setRestaurant] = useState({});
    const [menuList,setMenuList] = useState([]);

    //const {restaurant,menuList} = useRestaurant(id);

    useEffect(() => {
        getRestaurantInfo();
    }, []);


    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);

        /* {
            console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card );
        } */
       
        const itemCards = await json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        const menuItems = await itemCards?.map((list) => list?.card?.info)
        setMenuList(menuItems);
        console.log(menuItems);
        //console.log(json.data);

    }

    return [restaurant,menuList];
}

export default useRestaurant;