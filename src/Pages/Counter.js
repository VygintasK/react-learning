import React,{useState} from "react"
import "./Counter.css"

const Counter =()=> {

  const [state, setState] = useState(5)
  const [output, setOutput] = useState([1,10])
  

  function clickHandlerCalculator(number){
    setState(prevState=>prevState + number)
  }

  function reset(){
    setState(5)
  }

  const submitHandlerArr =(e)=>{
    e.preventDefault()
    //////////////////////// PER STATE //////////////////
    setOutput((prevState) => {
      return [...prevState,state]
      ///////////////////////// REIK ISMOKT ///////////////
    })
  } 

  let outputsLi=output.map((element,index) => {
    return<p className={element<5?'red number':'green number'} 
              key={index}>{element}
          </p>
  })


 

  return (
    <form id='form' onSubmit={submitHandlerArr}>

      <input type='number' min={0} max={10} value={state} 
      onChange={(event)=> setState(event.target.valueAsNumber)}/>

      <button 
      type="button"
      disabled={state<=1?true:null} 
      onClick={()=> clickHandlerCalculator(-2)}
      >-2</button>

      <button 
      type="button"
      disabled={state<=0?true:null} 
      onClick={()=> clickHandlerCalculator(-1)}
      >-1</button>

      <span className={state<5?'red':'green'}>{state}</span>

      <button 
      type="button"
      disabled={state>=10?true:null} 
      onClick={()=> clickHandlerCalculator(1)}
      >+1</button>

      <button 
      type="button"
      disabled={state>=9?true:null} 
      onClick={()=> clickHandlerCalculator(2)}
      >+2</button>

      <button onClick={reset}>reset</button>

      <div>{outputsLi}</div>

      <input type="submit" value='Submit Button'></input>
    </form>
  )
}
export default Counter