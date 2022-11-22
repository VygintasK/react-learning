
const ShopingItem = (props) => {
  let infoText =props.done? 'yra' : 'nera'
  return (
    <li>{props.title} - {infoText} pirkiniu krepselyje</li>
  )
}

export default ShopingItem
