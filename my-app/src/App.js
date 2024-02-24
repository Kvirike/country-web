import './App.css';
import Card from './Components/Card.js'
import ErrMsg from './Components/Error.js'
import Cover from './Components/Cover.js'
import { useEffect, useState} from 'react';

const BASE_URL = "https://restcountries.com/v3.1"; // /name/{name}

function App() {

const[crntValue, updtValue] = useState([])
const [inputValue, setInputValue] = useState('');
const [errorMessage, setErrorMessage] = useState(null);
const [showImage, setShowImage] = useState(true);


  async function submitChange(event) {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }
    
    setShowImage(false);
    try {
      const response = await fetch(`${BASE_URL}/name/${inputValue}`);
      
      if (!response.ok) {
        throw new Error('Country not found');
      }
      const country = await response.json();
      updtValue(country);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Country not found');
    }
  }


const handleChange = (event) => {
  setInputValue(event.target.value);
};


  return (
    <div className="App">
      <h1 style={{ color: "white", fontStyle:"italic", fontSize:'3em'}}>World Countries</h1>
        <div>
          <form onSubmit={submitChange}>
            <input
              placeholder='Please type in Eng'
              className='input'
              name="myInput"
              type='text'
              value={inputValue}
              onChange={handleChange}
              />
            <button 
              className='btn'
            >
              Search
            </button>
          </form>
        </div>
        {errorMessage ? <ErrMsg /> : null}
        {showImage == true ? <Cover/> : null}
      <div className='countryList'>
          {
            crntValue.map((elem, index) => {
              return <Card elem={elem} key={index} />
            })
          }
          </div>
      </div>
  );
}

export default App;