const CarItem = ({obj}) => {
  let {brand,color,engine,mileage,model,fotoUrl,basePrice} = obj
  let errorText = 'Nera duomenų'
  return (
    
    <div className="CarWrapper">
      <h3>{brand&& brand} {model&&'('+model+')'}</h3>
      <ul className="CarUl">
        <li className="car-list"><strong>Color:</strong> {color? color: errorText}</li>
        <li className="car-list"><strong>Engine:</strong> {engine? engine: errorText}</li>
        <li className="car-list"><strong>Mileage:</strong> {mileage? mileage+" km": errorText}</li>
        <li className="car-list"><strong>BasePrice:</strong> {basePrice? basePrice+" Euro": errorText}</li>
      </ul>
      <img alt='car' src={fotoUrl} width={200}/>
    </div>
  )
}

export default CarItem
