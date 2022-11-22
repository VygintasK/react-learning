import CityItem from '../Component/CityItem'

const CityList = () => {
    let citiesArr = [
        {
            name: 'Vilnius',
            population: 350000,
            location:{
                continent: 'Europe',
                country: 'Lithuania',
            },
            touristAttractions: [
                'Gedimino pilis',
                'Katedra',
                'Uzupis',
                'Naujanai',
                'Akropalius'
            ],
            isCapital: true,
        },
        
        {
            name: 'Kaunas',
            population: 300000,
            location: {
                continent: 'Europe',
                country: 'Lithuania'
             },
             touristAttractions: [
                'Kauno pilis',
                'Soboras'
            ],
            isCapital: false,
        },
        {
            name: 'Beijing',
            population: 21000000,
            location: {
                continent: 'Asia',
                country: 'China'
            },
            touristAttractions: [
                'Tiananmen Square',
                'Lama Temple',
                'Nationa Museum if China',
                'Nuclear silo'
            ],
            isCapital: true,
        },
        {
            name: 'Los Angeles',
            population: 4000000,
            location: {
                continent: 'North America',
                country: 'USA'
            },
            touristAttractions: [
                'Hollywood',
                'Beverley Hills',
                'Disneyland'
            ],
            isCapital: false,
        },
        {
            name: 'Kupiškis',
            population: 100+' drunk and stupid',
            location: {
                continent: 'Space',
                country: 'pa-Kupy'
            },
            touristAttractions: [
              'Piliakalnis'
            ],
            isCapital: false,
        },
        {
            name: 'London',
            population: 10000000,
            location: {
              continent: 'Europe',
              country: 'United Kingdom'
            },
            touristAttractions: [
              'London eye',
              'Tower bridge',
              'Big Ben'
            ],
            isCapital: true,
        },
        {
            name: 'Berlin',
            population: 4000000,
            location: {
              continent: 'Europe',
              country: 'Germany'
            },
            touristAttractions: [
              'Branderburg tor',
              'Grossenstern',
              'Fernseherturm'
            ],
            isCapital: true,
        },
        {
            name: 'Munich',
            population: 1500000,
            location: {
              continent: 'Europe',
              country: 'Germany'
            },
            touristAttractions: [
              'Marienplatz',
              'Deutsches Museum',
              'Hofbrauhaus'
            ],
            isCapital: false,
        },
        {
            name: 'Moscow',
            population: 12000000,
            location: {
              continent: 'Europe',
              country: 'Russia'
            },
            touristAttractions: [
              // 'Red square',
              // 'Lenin',
              // 'Kremlin'
            ],
            isCapital: true,
        },
        {
            name: 'Sydney',
            population: 5300000,
            location: {
              continent: 'Australia',
              country: 'Australia'
            },
            touristAttractions: [
              'Sydney Opera House',
              'Bondi Beach',
              'Taronga Zoo',
              'Local Bar'
            ],
            isCapital: false,
        },
    ]

  return (
    <div className='cityWrap'>
        <h1>City List:</h1>
        {citiesArr.map((element,index) => {
          return <CityItem key={index} obj={element}/>
        })}
    </div>
  )
}

export default CityList


