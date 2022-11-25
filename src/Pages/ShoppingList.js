
import ShopingItem from "../Component/ShopingItem";
import React,{useState} from "react"

const ShoppingList = () => {

    const [shoppingListArr, setShoppingListArr] = useState([
        {
            title:"duona",
            done: false,
            
        },
        {
            title:"pienas",
            done: false,
    
        },
        {
            title:"cukrus",
            done: true,
    
        },
        {
            title:"grietine",
            done: false,
    
        },
        {
            title:"batonas",
            done: false,
    
        },
    ])
    
    function shoppingBag(){
        if (shoppingListArr.length === 0){   
            return 'Empty'
        }
        return shoppingListArr.map((element,index) => {
            return <ShopingItem key={index} title={element.title} done={element.done}/>    
        });
    }

    let submitHandler=(event)=>{
        event.preventDefault()
        let title = event.target.inputText.value
        let done = event.target.doneCheck.checked
        let shoppingListOBJ ={
            title,
            done,
        }
        setShoppingListArr((prevState) => [...prevState,shoppingListOBJ])
    }

  return (
    <div> 
        <form onSubmit={submitHandler}>
            <input id='inputText' type="text" ></input>
            <input id='doneCheck' type='checkbox'></input>
            <label htmlFor="doneCheck">done? </label>
            <input type="submit"></input>
        </form>

        <h1>Shopping List Page</h1>
        <div className="Shopping list">
            {shoppingBag()}
        </div>
    </div>
  )
}

export default ShoppingList























//VEIKIA
// const ShoppingList = () =>{
//     return(
//         <div>
//             <h1>Shopping List Page</h1>
//             <div className="Shopping list">
//                 {shoppingListArr.map((item,index)=> {
//                     return <ShopingItem key={index} title={item.title}/>
//                 })}
//             </div>
//         </div>
//     )
// }
// export default ShoppingList
