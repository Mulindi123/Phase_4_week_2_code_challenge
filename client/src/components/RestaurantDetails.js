import { useEffect, useState } from "react";

const RestaurantDetails = ({ restaurant , onDeleteRestaurant}) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurant);

    useEffect(() => {
        if (restaurant) {
            fetch(`http://localhost:5000/restaurants/${restaurant.id}`)
                .then(r => {
                    if (r.status === 404) {
                        return {"error": "Restaurant not found"};
                    }
                    return r.json();
                })
                .then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    } else {
                        setSelectedRestaurant(data);
                    }
                })
                .catch(error => {
                    console.error("An error occurred:", error);
                });
        }
    }, [restaurant]);

    function handleDelete(){
        fetch(`http://localhost:5000/restaurants/${restaurant.id}`, {
            method: "DELETE"
        });

        onDeleteRestaurant(restaurant.id)
    }

    return ( <div>
            {selectedRestaurant ? (
                <div>
                    <h1>{selectedRestaurant.name}</h1>
                    <p>Address:{selectedRestaurant.address}</p>
                    <h2>Pizzas</h2>
                    <ul>
                        {selectedRestaurant.pizzas.map((pizza) =>(
                            <li key={pizza.id}>
                                <h3>{pizza.name}</h3> 
                                <p>Ingredients:{pizza.ingredients}</p>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
                </div>
            ):(
                <p>Loading...</p>
            )}
    </div> 
    );
}
 
export default RestaurantDetails;