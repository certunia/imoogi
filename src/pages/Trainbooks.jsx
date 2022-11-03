import MainLayout from '../components/layouts/Main';
import FloatToggle from '../components/ui/FloatToggle';
import Trainbook from '../components/blocks/Trainbook';
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";

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
    </MainLayout>
  )
}

export default Trainbooks
