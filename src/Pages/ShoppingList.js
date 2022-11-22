import ShopingItem from "../Component/ShopingItem";

const shoppingListArr = [
    {
        title:"duona",
        done: true,
        
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
        done: true,

    },
    {
        title:"batonas",
        done: true,

    },
]

function shoppingBag(){
    if (shoppingListArr.length === 0){   
        return 'Empty'
    }
    return shoppingListArr.map((element,index) => {
        return <ShopingItem key={index} title={element.title} done={element.done}/>    
    });
}
const ShoppingList = () =>{
    return(
        <div>
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
