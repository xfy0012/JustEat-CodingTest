import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants }) {
    if(restaurants.length === 0) {
        return (
        <div className="restaurant-empty-state">
            Search with a UK postcode to find restaurants in your area.
        </div>   
        );}
        
    return (
        <div className="restaurant-list">
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    );
}

export default RestaurantList;