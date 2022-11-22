import {Link} from "react-router-dom"
import "./Header.css"
const Header = () =>{
    return(
        <div className="header">
            <Link to="/" className="headerList">Home</Link>
            <Link to="/ShoppingList" className="headerList">ShoppingList</Link>
            <Link to="/TodoList" className="TodoList">TodoList</Link>
        </div>
    )
}
export default Header