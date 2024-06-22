import MainLayout from '../components/layouts/Main';
import FloatToggle from '../components/ui/FloatToggle';
import Button from '@mui/material/Button';

import EmojiPicker from 'emoji-picker-react';
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import FormControl from "@mui/material/FormControl";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Validate} from "mui-validate";
import TextField from "@mui/material/TextField";

function Trainbooks(props) {
  const menuItems = [
    {title: 'public'},
    {title: 'private'},
  ]

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject)
    setChosenEmoji(emojiObject);
  };

  const EmojiData = ({ chosenEmoji }) => (
    <div>
      <strong>Unified:</strong> {chosenEmoji.unified}
      <br />
      <strong>Symbol:</strong> {chosenEmoji.emoji}
      <br />
      <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
    </div>
  );

  return (
    <MainLayout
      title='Create a new trainbook'
      topRight={
        <Button
          endIcon={<ArrowForwardIosIcon />}
          outlined
          component={Link}
          to="/login"
        >
          Continue
        </Button>
      }
    >
      <div className='create-trainbook flex'>
        <div>
          <EmojiPicker onEmojiClick={onEmojiClick}/>
          {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
        </div>
        <Validate
          classes={{root: 'w-full'}}
          name="internal key 1"
          regex={/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/}
          initialValidation='silent'
        >
          <TextField
            id='login-email'
            type='text'
            label='Name your trainbook'
            variant='outlined'
            size='small'
            autoFocus={true}
            fullWidth
          />
        </Validate>


        <FloatToggle items={menuItems}/>
      </div>

      {/*<Button*/}
      {/*  sx={{ borderRadius: 50, height: 49, width: 234, fontSize: 18, textTransform: 'none', bottom: 60, right: 20, position: 'fixed' }}*/}
      {/*  variant='contained'*/}
      {/*  color='primary'*/}
      {/*  size='large'*/}
      {/*  endIcon={<AddIcon />}*/}
      {/*  className='fixed-btn'*/}
      {/*  component={Link}*/}
      {/*  to="/login"*/}
      {/*>*/}
      {/*  Add new*/}
      {/*</Button>*/}
    </MainLayout>
  )
}

export default Trainbooks
