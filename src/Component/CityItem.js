import "./CityItem.css"

const CityItem = ({obj}) => {
let {name, isCapital,location, population,touristAttractions}=obj
  return (
    <div className="city">
      <h3>{isCapital? name +'(capital)':name}</h3>
      <p>{name} is {isCapital&& "a capital"} located in {location.country}, {location.continent}. Its population is {population} peeps.</p>
      {!touristAttractions.length
      ? <p>Nobody likes tourists here...</p>
      : (<>
          <strong><p>Main tourist atraction{touristAttractions.length===1?" is":"s are:"}</p></strong>
          <p>{touristAttractions.join(', ')}.</p>
        </>)
      }
    </div>
  )
}
export default CityItem




// -------------------irgi veikia
//   return(
//     <div>
//       <h3>
//         {`${obj?.name}${obj?.isCapital && '(capital)'}`}
//       </h3>
//       <p>
//         {`${obj?.name} is ${obj.isCapital && '(capital)'} located in ${obj?.location?.continent}. Its population is ${obj?.population}peeps.`}
//       </p>
//       <p>
//         { !obj?.touristAttraction?.length>0
//           ? 'Nobody likes tourists here':`Main tourist attraction
//           ${obj?.touristAttractions?.length>1 ? 's are:': ' is'} 
//           ${obj?.touristAttractions?.join(', ')}.`
//         }
//       </p>
//     </div>
//   )


//--------------------irgi veikia bet meh
// let { name, isCapital, population, location, touristAttractions } = obj
// let cityName = isCapital ? name + ' (capital)' : name
// let attractions
// if (!touristAttractions.length) {
//   attractions = "NOBODY LIKES TOURISTS HERE"
// } else {
//   touristAttractions.length === 1 ? attractions = "Main tourist atraction is:" : attractions = 'Main tourist atraction are:'
// }
// return (
//   <div className="city">
//     <h3>{cityName}</h3>
//     <p>{name} is {isCapital && "a capital"} located in {location.country}, {location.continent}. Its population is {population} peeps.</p>
//     <p>{attractions} {touristAttractions.join(', ')}.</p>
//   </div>
// )