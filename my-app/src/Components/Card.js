import '../App.css'

function Card ({elem, index}){
    return <div className='divFlex' key={index}>
                <img className='img' src={elem.flags.png} alt={elem.flags.svg} />
                <h2>{elem.altSpellings[1]}</h2> 
                <p>Capital: {elem.capital}</p> 
                <p>Continent: {elem.continents}</p>
                <p>Population: {elem.population}</p>
            </div>
}
export default Card;