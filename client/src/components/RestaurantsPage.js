import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantsCard"
import RestaurantDetails from "./RestaurantDetails"

const ResaurantPage = () => {
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:5000/restaurants")
        .then( r => r.json())
        .then((data) => {
            setRestaurants(data)
            console.log(data)
        })
    }, [])

function handleDeleteRestaurant(id){
    const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id)
    setRestaurants(updatedRestaurants)
}

    return (
     <div className="">
        <RestaurantCard restaurants={restaurants} setSelectedRestaurant={setSelectedRestaurant} />
        <RestaurantDetails restaurant={selectedRestaurant} onDeleteRestaurant={handleDeleteRestaurant} />
    </div> );
}
 
export default ResaurantPage;