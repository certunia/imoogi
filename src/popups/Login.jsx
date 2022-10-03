import PopupBase from '../components/PopupBase';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import GoogleIcon from '../components/icons/Google';
import FacebookIcon from '../components/icons/Facebook';
import { toast } from 'react-toastify';
import { ValidationGroup, Validate } from 'mui-validate';

function PopupLogin() {
  const notify = () => {
    console.log('asdf')
    toast.error("Oh no, we don't have a backend yet!");
  };

  return (
    <PopupBase title='Login'>
      <div className='flex gap-5 items-stretch'>
        <ValidationGroup>
          <FormControl className='form-one-column'>
            <Validate
              name="internal key 1"
              regex={/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/}
              required
              initialValidation='silent'
            >
              <TextField id='login-email' type='email' label='email' variant='outlined' size='small'/>
            </Validate>
            <Validate name="internal key 2" required>
              <TextField
                id='login-password'
                label='password'
                variant='outlined'
                size='small'
                type='password'
              />
            </Validate>
            <Button
              sx={{ borderRadius: 50, height: 49, width: '100%', fontSize: 18, textTransform: 'none' }}
              variant='contained'
              color='primary'
              endIcon={<ArrowForwardIosIcon />}
              size='large'
              onClick={notify}
            >
              Log in
            </Button>
          </FormControl>
        </ValidationGroup>
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
        Don’t have an account?
        <Link to='/registration'>Create new account</Link>
      </div>
      </div>
    </PopupBase>
  )
}

export default PopupLogin
