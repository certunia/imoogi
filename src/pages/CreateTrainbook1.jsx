import MainLayout from '../components/layouts/Main';
import FloatToggle from '../components/ui/FloatToggle';
import Trainbook from '../components/blocks/Trainbook';
import Button from '@mui/material/Button';

import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Trainbooks(props) {
  const menuItems = [
    {to: '/trainbooks', title: 'public'},
    {to: '/trainbooks/saved', title: 'private'},
  ]

  return (
    <MainLayout
      title='Create a new trainbook'
      topRight={
        <Button
          endIcon={<ArrowForwardIosIcon />}
          Continue
          component={Link}
          to="/login"
        >
          Continue
        </Button>
      }
    >
      <div className='trainbooks'>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Trainbook />
          </Grid>
          <Grid item xs={6}>
            <Trainbook />
          </Grid>
        </Grid>
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
