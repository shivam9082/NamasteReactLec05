//a separate function to filter the data on the basis of search input..
export function filterData(allrestaurantList,searchInput) {
    const filteredData = allrestaurantList.filter(
        (restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredData;
}