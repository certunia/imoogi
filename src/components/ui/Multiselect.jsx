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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

const initialSelected = ["April Tucker", "Ralph Hubbard"];

const Multiselect = () => {
  // const classes = useStyles();
  const [personName, setPersonName] = React.useState(initialSelected);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleDelete = (e, value) => {
    e.preventDefault();
    console.log("clicked delete");
    setPersonName((current) => _without(current, value));
  };

  return (
    <div>
      <div>
        <FormControl>
          <InputLabel id="demo-mutiple-chip-checkbox-label">
            Chip + Check
          </InputLabel>
          <Select
            labelId="demo-mutiple-chip-checkbox-label"
            id="demo-mutiple-chip-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            onOpen={() => console.log("select opened")}
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
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
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
    </div>
  );
};

export default Multiselect;
