import RestaurantCard from "./RestaurantCard";
import { IMG_CDN_URL,restaurants } from "../config.js";
import React,{ useState } from "react";

//In react we cannot make simply search input box , hence we use hooks and usestate and state local variables.

/* What is state?
   What is hook? -> Functions.
   What is useState?
*/
  //a separate function to filter the data on the basis of search input..

  function filterData(restaurantList,searchInput) {
      const filteredData = restaurantList.filter((restaurant) => restaurant.info.name.includes(searchInput));
      return filteredData;
  }

  const Body = () => {
    // here searchInput is local state variable...
    const [searchInput, setSearchInput] = useState(); // To create a state variable.
    const [restaurantList,setrestaurantList] = useState(restaurants);
    return (
      <>
      <div className="searchContainer">
          <input 
          type="text" 
          placeholder="search box" 
          className="search-input" 
          value = {searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}>

          </input>

          <button className="searchButton" 
          onClick={() => {
            //filter the data..
           const restaurantListFilterData = filterData(restaurantList,searchInput);
            //update ui with filtered data by assigning value in restaurantList state
            setrestaurantList(restaurantListFilterData);
          }}
          >search</button>
      </div>
      <div className="body">
        {/* <RestaurantCard {...restaurants[0].info}/>  -> passing using spread operator..*/
        //doing using map...

          restaurantList.map( (restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
          })
        }
      </div>
      </>
    );
  }

  export default Body;
  