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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((pizza) => (
              <tr key={pizza.id}>
                <td>{pizza.id}</td>
                <td>{pizza.name}</td>
                <td>{pizza.ingredients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    
}
 
export default Pizzas;