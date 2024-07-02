import { useEffect, useState } from "react";

const RestaurantDetails = ({ restaurant, onDeleteRestaurant }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurant);

    useEffect(() => {
        if (restaurant) {
            fetch(`http://localhost:5000/restaurants/${restaurant.id}`)
                .then(r => {
                    if (r.status === 404) {
                        return { "error": "Restaurant not found" };
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

    function handleDelete() {
        fetch(`http://localhost:5000/restaurants/${restaurant.id}`, {
            method: "DELETE"
        });

        onDeleteRestaurant(restaurant.id);
    }

    return (
        <div className="container mx-auto p-4">
            {selectedRestaurant ? (
                <div className="">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">{selectedRestaurant.name}</h1>
                        <p className="mb-4">Address: {selectedRestaurant.address}</p>
                        <h2 className="text-2xl font-semibold mb-2">Pizzas</h2>
                    </div>
                    <table className="min-w-full border border-gray-200 bg-slate-400">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Pizza Name</th>
                                <th className="py-2 px-4 border-b">Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedRestaurant.pizzas.map((pizza) => (
                                <tr key={pizza.id} className="text-center">
                                    <td className="py-2 px-4 border-b">{pizza.name}</td>
                                    <td className="py-2 px-4 border-b">{pizza.ingredients}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            ) : (
                <p className="text-3xl">Loading...</p>
            )}
        </div>
    );
};

export default RestaurantDetails;
