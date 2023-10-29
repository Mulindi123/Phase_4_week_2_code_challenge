import { useState, useEffect } from "react"
const Pizzas = () => {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/pizzas")
        .then( r => r.json())
        .then((data) => {
            setPizzas(data)
            console.log(data)
        })
    }, [])
    
    return ( <div>
            <h1>Pizzas</h1>
            {pizzas.map((pizza)=>(
                <div key={pizza.id}>
                    <h2>ID: {pizza.id}</h2>
                    <p>Name: {pizza.name}</p>
                    <p>Ingredients: {pizza.ingredients}</p>
                </div>
            ))}
    </div> );
}
 
export default Pizzas;