import { useEffect, useState } from "react"

const Home = () => {
    const [restaurants, setRestaurants] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/restaurants")
        .then( r => r.json())
        .then((data) => setRestaurants(data))
    }, [])

    return ( <div>
        <h1>Restaurants</h1>
        <ul>
            {restaurants.map((restaurant) =>(
                <div key={restaurant.id}>
                    <h2>Restaurant Id: {restaurant.id}</h2>
                    <h3>Restaunt Name: {restaurant.name}</h3>
                    <p>Address: {restaurant.address}</p>
                </div>
            ))}
        </ul>
    </div> );
}
 
export default Home;