import React, { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './TopBar.css';

const TopBar = () => {
  const [select, setSelect] = useState('');

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div className="top-div">
      <div className="top-head">
        <KeyboardArrowLeftIcon className="back-arrow" />
        <h2 className="top-heading">Create Quotation to Existing Lead</h2>
      </div>
      {/* Select Dropdown inside TopBar */}
      <div className="select">
        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small-label">Select</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={select}
            label="Select"
            onChange={handleChange}
            IconComponent={ExpandMoreIcon} 
            sx={{
              borderRadius: '8px',
              backgroundColor: '#F5F7FA',
              borderColor: '#E4E8EE',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E4E8EE', // border color
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E4E8EE', // hover effect with border color
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E4E8EE', // focus state with border color
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default TopBar;
