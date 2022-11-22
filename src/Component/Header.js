import {Link} from "react-router-dom"
import "./Header.css"
const Header = () =>{
    return(
        <div className="header">
            <Link to="/" className="Home menu">Home</Link>
            <Link to="/ShoppingList" className="Shoping-list menu">Shopping</Link>
            <Link to="/TodoList" className="Todo-list menu">Todo</Link>
            <Link to="/CarList" className="Car-list menu">Cars</Link>
            <Link to="/CityList" className="City-list menu">City</Link>
        </div>
    )
}
export default Header