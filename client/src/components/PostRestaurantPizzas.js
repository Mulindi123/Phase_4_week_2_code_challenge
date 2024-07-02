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
        <div className="">
            <h1 className="text-center text-2xl font-extrabold">Add Pizza</h1>
            <form onSubmit={handleSubmit} className="bg-slate-400 p-6 rounded-lg shadow-2xl max-w-md mx-auto mt-6 mb-6">
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-0">
                    <label htmlFor="price" className="block text-gray-700 text-ms font-bold mb-2">Price:</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        name="price"
                        type="number"
                        placeholder="Enter Price"
                        value={price}
                        className="shadow-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                </div>
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-0">
                    <label htmlFor="pizzaId" className="block text-gray-700 text-ms font-bold mb-2">Pizza Id:</label>
                    <input
                        onChange={(e) => setPizzaId(e.target.value)}
                        name="pizzaId"
                        type="number"
                        placeholder="Enter PizzaID"
                        value={pizzaId}
                        className="shadow-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                </div>
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-0">
                <label htmlFor="price" className="block text-gray-700 text-ms font-bold mb-2">Restaurant Id:</label>
                    <input
                        onChange={(e) => setRestaurantId(e.target.value)}
                        name="restId"
                        type="number"
                        placeholder="Enter Restaurant ID"
                        value={restaurantId}
                        className="shadow-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    />
                </div>
                <button type="submit" className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    );
}

export default PostRestaurantPizzas;