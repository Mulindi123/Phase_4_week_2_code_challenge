const RestaurantCard = ({ restaurants, setSelectedRestaurant }) => {
    return (<div>
                <h1>Restaurants</h1>
        <ul>
            {restaurants.map((restaurant) =>(
                <div key={restaurant.id}>
                    <h2>Restaurant Id: {restaurant.id}</h2>
                    <h3>Restaunt Name: {restaurant.name}</h3>
                    <p>Address: {restaurant.address}</p>
                    <button onClick={() => setSelectedRestaurant(restaurant)}>View Details</button> 
                </div>
            ))}
        </ul>

    </div>  );
}
 
export default RestaurantCard;