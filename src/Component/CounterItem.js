const CounterItem = (props) => {
    console.log({props})

  return (
    <button>{props.children}</button>
  )
}

export default CounterItem