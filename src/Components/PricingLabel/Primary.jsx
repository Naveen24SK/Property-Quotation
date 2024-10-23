import React, { useState } from 'react';
import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  LinearProgress,
  FormControl,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Primary.css';

const Primary = ({ onBack }) => {
  const [revenueType, setRevenueType] = useState('Lease');
  const [componentBasedOn, setComponentBasedOn] = useState('Amount');
  const [taxGroup, setTaxGroup] = useState('GST');
  const [uomValue, setUomValue] = useState(200);
  const [priceValue, setPriceValue] = useState(120);

  const handleRevenueTypeChange = (event, newValue) => {
    if (newValue !== null) setRevenueType(newValue);
  };

  const handleComponentBasedOnChange = (event, newValue) => {
    if (newValue !== null) setComponentBasedOn(newValue);
  };

  const handleTaxGroupChange = (event) => {
    setTaxGroup(event.target.value);
  };

  const handleUOMValueChange = (event) => {
    setUomValue(event.target.value);
  };

  const handlePriceValueChange = (event) => {
    setPriceValue(event.target.value);
  };

  return (
    <Box
      className="primary-container"
      sx={{
        padding: '5px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#FEEAEA80',
          color: '#B3776D',
          borderRadius: '6px',
          fontSize: '16px',
          alignSelf: 'flex-start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '55px',
          width: '100%'
        }}
      >
        <Typography className="title1" ml={2} color='#B3776D'>Primary Components</Typography>
        <IconButton edge="end">
             <InfoOutlinedIcon style={{ color: '#CED3DD',marginRight:'105%' }} />
        </IconButton>
          </Box>

      <Box display="flex" flexDirection="row" gap={2}>
      <Box>
      <p className="title1">Revenue Type</p>
      <ToggleButtonGroup
        value={revenueType}
        exclusive
        onChange={handleRevenueTypeChange}
        sx={{
          display: 'flex',
          gap: 1,
          '& .MuiToggleButton-root': {
            height: '40px',
            width: '70px',
            border: '2px solid #E4E8EE', 
            backgroundColor: '#fff',
            borderRadius: '4px',
            textTransform: 'none',
            fontSize: '14px', 
            color: '#4E5A6B', 
          },
          '& .Mui-selected': {
            backgroundColor: '#1976d2',
            color: '#fff',
          },
        }}
      >
        <ToggleButton value="Lease">Lease</ToggleButton>
        <ToggleButton value="Sales">Sales</ToggleButton>
        <ToggleButton value="Manage">Manage</ToggleButton>
      </ToggleButtonGroup>
      </Box>

      <Box>
      <p className="title1" >Pricing Component</p>
      <FormControl fullWidth>
        <Select
          IconComponent={ExpandMoreIcon} 
          value={taxGroup}
          onChange={handleTaxGroupChange}
          sx={{ height: '40px', minWidth: '210px' }}
        >
          <MenuItem value="GST">Pricing Component</MenuItem>
          <MenuItem value="VAT">Option 1</MenuItem>
          <MenuItem value="Other">Option 2</MenuItem>
        </Select>
      </FormControl>
      </Box>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" gap={2}>
      <Box>
      <p className="title1">Tax Group For Pricing Component</p>
        <FormControl fullWidth>
          <Select
            value={taxGroup}
            IconComponent={ExpandMoreIcon} 
            onChange={handleTaxGroupChange}
            sx={{ height: '40px', minWidth: '250px' }}
          >
            <MenuItem value="GST">GST</MenuItem>
            <MenuItem value="VAT">VAT</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        </Box>

        <Box>
        <p className="title1">Component Based On</p>
        <ToggleButtonGroup
          value={componentBasedOn}
          exclusive
          onChange={handleComponentBasedOnChange}
          sx={{
            display: 'flex',
            gap: 1,
            '& .MuiToggleButton-root': {
              height: '40px',
              width: '100px',
              border: '2px solid #E4E8EE',
              backgroundColor: '#fff',
              borderRadius: '4px',
              textTransform: 'none', 
              fontSize: '14px',
              color: '#4E5A6B',
            },
            '& .Mui-selected': {
              backgroundColor: '#1976d2',
              color: '#fff',
            },
          }}
        >
          <ToggleButton value="Amount">Amount</ToggleButton>
          <ToggleButton value="UOM">UOM</ToggleButton>
        </ToggleButtonGroup>
        </Box>
      </Box>

      <Box>
      <p className="title1">UOM Value</p>
      <TextField
        type="number"
        value={uomValue}
        // onChange={handleUOMValueChange}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-notchedOutline':{
              border:'solid #E4E8EE 2px'
          },
           "& input[type=number]": {
              MozAppearance: 'textfield',
              appearance: 'textfield',
            },
            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: 'none',
              margin: 0,
            },
      }}
      slotProps={{
          input:{
              endAdornment:(<div style={{color:'#98A0AC',fontSize:'14px',width:'20%',textAlign:'end'}}>SAR / Total</div>),
          }
      }}
      />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between" gap={2}>
        <Box>
          <p className="title1">Maximum</p>
          <LinearProgress
            variant="determinate"
            value={95}
            sx={{
              height: '7px',
              width: '150px',
              borderRadius: '4px',
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#FF4B4B', 
              },
            }}
          />
          <TextField value="$190" sx={{height: '30px', width: '150px', marginTop: '5px',marginBottom:'12%' }} />
          <p className="title1">sq.Yard/Monthly</p>
        </Box>

        <Box>
          <p className="title1">Recommended</p>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              height: '7px',
              width: '150px',
              borderRadius: '4px',
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#5AC782', 
              },
            }}
          />
          <TextField value={`$${priceValue}`} sx={{height: '30px', width: '150px', marginTop: '5px',marginBottom:'12%' }} />
          <p className="title1">sq.Yard/Monthly</p>
        </Box>

        <Box>
          <p className="title1">Minimum</p>
          <LinearProgress
            variant="determinate"
            value={40}
            sx={{
              height: '7px',
              width: '150px',
              borderRadius: '4px',
              backgroundColor: '#e0e0e0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#FF9340', 
              },
            }}
          />
          <TextField value="$100" sx={{height: '30px', width: '150px',marginTop: '5px',marginBottom:'12%'}} />
          <p className="title1">sq.Yard/Monthly</p>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" >
        <Button onClick={onBack} variant="outlined" style={{
          color: 'black',
          fontSize: '14px',
          textTransform:'none',
          borderColor: '#E4E8EE',
          borderRadius:'8px',
          padding:'8px',
        }}>Back</Button>
        <Button variant="contained" 
        style={{
          color: 'white',
          backgroundColor:'#5078E1',
          fontSize: '14px',
          textTransform:'none',
          borderColor: '#E4E8EE',
          borderRadius:'8px',
          padding:'8px',
        }}>Create Pricing Component</Button>
      </Box>
    </Box>
  );
};

export default Primary;
