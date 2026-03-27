import {useState} from 'react';

function SearchBar({onSearch}) {
    // State to hold the input value and error message
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Validate the postcode using a regex pattern for UK postcodes
        const ukPostcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;
        // Check if the input is empty
        if(!query.trim()){
            setError("Please enter a postcode.");
            return;
        }
        // Check if the input matches the UK postcode format
        if(!ukPostcodeRegex.test(query)){
            setError("Please enter a valid UK postcode.");
            return;
        }
        // If valid, clear any existing error and call the onSearch function
        setError('');
        onSearch(query);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value = {query}
                // Update the query state on input change
                onChange = {(e) => setQuery(e.target.value)}
                placeholder = "Enter a UK postcode e.g EC4M 7RF"
            />
            <button type = "submit">Search</button>
            {error && <p>{error}</p>}
        </form>
    )
}
export default SearchBar;