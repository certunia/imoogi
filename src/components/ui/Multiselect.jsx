import React from "react";
// import { createStyles, makeStyles } from '@mui/styles';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import _without from "lodash/without";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const options = [
  "Graphic design",
  "Computer science",
  "Art",
  "Languages",
  "Math",
];

const initialSelected = [

];

const Multiselect = (props) => {
  // const classes = useStyles();
  const [personName, setPersonName] = React.useState(initialSelected);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleDelete = (e, value) => {
    e.preventDefault();
    setPersonName((current) => _without(current, value));
  };

  const id = Math.floor(Math.random() * 100);

  return (
      <FormControl sx={{ minWidth: 120 }} fullWidth>
        <InputLabel
          id="demo"
          sx={{backgroundColor: '#fff', padding: '0 4px'}}
          margin='dense'
          size='small'
        >
          {props.title}
        </InputLabel>
        <Select
          labelId="demo"
          id="demo"
          multiple
          value={personName}
          onChange={handleChange}
          onOpen={() => console.log("select opened")}
          size="small"
          //input={<Input />}
          // MenuProps={MenuProps}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={(selected) => (
            <div>
              {(selected).map((value) => (
                <Chip
                key={value}
                label={value}
                clickable
                variant="outlined"
                deleteIcon={
                <CancelIcon
                  onMouseDown={(event) => event.stopPropagation()}
                />
              }
                onDelete={(e) => handleDelete(e, value)}
                onClick={() => console.log("clicked chip")}
                />
                ))}
            </div>
          )}
        >
          {options.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
};

export default Multiselect;

{/*<div>*/}
{/*  {personName.map((value) => (*/}
{/*    <Chip*/}
{/*      key={value}*/}
{/*      label={value}*/}
{/*      clickable*/}
{/*      onDelete={(e) => handleDelete(e, value)}*/}
{/*      onClick={() => console.log("clicked chip")}*/}
{/*    />*/}
{/*  ))}*/}
{/*</div>*/}
