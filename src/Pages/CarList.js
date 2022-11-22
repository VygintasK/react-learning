import CarItem from "../Component/CarItem"

const CarList = () => {

    const carListArr =[
        {
            brand: "BMW",
            model: "e60",
            engine: "disiel",
            basePrice: 5000,
            mileage: 300000,
            color: "Black",
            fotoUrl: "https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg"
        },
        {
            brand: "Honda",
            model: "Civic",
            engine: "petrol",
            basePrice: 1000,
            mileage: 400000,
            color: "Red",
            fotoUrl: "https://i.pinimg.com/736x/6e/e3/39/6ee339a1ebbd2d6c27cafb21f8d283a1--grill-lips.jpg"
        },
        {
            brand: "Mitsubishi",
            model: "Lancer EVO",
            engine: "petrol",
            basePrice: 10000,
            mileage: 250000,
            color: "White",
            fotoUrl: "https://i.pinimg.com/originals/96/69/7e/96697ef35d09ed8c9855e82bd77e460b.jpg"
        },
    ]
    if (carListArr.length ===0){
        return <h1>Nėra auto sąrašo duomenų</h1>
    }
    let carlist=carListArr.map((car,index) => {
        return <CarItem key={index} obj={car}/>
    });

 
  return (
    <div className="Car-wrap">
        <h1>Car List:</h1>
        {carlist}
    </div>
  )
}

export default CarList
