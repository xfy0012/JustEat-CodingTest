import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import{expect, test, vi} from 'vitest';

test('click search button', async () => {
    // mock the onSearch function
    const onSearchMock = vi.fn();
    // render the SearchBar 
    render(<SearchBar onSearch={onSearchMock} />);
    // input a valid postcode
    const input = screen.getByPlaceholderText(/Enter a UK postcode/i);
    // click the Search button
    const button = screen.getByRole('button', {name: /Search/i});
    //check onSearch is called 
    await userEvent.type(input, 'EC4M 7RF');
    await userEvent.click(button);
    expect(onSearchMock).toHaveBeenCalledWith('EC4M 7RF');

})

test("shows error when input is empty", async () => {
    // render SerchBar
    render(<SearchBar onSearch={() => {}} />);
    // click the Search button and not input anything
    const button = screen.getByRole('button', {name: /Search/i});
    await userEvent.click(button);
    // check error message is shown
    expect(screen.getByText(/Please enter a postcode./i)).toBeInTheDocument();
})

test("shows error when input is invalid", async () => {
    // render SerchBar
    render(<SearchBar onSearch={() => {}} />);
    // input an invalid postcode eg "12345"
    const input = screen.getByPlaceholderText(/Enter a UK postcode/i);
    const button = screen.getByRole('button', {name: /Search/i});
    await userEvent.type(input, '12345');
    await userEvent.click(button);
    // check error message is shown
    expect(screen.getByText(/Please enter a valid UK postcode./i)).toBeInTheDocument();
})

