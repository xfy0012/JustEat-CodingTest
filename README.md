# JUSTEAT-CODINGTEST
A React web app for the Just Eat Takeaway Early Careers coding assignment. Enter UK postcode to find the top 10 restaurants in that area, showing name, cuisines, star rating, and address.

# Assignment Criteria Checklist
1. Display name, cuisines, Rating as a number, Address
2. Limit to first 10 restaurants

# assumption
1. cuisines display: all cuisines in the restaurants
2. address display: only display the city firstline and postalcode.


# Data Scheme needed example
Restaurants:[
{"id":"92519","name":"Curry Queen","uniqueName":"curry-queen-islington",
"address":{"city":"London",
"firstLine":"1 Shenfield Street",
"postalCode":"N1 6SE","location":{"type":"Point","coordinates":[-0.08,51.531169]}},
"rating":{"count":2177,"starRating":5,"userRating":null},
"isNew":false,"driveDistanceMeters":2293,"openingTimeLocal":"2026-03-28T13:00:00","deliveryOpeningTimeLocal":"2026-03-27T16:00:00","deliveryEtaMinutes":{"rangeLower":25,"rangeUpper":40},"isCollection":true,"isDelivery":true,"isOpenNowForCollection":true,"isOpenNowForDelivery":true,"isOpenNowForPreorder":false,"isTemporarilyOffline":false,"deliveryCost":0,"minimumDeliveryValue":15,"defaultDisplayRank":0,"isTemporaryBoost":false,"isPremier":false,"logoUrl":"https://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/92519.gif","isTestRestaurant":false,"deals":[{"description":"Save 40% • Spend £20","offerType":"Percent"}],"tags":[],
"cuisines":[{"name":"Indian","uniqueName":"indian"},{"name":"Curry","uniqueName":"curry"},{"name":"Halal","uniqueName":"halal"},{"name":"Deals","uniqueName":"deals"}],
"availability":{"delivery":{"isOpen":true,"canPreOrder":false,"isTemporarilyOffline":false,"nextAvailability":{"from":"2026-03-28T13:00:00"},"etaMinutes":{"rangeLower":25,"rangeUpper":40}},"collection":{"isOpen":true,"canPreOrder":false,"isTemporarilyOffline":false,"nextAvailability":{"from":"2026-03-28T13:00:00"},"etaMinutes":{"approximate":15}}}},]

{
    "name": "Curry Queeen",
    "cuisines":[
        { "name": "Indian" },
        { "name": "Curry" },
        { "name": "Halal" },
        { "name": "Deals" }
    ]
    "rating":{
        "startRating": 5
    }
    "address":{
        "city": "London",
        "firstLine": "1 Shenfield Street",
        "postalCode": "N1 6SE"
    }
}

# Design Structure.

RestaurantCard - CardUI to show the four fields. 

## Test Setup (Vitest + React Testing Library)

This project uses `vitest`, `jsdom`, `@testing-library/react`, and `@testing-library/jest-dom`.

Install dependencies:

```bash
npm install
```

If you need to install test dependencies manually:

```bash
npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

Run tests:

```bash
npm test
```

Run tests once (CI style):

```bash
npm run test:run
```

Current test example:

- `src/components/RestaurantCard.test.jsx`
