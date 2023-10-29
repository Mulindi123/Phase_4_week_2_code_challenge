import { useState, useEffect } from "react";

const PostRestaurantPizzas = () => {

    const [restaurantPizza, setRestaurantPizza] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/restaurant_pizzas")
        .then(r => r.json())
        .then(data => {
            setRestaurantPizza(data)
            console.log(data)
        })

    }, [])

    function handleAddRestaurantPizza(newRestaurantPizza) {
        setRestaurantPizza([...restaurantPizza, newRestaurantPizza]);
      } 
      
    const [price, setPrice] = useState("");
    const [pizzaId, setPizzaId] = useState("");
    const [restaurantId, setRestaurantId] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:5000/restaurant_pizzas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "price": price,
                "pizza_id": pizzaId,
                "restaurant_id": restaurantId
              }),
        })
        .then((r) => r.json())
        .then((newRestaurantPizza) => {
            handleAddRestaurantPizza(newRestaurantPizza);
            setPrice("")
            setPizzaId("")
            setRestaurantId("")
            console.log(newRestaurantPizza)
        });

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    placeholder="Enter Price"
                    value={price}
                />
                <input
                    onChange={(e) => setPizzaId(e.target.value)}
                    type="number"
                    placeholder="Enter PizzaID"
                    value={pizzaId}
                />
                <input
                    onChange={(e) => setRestaurantId(e.target.value)}
                    type="number"
                    placeholder="Enter Restaurant ID"
                    value={restaurantId}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostRestaurantPizzas;
