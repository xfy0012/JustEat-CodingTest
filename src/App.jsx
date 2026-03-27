import RestaurantCard from "./components/RestaurantCard"
function App() {
  const mock = {
    name: 'Curry Queen',
  cuisines: [{ name: 'Indian' }, { name: 'Curry' }],
  rating: { starRating: 4.5 },
  address: { firstLine: '1 Shenfield Street', city: 'London', postalCode: 'N1 6SE' }
  };
  return <RestaurantCard restaurant={mock} />
}

export default App
