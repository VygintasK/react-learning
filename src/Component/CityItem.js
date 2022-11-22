const CityItem = ({ obj }) => {
  let { name, isCapital, population, location, touristAttractions } = obj
  let cityName = isCapital ? name + ' (capital)' : name

  let attractions
  if (!touristAttractions.length) {
    attractions = "NOBODY LIKES TOURISTS HERE"
  } else {
    touristAttractions.length === 1 ? attractions = "Main tourist atraction is:" : attractions = 'Main tourist atraction are:'
  }

  return (
    <div>
      <h3>{cityName}</h3>
      <p>{name} is {isCapital && "a capital"} located in {location.country}, {location.continent}. Its population is {population} peeps.</p>
      <p>{attractions}{touristAttractions.join(', ')}.</p>
    </div>
  )
}

export default CityItem



// -------------------irgi veikia
// return (
//   <div>
//     <h3>{isCapital? name +'(capital)':name}</h3>
//     <p>{name} is {isCapital&& "a capital"} located in {location.country}, {location.continent}. Its population is {population} peeps.</p>
//     {!touristAttractions.length?<p>NOBODY LIKES TOURISTS HERE</p>:<p>Main tourist atraction{touristAttractions.length==1?" is":"s are:"} {touristAttractions.join(', ')}.</p>}
//   </div>
// )