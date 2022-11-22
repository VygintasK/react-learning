import TodoItem from "../Component/TodoItem";
const todoListArr = [
    {
        title:"Clean room",
        done: true,
    },
    {
        title:"Work out",
        done: false,
    },
    {
        title:"Do taxes",
        done: true,
    },
    {
        title:"Go to space",
        done: false,
    },
    {
        title:"Pet a dog",
        done: true,
    }
]

function listCheck(){
    if (todoListArr.length === 0){   
        return <p>Empty</p>
    }
    return todoListArr.map((element,index) => {
        return <TodoItem key={index} title={element.title} done={element.done}/>
        
    }); 
}

const ShoppingList = () =>{
    return(
        <div>
            <h1>To do list Page</h1>
            <div className="To-do-list">
                {listCheck()}
            </div>
        </div>
    )
}
export default ShoppingList