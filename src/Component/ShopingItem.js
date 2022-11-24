import React,{useState} from "react"
import "./ShopItem.css"


const ShopingItem = ({title,done }) => {
  // console.log(useState())
  // console.log(useState()[0])
  // console.log(useState()[1])

  // let text = (useState()[0])
  // let setText =(useState()[1])

  const [state, setState] = useState(done)
  function clickHandler(){
    setState(!state)
  }
  let infoText =state? 'yra' : 'nera'
  return (
    <div>
      <p onClick={clickHandler} className={!state?'Done':'Not'}>{title} - {infoText} pirkiniu krepselyje</p>
    </div>
  )
}

export default ShopingItem


/// STATE PAKEITIMAS - HOOK







// const [state, setState] = useState(done)
// function clickHandler(){
//   setState(!state)
// }
// let infoText =state? 'yra' : 'nera'
// return (
//   <div>
//     <p>{title} - {infoText} pirkiniu krepselyje</p>
//     {<button onClick={clickHandler}>{!state?'add':'remove'}</button>}
//   </div>
// )




//////////////////CLICKAI Callback
// {!props.done &&<button onClick={()=>{console.log('click')}}>Done</button>}

// ---------per funkcija
// function clickHandler(){
//   console.log('click')
// }
//-----------> skliaustu nereik nes callback funkcija
// return (
//   <div>
//   <p>{props.title} - {infoText} pirkiniu krepselyje</p>
//   {!props.done &&<button onClick={clickHandler}>Done</button>}
//   </div>
// )
//////////////////////////