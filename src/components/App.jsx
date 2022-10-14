import { getImoogi } from '../api/auth.js'
import { useQuery } from '@tanstack/react-query'

function App() {
  // const fetchCocktails = () => {
  //   refetch();
  // };

  // const { cocktails, refetch } = useQuery(["cocktails"], getCocktails, {
  //   refetchOnWindowFocus: false,
  //   enabled: false // disable this query from automatically running
  // });

  const { data: imoogi, refetch } = useQuery(['imoogi'], getImoogi, {
    refetchOnWindowFocus: false,
    enabled: false // disable this query from automatically running
  });

  const fetchImoogi = () => {
    refetch();
  };

  return (
    <div className="App Imoogi">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/logo.svg" alt="Imoogi logo" />
        </a>
      </div>
      <div className="fields">
        {/*<div className="card">
          <button onClick={fetchCocktails}>
            Cocktail api
          </button>
          <h4>
            Response:
          </h4>
          <ul className="response">
            { cocktails?.drinks?.map(el => <div key={el.idDrink}>{el.idDrink}: {el.strDrink}</div> ) }
          </ul>
        </div>*/}

        {/*<div className="card">
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
        </div>*/}

        <div className="card">
          <button onClick={fetchImoogi}>
            Imoogi api
          </button>
          <h4>
            Response:
          </h4>

          <div className="response">
            { imoogi?.message }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
