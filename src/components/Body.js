import RestaurantCard from "./RestaurantCard";
import { IMG_CDN_URL,restaurants } from "../config.js";
import React,{ useContext, useEffect, useState } from "react";
import Shimmer from "./ShimmerCard.js";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper.js";
import useOnline from "../../utils/useOnline.js";
import UserContext from "../../utils/userContext.js"; 

//In react we cannot make simply search input box , hence we use hooks and usestate and state local variables.

/* What is state?
   What is hook? -> Functions.
   What is useState?
*/
  //a separate function to filter the data on the basis of search input..

  

  const Body = () => {
    
    // here searchInput is local state variable...
    const [searchInput, setSearchInput] = useState(""); // To create a state variable.
    const [allrestaurantList,setAllRestaurantList] = useState([]);
    const [filteredrestaurantList,setFilteredRestaurantList] = useState([]);
    const [loading, setLoading] = useState(true);
    


    // empty dependency array => once after render
    // dep array[searchInput] => once after initial render + every time after render (searchInput changes)..

    useEffect( () => {
      // This is the right place for an API call..
      getRestaurants();
    },[]); // => the square bracket is known as dependency array..

    //very very important... good practice for an api call......

    async function getRestaurants(){
      // inside fetch("") we will provide link of swiggy's api..
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      // setTimeout(() => {
      //   console.log('This message is displayed after 3 seconds');
      // }, 3000);
            //optional chaining..
      setAllRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //console.log(filteredrestaurantList);
      setLoading(false);
    }
      

    const isOnline = useOnline();    
    if(!isOnline){
      return <h1>👀Sorry you are offline!!</h1>
    }

     const{setUserName,loggedInUser} = useContext(UserContext);
     
      return (
        <>
        <div className="p-5 bg-pink-100 my-5 w-screen">
            <input 
            type="text" 
            placeholder="search box" 
            className="search-input" 
            value = {searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}>
  
            </input>
  
            <button className="p-2 m-2 bg-purple-900 hover:bg-purple-400 text-white rounded-md" 
            onClick={() => {
              //filter the data..
             const restaurantListFilterData = filterData(allrestaurantList,searchInput);
              //update ui with filtered data by assigning value in restaurantList state
              setFilteredRestaurantList(restaurantListFilterData);
              setLoading(false);
            }}
            >search</button>

           <label> UserName :</label>
           <input className="border border-black p-2"
           value={loggedInUser}  
           onChange={(e) => setUserName(e.target.value)}>
           </input>
        </div>
        <div className="flex flex-wrap justify-between">
          {
          //conditional rendering..
    // if(restaurantList is Empty) display 
    // else display actual ui..

          loading ? <Shimmer/> : (
            filteredrestaurantList.length === 0? (
              <div className="no-results">
                <p>Oops, no restaurant matched</p>
              </div>
            ) 
            /* <RestaurantCard {...restaurants[0].info}/>  -> passing using spread operator..*/
          //doing using map...
            :filteredrestaurantList.map((restaurant) => (
             <Link to={"/restaurant/"+restaurant.info.id }  key={restaurant.info.id}> 
              <RestaurantCard {...restaurant.info} />
              </Link> 
            ))
          )}
        </div>
        </>
      );
    }
    
   

  export default Body;
  