import { getImoogi } from '../api/auth.js'
import { useQuery } from '@tanstack/react-query'

function Home() {
  const { data: imoogi, refetch } = useQuery(['imoogi'], getImoogi, {
    refetchOnWindowFocus: false,
    enabled: false // disable this query from automatically running
  });

  const fetchImoogi = () => {
    refetch();
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/logo.svg" alt="Imoogi logo" />
        </a>
      </div>
      <div className="fields">
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

export default Home
