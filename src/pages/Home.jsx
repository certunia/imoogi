import { getImoogi } from '../api/auth.js'
import { useQuery } from '@tanstack/react-query'
import Button from '@mui/material/Button';
import UserLogin from '../components/blocks/UserLogin';

function Home() {
  const { data: imoogi, refetch } = useQuery(['imoogi'], getImoogi, {
    refetchOnWindowFocus: false,
    enabled: false // disable this query from automatically running
  });

  const fetchImoogi = () => {
    refetch();
  };

  return (
    <div className='home'>
      <div className='home-header wrap'>
        <a href="/">
          <img src="/logo.svg" alt="Imoogi logo" />
        </a>

        <UserLogin />
      </div>
      <div className='home-first-block wrap'>
        <div className='card'>
          <Button
            variant="contained"
            onClick={fetchImoogi}
          >
            Imoogi api
          </Button>

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
