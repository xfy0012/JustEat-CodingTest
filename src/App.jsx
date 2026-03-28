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
      <div className="app-shell">
        <header className = "hero">
          <p className="hero-kicker">Just Eat Coding Test</p>
          <h1>Find Resturnat Near You </h1>
          <p className="hero-subtitle">
            Enter a UK postcode to browse restaurants with cuisine, ratings and addresses.
          </p>
        </header>
        <section className = "search-panel">
        <SearchBar onSearch={handleSearch} />
        </section>

        {/* restaurant list component to display the list of restaurants */}
        
        <section className="results-panel">
        <RestaurantList restaurants={restaurants} />
        </section>
      </div>
      
    );
}

export default App;
