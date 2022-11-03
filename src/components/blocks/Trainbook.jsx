import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Rating from '@mui/material/Rating';

import { green, pink } from '@mui/material/colors';

import Edit from "@mui/icons-material/Edit";
import CalculateIcon from '@mui/icons-material/Calculate';
import PublicIcon from '@mui/icons-material/Public';

import { Link } from 'react-router-dom';

const Trainbook = (props) => {
  // const [personName, setPersonName] = React.useState(initialSelected);
  return (
    <Card sx={{ boxShadow: 'none', border: '1px solid #000', borderRadius: '20px' }}>
      <Link to='/'>
        <Box sx={{ p: 2, display: 'flex' }}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 90, height: 90, bgcolor: pink[500] }} variant="rounded">
              <CalculateIcon sx={{ width: 85, height: 85 }}/>
            </Avatar>

            <Stack spacing={0.5}>
              <Typography fontWeight={700}>Some really really long title about something</Typography>
              <Typography variant="body2" color="text.secondary">
                It’s just some description here. It’s just some description here. It’s a short description here...
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
              >
                <Typography variant="body2" color="text.secondary">
                  Questions: 80
                </Typography>

                <PublicIcon />
              </Stack>
            </Stack>
            {/*<IconButton>*/}
            {/*  <Edit sx={{ fontSize: 14 }} />*/}
            {/*</IconButton>*/}
          </Stack>
        </Box>
      </Link>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
      >
        <Rating name="customized-10" defaultValue={2.3} max={3} precision={0.1}/>

        some > category > path
      </Stack>
    </Card>
  );
};

export default Trainbook;
