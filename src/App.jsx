import RestaurantCard from "./components/RestaurantCard"
import RestaurantList from "./components/RestaurantList"
import SearchBar from "./components/SearchBar"

function App() {
  const mock = [{
    name: 'Curry Queen',
  cuisines: [{ name: 'Indian' }, { name: 'Curry' }],
  rating: { starRating: 4.5 },
  address: { firstLine: '1 Shenfield Street', city: 'London', postalCode: 'N1 6SE' }
  },
  {
    id: '2',
    name: 'Mr Chan',
    cuisines: [{ name: 'Chinese' }],
    rating: { starRating: 4.0 },
    address: { firstLine: '2 Low St', city: 'London', postalCode: 'EC1 1AA' }
  }
];
function handleSearch(postcode) {
  console.log('Searching for restaurants in postcode:', postcode);
}

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RestaurantList restaurants={mock} />
    </div>
  );
}

export default App
