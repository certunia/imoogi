import PopupBase from '../components/PopupBase';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import GoogleIcon from '../components/icons/Google'
import FacebookIcon from '../components/icons/Facebook'
import { toast } from 'react-toastify';

function PopupLogin() {
  const notify = () => {
    console.log('asdf')
    toast.error("Oh no, we don't have a backend yet!");
  };

  return (
    <PopupBase title='Registration'>
      <div className='flex gap-5 items-stretch'>
        <FormControl className='form-one-column'>
          <TextField required label='email' variant='outlined' size='small'/>
          <TextField required label='password' variant='outlined' size='small'/>
          <Button
            sx={{ borderRadius: 50, height: 49, width: '100%', fontSize: 18, textTransform: 'none' }}
            variant='contained'
            color='primary'
            endIcon={<ArrowForwardIosIcon />}
            size='large'
            onClick={notify}
          >
            Continue
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
            onClick={notify}
          >
            Google
          </Button>

          <Button
            sx={{ borderRadius: 50, height: 49, fontSize: 18, textTransform: 'none' }}
            variant='outlined'
            color='primary'
            startIcon={<FacebookIcon />}
            size='large'
            onClick={notify}
          >
            Facebook
          </Button>
          Already have an account?
          <Link to='/login'>Log in</Link>
        </div>
      </div>
    </PopupBase>
  )
}

export default PopupLogin
