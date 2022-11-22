import Home from './Pages/Home'
import ShoppingList from './Pages/ShoppingList'
import TodoList from "./Pages/TodoList"
import CarList from "./Pages/CarList"
import CityList from "./Pages/CityList"
import Header from "./Component/Header"

import './App.css';
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ShoppingList' element={<ShoppingList/>}></Route>
        <Route path='/TodoList' element={<TodoList/>}></Route>
        <Route path='/CarList' element={<CarList/>}></Route>
        <Route path='/CityList' element={<CityList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
