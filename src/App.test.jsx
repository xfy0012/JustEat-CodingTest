import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { beforeEach } from 'vitest';



const mockRestaurants = [
  {
    id: '1',
    name: 'Curry Queen',
    cuisines: [{ name: 'Indian' }],
    rating: { starRating: 4.5 },
    address: { firstLine: '1 High St', city: 'London', postalCode: 'EC4M 7RF' }
  }
];

beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ restaurants: mockRestaurants })
      })
    );
  });

test('user input postcode and display restaurant' , async()=>{
    render(<App />);

    const input = screen.getByPlaceholderText(/Enter a UK postcode/i);
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'EC4M 7RF');
    await userEvent.click(button);

    await waitFor(() => {
        expect(screen.getByText(/Curry Queen/i)).toBeInTheDocument();
        expect(screen.getByText(/Indian/i)).toBeInTheDocument();
        expect(screen.getByText(/4.5/i)).toBeInTheDocument();
        expect(screen.getByText(/London, 1 High St, EC4M 7RF/i)).toBeInTheDocument();
    });
})
