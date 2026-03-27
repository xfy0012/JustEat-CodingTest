import {render, screen} from '@testing-library/react';
import RestaurantList from './RestaurantList';
import { expect, test } from 'vitest';

const mock = [
  {
    id: '1',
    name: 'Curry Queen',
    cuisines: [{ name: 'Indian' }],
    rating: { starRating: 4.5 },
    address: { city: 'London', firstLine: '1 High St',  postalCode: 'N1 6SE' }
  },
  {
    id: '2',
    name: 'Mr Chan',
    cuisines: [{ name: 'Chinese' }],
    rating: { starRating: 4.0 },
    address: { city: 'London', firstLine: '2 Low St', postalCode: 'EC1 1AA' }
  }
];

test ('renders restaurant list correctly',() => {
    render(<RestaurantList restaurants={mock} />);
    expect(screen.getByText('Curry Queen')).toBeInTheDocument();
    expect(screen.getByText('Mr Chan')).toBeInTheDocument();
    expect(screen.getByText('Indian')).toBeInTheDocument();
    expect(screen.getByText('Chinese')).toBeInTheDocument();
    expect(screen.getByText('★ 4.5')).toBeInTheDocument();
    expect(screen.getByText('★ 4.0')).toBeInTheDocument();
    expect(screen.getByText('London, 1 High St, N1 6SE')).toBeInTheDocument();
    expect(screen.getByText('London, 2 Low St, EC1 1AA')).toBeInTheDocument();
})

test('renders empty restaurant list', () => {
    render(<RestaurantList restaurants={[]} />);
    expect(screen.queryByText('Curry Queen')).not.toBeInTheDocument();
    expect(screen.queryByText('Mr Chan')).not.toBeInTheDocument();
});



