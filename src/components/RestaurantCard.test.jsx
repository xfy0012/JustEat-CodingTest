import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import RestaurantCard from './RestaurantCard'

const mockRestaurant = {
  name: 'Curry Queen',
  cuisines: [{ name: 'Indian' }, { name: 'Curry' }],
  rating: { starRating: 4.5 },
  address: { firstLine: '1 Shenfield Street', city: 'London', postalCode: 'N1 6SE' },
}

test('show restaurant name', () => {
  render(<RestaurantCard restaurant={mockRestaurant} />)
  const nameElement = screen.getByText('Curry Queen')
  expect(nameElement).toBeInTheDocument()
})
