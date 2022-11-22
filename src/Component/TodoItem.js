
const TodoItem = ({done,title}) => {
    let infoText =done? 'Done' : 'Not'
  return (
    <p>{title} - {infoText}</p>
  )
} 
export default TodoItem