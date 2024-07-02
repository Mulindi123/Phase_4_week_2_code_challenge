import { useState, useEffect } from "react";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((r) => r.json())
      .then((data) => {
        setPizzas(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4 mt-10 bg-slate-400">
      <h1 className="text-2xl font-bold mb-4">Pizzas</h1>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-600">
            <th className="py-2 px-4 border-b text-white font-extrabold">ID</th>
            <th className="py-2 px-4 border-b text-white font-extrabold">Name</th>
            <th className="py-2 px-4 border-b text-white font-extrabold">Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.id} className="text-center">
              <td className="py-2 px-4 border-b">{pizza.id}</td>
              <td className="py-2 px-4 border-b">{pizza.name}</td>
              <td className="py-2 px-4 border-b">{pizza.ingredients}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pizzas;
