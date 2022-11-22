

const TodoItem = ({Bool,title}) => {
  if(Bool){
    return (
      <p>{title + " - DONE"}</p>
    )
  }
  if(!Bool){
    return (
      <p>{title + " - In progress"}</p>
    )
  }
} 
export default TodoItem