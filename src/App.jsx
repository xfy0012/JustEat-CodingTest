import RestaurantCard from "./components/RestaurantCard"
import RestaurantList from "./components/RestaurantList"
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
  return <RestaurantList restaurants={mock} />
}

export default App
