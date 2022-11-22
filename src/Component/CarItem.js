const CarItem = ({obj}) => {
  let {Brand,Color,Engine,Mileage,Model,FotoUrl} = obj
  let errorText = 'Nera duomenų'
  return (
    
    <div className="CarWrapper">
      <ul className="CarUl">
        <li className="car-list"><strong>Barand:</strong> {Brand? Brand: errorText}</li>
        <li className="car-list"><strong>Model:</strong> {Model? Model: errorText}</li>
        <li className="car-list"><strong>Color:</strong> {Color? Color: errorText}</li>
        <li className="car-list"><strong>Engine:</strong> {Engine? Engine: errorText}</li>
        <li className="car-list"><strong>Mileage:</strong> {Mileage? Mileage: errorText}</li>
      </ul>
      <img alt='car' src={FotoUrl} width={200}/>
    </div>
  )
}

export default CarItem
