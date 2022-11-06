import MainLayout from '../components/layouts/Main';
import Richtext from '../components/ui/Richtext/Richtext';
import Trainbook from '../components/blocks/Trainbook';
import Button from '@mui/material/Button';

import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import FormControl from "@mui/material/FormControl";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Trainbooks(props) {
  return (
    <MainLayout title='Some title'>
      <div className='trainbooks'>
        <Stack>
          <Richtext />
        </Stack>
      </div>

      <Button
        sx={{ borderRadius: 50, height: 49, width: 234, fontSize: 18, textTransform: 'none', bottom: 60, right: 20, position: 'fixed' }}
        variant='contained'
        color='primary'
        size='large'
        endIcon={<AddIcon />}
        className='fixed-btn'
        component={Link}
        to="/login"
      >
        Add new
      </Button>
    </MainLayout>
  )
}

export default Trainbooks;
