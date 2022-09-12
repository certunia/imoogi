import { useState } from 'react'
import api from './services/api.js'
import './App.css'

function App() {
  const [cocktails, setCocktails] = useState([])
  const [nasa, setNasa] = useState(null)

  function getCocktails() {
    api('get', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(data => {
        setCocktails(data.drinks);
        console.log(cocktails);
      });
  }

  function getNasa() {
    api('get', 'https://api.nasa.gov/planetary/apod?api_key=8QM0zVNIDDypMrk0hJtowNpwFalxPWnRU5EZ9cj0')
      .then(data => {
        setNasa(data);
        console.log(data);
      });
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/logo.svg" className="logo" alt="Imoogi logo" />
        </a>
      </div>
      <div className="fields">
        <div className="card">
          <button onClick={getCocktails}>
            Cocktail api
          </button>
          <h4>
            Response:
          </h4>
          <ul className="response">
            { cocktails?.map(el => <div>{el.idDrink}: {el.strDrink}</div> ) }
          </ul>
        </div>

        <div className="card">
          <button onClick={getNasa}>
            Nasa api
          </button>
          <h4>
            Response:
          </h4>

          <div className="response">
            {nasa ? nasa.title : ''}
          </div>

          { nasa ? <img className="response_img" src={nasa.url} alt=""/> : '' }
        </div>
      </div>
    </div>
  )
}

export default App
