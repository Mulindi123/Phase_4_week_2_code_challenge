import { Routes, Route} from 'react-router-dom'
import RestaurantPage from "./RestaurantsPage";
import Landing from "./Landing";
import Pizzas from './Pizzas';
import PostRestaurantPizzas from './PostRestaurantPizzas';
import Contact from './Contact';

function App() {
  return (
    <div className="bg-slate-500 min-h-screen">
    <Routes>
      <Route element= {<Landing/>}>
        <Route path= "/" element={<RestaurantPage />} />
        <Route path= "/pizzas" element={<Pizzas />} />
        <Route path= "/restaurantPizzas" element={<PostRestaurantPizzas />} />
        <Route path= "/contact" element={<Contact />} />
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
