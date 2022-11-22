const CarItem = ({obj}) => {
  let {brand,color,engine,mileage,model,fotoUrl} = obj
  let errorText = 'Nera duomenų'
  return (
    
    <div className="CarWrapper">
      <ul className="CarUl">
        <li className="car-list"><strong>Barand:</strong> {brand? brand: errorText}</li>
        <li className="car-list"><strong>Model:</strong> {model? model: errorText}</li>
        <li className="car-list"><strong>Color:</strong> {color? color: errorText}</li>
        <li className="car-list"><strong>Engine:</strong> {engine? engine: errorText}</li>
        <li className="car-list"><strong>Mileage:</strong> {mileage? mileage: errorText}</li>
      </ul>
      <img alt='car' src={fotoUrl} width={200}/>
    </div>
  )
}

export default CarItem
