import React,{useState} from "react"

const ShoppingList = () =>{
    const [todoListArr,setTodoListArr] = useState([
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
    ])

    const submitHandler=(event)=>{
        event.preventDefault()
        let input = event.target.elements.text.value
        if (!input){
            console.log('input or fuck off')
            return
        }
        let todoData = {
            title: input,
            done: false,
        }
        console.log(todoListArr)
        setTodoListArr((prevState) => [todoData, ...prevState])
    } 

    let renderList = () => {
        return todoListArr.map((element,key) => {
            return <li key={key}>{element.title}</li>
        })
    }

    return(
        <div>
            <h1>To do list Page</h1>
            {todoListArr.length >0&&
                <ul className="To-do-list">
                    {renderList()}
                </ul>
            }
            <form onSubmit={submitHandler}>
                <input id="text" type='text'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default ShoppingList