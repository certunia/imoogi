import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Select, MenuItem, InputLabel} from "@mui/material";

import PopupBase from '../components/PopupBase';
import Multiselect from '../components/ui/Multiselect';
import AvatarIcon from '../components/icons/Avatar';
import { toast } from 'react-toastify';
import { ValidationGroup, Validate } from 'mui-validate';
import { useState } from 'react'

function PopupLogin() {
  const notify = () => toast.error("Oh no, we don't have a backend yet!");

  const [isMoreOptionsVisible, setMoreOptionsVisible] = useState(false);

  const toggleMoreOptions = () => {
    setMoreOptionsVisible(!isMoreOptionsVisible);
    console.log(isMoreOptionsVisible);
  }

  return (
    <PopupBase title='Last step'>
      <div className='flex gap-5'>
        <ValidationGroup>
          <FormControl className='form-two-columns w-full items-center'>
            <div className='flex justify-items-center items-center gap-4'>
              <AvatarIcon />
              <span>
                <h3 className='text-lg'>Upload your avatar</h3>
                <span className='text-slate-400 text-xs'>Max. size 2 Mb</span>
              </span>
              <Button
                sx={{ borderRadius: 50, height: 49, width: '188px', fontSize: 18, textTransform: 'none' }}
                variant='outlined'
                color='primary'
                endIcon={<ArrowForwardIosIcon />}
                size='large'
                onClick={notify}
              >
                Choose file
              </Button>
            </div>
            <div className='flex w-full justify-between gap-3'>
              <Validate
                classes={{root: 'w-full'}}
                name="internal key 1"
                regex={/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/}
                initialValidation='silent'
              >
                <TextField
                  id='login-email'
                  type='email'
                  label='email'
                  variant='outlined'
                  size='small'
                  autoFocus={true}
                  fullWidth
                />
              </Validate>
              <Validate name='internal key 2'>
                <TextField
                  id='login-password'
                  label='password'
                  variant='outlined'
                  size='small'
                  type='password'
                  fullWidth
                />
              </Validate>
            </div>
            <label htmlFor='optional' className='more-btn'>
              <div>optional fields</div>
              <input id='optional' type='checkbox' onChange={toggleMoreOptions}/>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.28413 8.97573C8.1181 8.93909 7.96047 8.8591
                  7.83109 8.73577L0.276123 1.53409C-0.0920372 1.18315 -0.0920372 0.614153 0.276123 0.263209C0.644283
                  -0.0877362 1.24119 -0.0877362 1.60935 0.263209L8.50054 6.83214L15.3906 0.264234C15.7588 -0.0867107
                  16.3557 -0.0867107 16.7239 0.264234C17.092 0.615179 17.092 1.18417 16.7239 1.53512L9.16891 8.73679C8.92894
                  8.96554 8.59178 9.04519 8.28413 8.97573Z" fill="#6B6867"/>
                </svg>
              </span>
            </label>
            {isMoreOptionsVisible &&
              <>
                <div className='w-full'>
                  Optional fields
                </div>

                <div className='flex w-full justify-between gap-3'>
                  <Validate
                    classes={{root: 'w-full'}}
                    name="internal key 1"
                    regex={/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/}
                    initialValidation='silent'
                  >
                    <FormControl fullWidth size="small">
                      <InputLabel id="login-email">Age</InputLabel>
                      <Select
                        id='login-email'
                        type='email'
                        label='email'
                        variant='outlined'
                        size='small'
                        fullWidth
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Validate>
                  <div className='flex w-full gap-3'>
                    <FormControl fullWidth size="small">
                      <InputLabel id="login-email">Age</InputLabel>
                      <Select
                        id='login-email'
                        type='email'
                        label='email'
                        variant='outlined'
                        size='small'
                        fullWidth
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth size="small">
                      <InputLabel id="login-email">Age</InputLabel>
                      <Select
                        id='login-email'
                        type='email'
                        label='email'
                        variant='outlined'
                        size='small'
                        fullWidth
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className='flex w-full'>
                  <Multiselect></Multiselect>
                </div>
              </>
            }

            <Button
              sx={{ borderRadius: 50, height: 49, width: 290, fontSize: 18, textTransform: 'none' }}
              variant='contained'
              color='primary'
              endIcon={<ArrowForwardIosIcon />}
              size='large'
              onClick={notify}
            >
              Finish
            </Button>
          </FormControl>
        </ValidationGroup>
      </div>
    </PopupBase>
  )
}

export default PopupLogin
