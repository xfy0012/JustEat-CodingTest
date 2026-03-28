import RestaurantCard from "./components/RestaurantCard"
import RestaurantList from "./components/RestaurantList"
import SearchBar from "./components/SearchBar"
import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "/api";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  //wait the input from searchbar to get the postcode and fetch the data
  const handleSearch = (postcode) => {
  const normalizedPostcode = encodeURIComponent(postcode.trim().toUpperCase());
  const endpoint = `${API_BASE}/discovery/uk/restaurants/enriched/bypostcode/${normalizedPostcode}`;
  // fetch data from the API using the provided postcode
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setRestaurants(data.restaurants.slice(0, 10)); // take top 10 data to set restaurants state
    })
    .catch(error => {
      // handle any errors that occur during the fetch
      console.error('Error fetching restaurant data:', error);
    });
  };


    return(
      //search bar component to input postcode and trigger search
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        {/* restaurant list component to display the list of restaurants */}
        <RestaurantList restaurants={restaurants} />
      </div>
    );
}

export default App;
