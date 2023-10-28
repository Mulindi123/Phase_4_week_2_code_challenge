import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
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

    return ( <div>
        <RestaurantCard restaurants={restaurants} setSelectedRestaurant={setSelectedRestaurant} />
        <RestaurantDetails restaurant={selectedRestaurant} />
    </div> );
}
 
export default ResaurantPage;