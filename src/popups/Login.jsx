import PopupBase from '../components/PopupBase';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import GoogleIcon from '../components/icons/Google'
import FacebookIcon from '../components/icons/Facebook'

function PopupLogin() {
  return (
    <PopupBase title='Login'>
      <div className='flex gap-5 items-stretch'>
        <FormControl className='form-one-column'>
          <TextField label='email' variant='outlined' size='small'/>
          <TextField label='password' variant='outlined' size='small'/>
          <Button
            sx={{ borderRadius: 50, height: 49, width: '100%', fontSize: 18, textTransform: 'none' }}
            variant='contained'
            color='primary'
            endIcon={<ArrowForwardIosIcon />}
            size='large'
          >
            Log in
          </Button>
        </FormControl>
        <div className='vertical-divider'></div>
        <div className='flex flex-col gap-5'>
          Log in using:
          <Button
            sx={{ borderRadius: 50, height: 49, fontSize: 18, textTransform: 'none' }}
            variant='outlined'
            color='primary'
            startIcon={<GoogleIcon />}
            size='large'
          >
            Google
          </Button>

          <Button
            sx={{ borderRadius: 50, height: 49, fontSize: 18, textTransform: 'none' }}
            variant='outlined'
            color='primary'
            startIcon={<FacebookIcon />}
            size='large'
          >
            Facebook
          </Button>
          Don’t have an account?
          <Link to='/registration'>Create new account</Link>
        </div>
      </div>
    </PopupBase>
  )
}

export default PopupLogin
