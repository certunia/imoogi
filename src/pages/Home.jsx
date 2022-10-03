import { getImoogi } from '../api/auth.js'
import { useQuery } from '@tanstack/react-query'
import Button from '@mui/material/Button';
import UserLogin from '../components/blocks/UserLogin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Outlet, Link } from "react-router-dom";

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
      <header className='home-header wrap'>
        <a href='/'>
          <img src="/logo.svg" alt='Imoogi logo' />
        </a>

        <UserLogin />
      </header>
      <div className='home-first-block wrap'>
        <div className='flex flex-col items-start'>
          <h1>
            Let’s share <br/>
            knowledge <br/>
            together
          </h1>
          <div className='home-first-block__description'>
            Build your own quiz card,<br/>
            start for free & get the results
          </div>
          <Button
            sx={{ borderRadius: 50, height: 64, width: 264, fontSize: 24, textTransform: 'none' }}
            variant="contained"
            color='primary'
            endIcon={<ArrowForwardIosIcon />}
            size='large'
            component={Link}
            to="/login"
          >
            Start now
          </Button>
        </div>

        <img src='/brain.png' alt='learnin picture of a brain'/>
      </div>

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

      <Outlet />
    </div>
  )
}

export default Home
