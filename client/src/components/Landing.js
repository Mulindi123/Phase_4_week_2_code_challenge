import { Link, Outlet } from "react-router-dom";



function Landing(){
    return (
        <div>
             <div className="navbar">
                <h1 className="landing-header">Pizza App</h1>
                <nav className="nav-items">
                    <button><Link to='/home'></Link><span>RestaurantsPage</span></button>
                    <button><Link to='/cart'></Link><span>RetaurantDetails</span></button>
                </nav>
            </div> 
            <Outlet></Outlet> 
        </div>
    )
}
export default Landing