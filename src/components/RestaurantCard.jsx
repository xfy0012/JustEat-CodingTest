function RestaurantCard({ restaurant }) {
    const{ name, cuisines =[], rating, address = {}} = restaurant;

    const startRating = rating?.starRating ?? null;
    const cusisineNames = cuisines.map((c) => c.name).join(',');
    const addressLine = [address.city, address.firstLine, address.postalCode].filter(Boolean).join(', ');

    return (
        <div className="card">
            <h2>{name}</h2>
            <p className="cuisines">{cusisineNames.length ? cusisineNames : 'Various'}</p>
            <p className="rating">★ {startRating !== null ? Number(startRating).toFixed(1) : 'N/A'}</p>
            <p className="address">{addressLine || 'Address unavailable'}</p>
        </div>
    );
}

export default RestaurantCard;