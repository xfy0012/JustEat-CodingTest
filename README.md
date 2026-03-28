# JUSTEAT-CODINGTEST

A React web app for the Just Eat Takeaway Early Careers coding assignment.
Users enter a UK postcode and the app shows restaurant cards with name, cuisines, rating, and address.

## Tech Stack

- React + Vite + CSS
- Vitest + React Testing Library

## Assignment Criteria Checklist

1. Display name, cuisines, rating (number), and address.
2. Limit results to the first 10 restaurants.

## How to Build, Compile, and Run

### Prerequisites

- Node.js 18+
- npm 9+

### 1) Install dependencies

```bash
npm install
```

### 2) Run in development

```bash
npm run dev
```

Open `http://localhost:5173`.

## How to Test

```bash
npm test
```

Current test files:

- `src/App.test.jsx`
- `src/components/SearchBar.test.jsx`
- `src/components/RestaurantCard.test.jsx`
- `src/components/RestaurantList.test.jsx`

## Assumptions Unclear Points

1. "10 restaurants" is interpreted as the first 10 entries returned by the API response order.
2. Cuisines are displayed as all cuisine names joined by commas.
3. Address display uses `city`, `firstLine`, and `postalCode`.
4. In local development, API calls are made via Vite proxy (`/api`) to avoid CORS issues from browser direct calls.

## Data Example

```json
{
  "name": "Curry Queen",
  "cuisines": [
    { "name": "Indian" },
    { "name": "Curry" },
    { "name": "Halal" },
    { "name": "Deals" }
  ],
  "rating": {
    "starRating": 4.5
  },
  "address": {
    "city": "London",
    "firstLine": "1 Shenfield Street",
    "postalCode": "N1 6SE"
  }
}
```

## Design Structure

- `src/components/RestaurantCard.jsx`: card UI for name, cuisines, rating, address
- `src/components/RestaurantList.jsx`: renders a list of restaurant cards
- `src/components/SearchBar.jsx`: postcode input + validation + submit
- `src/App.jsx`: search handler, API fetch, top-10 selection, state management

Data flow:
User input → SearchBar → App (fetch API) → RestaurantList → RestaurantCard × 10

## Solution Improvements
1. UI optimized with CSS, improve the card layout, spacing.

## Future Improvements
1. Improve postcode validation with a dedicated service (for example Royal Mail lookup).

