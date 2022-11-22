import CarItem from "../Component/CarItem"

const CarList = () => {

    const carListArr =[
        {
            Brand: "BMW",
            Model: "e60",
            Engine: "disiel",
            BasePrice: 5000,
            Mileage: 300000,
            Color: "Black",
            FotoUrl: "https://i.pinimg.com/originals/73/ee/a0/73eea0f3f5402177fafdb1145039cce3.jpg"
        },
        {
            Brand: "Honda",
            Model: "Civic",
            Engine: "petrol",
            BasePrice: 1000,
            Mileage: 400000,
            Color: "Red",
            FotoUrl: "https://i.pinimg.com/736x/6e/e3/39/6ee339a1ebbd2d6c27cafb21f8d283a1--grill-lips.jpg"
        },
        {
            Brand: "Mitsubishi",
            Model: "Lancer EVO",
            Engine: "petrol",
            BasePrice: 10000,
            Mileage: 250000,
            Color: "White",
            FotoUrl: "https://i.pinimg.com/originals/96/69/7e/96697ef35d09ed8c9855e82bd77e460b.jpg"
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
