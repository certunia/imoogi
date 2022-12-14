import MainLayout from '../components/layouts/Main';
import FloatToggle from '../components/ui/FloatToggle';
import Trainbook from '../components/blocks/Trainbook';
import Button from '@mui/material/Button';

import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import FormControl from "@mui/material/FormControl";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Trainbooks(props) {
  const menuItems = [
    {to: '/trainbooks', title: 'all'},
    {to: '/trainbooks/saved', title: 'saved'},
    {to: '/trainbooks/my', title: 'my'},
  ]

  return (
    <MainLayout
      title='Trainbooks'
      topRight={<FloatToggle items={menuItems}/>}
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

      <Button
        sx={{ borderRadius: 50, height: 49, width: 234, fontSize: 18, textTransform: 'none', bottom: 60, right: 20, position: 'fixed' }}
        variant='contained'
        color='primary'
        size='large'
        endIcon={<AddIcon />}
        className='fixed-btn'
        component={Link}
        to="/trainbooks/create/info"
      >
        Add new
      </Button>
    </MainLayout>
  )
}

export default Trainbooks
