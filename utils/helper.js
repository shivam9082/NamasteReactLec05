export function filterData(allrestaurantListrestaurantList,searchInput) {
    const filteredData = allrestaurantListrestaurantList.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase()));
    return filteredData;
}