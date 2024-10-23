import React, { useState } from 'react';
import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './secondary.css';

const Secondary = ({ onBack }) => {
  const [revenueType, setRevenueType] = useState('Lease');
  const [taxGroup, setTaxGroup] = useState('GST');
  const [chargeable, setChargeable] = useState('Yes');
  const [componentBasedOn, setComponentBasedOn] = useState('Amount');
  const [uomValue, setUomValue] = useState(200);

  const handleRevenueTypeChange = (event, newRevenueType) => {
    if (newRevenueType !== null) setRevenueType(newRevenueType);
  };

  const handleTaxGroupChange = (event) => {
    setTaxGroup(event.target.value);
  };

  const handleChargeableChange = (event, newChargeable) => {
    if (newChargeable !== null) setChargeable(newChargeable);
  };

  const handleComponentBasedOnChange = (event, newComponentBasedOn) => {
    if (newComponentBasedOn !== null) setComponentBasedOn(newComponentBasedOn);
  };

  const handleUOMValueChange = (event) => {
    setUomValue(event.target.value);
  };

  return (
    <Box
      className="secondary-container"
      sx={{
        padding: '10px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#EDE4FE80',
          color: '#6DAFB3',
          borderRadius: '6px',
          fontSize: '16px',
          alignSelf: 'flex-start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '55px',
          width: '100%',
        }}
      >
        <Typography className="title1" ml={2} color='#896DB3'>Secondary Components</Typography>
        <IconButton edge="end">
             <InfoOutlinedIcon style={{ color: '#CED3DD',marginRight:'105%' }} />
        </IconButton>
      </Box>

        <Box>
          <Typography className="title1">Revenue Type</Typography>
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
            <ToggleButton value="Stay">Stay</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent='space-between'>
        <Box>
          <Typography className="title1">Pricing Component</Typography>
          <FormControl fullWidth>
            <Select
              value={taxGroup}
              IconComponent={ExpandMoreIcon} 
              onChange={handleTaxGroupChange}
              sx={{ height: '40px', minWidth: '210px' }}
            >
              <MenuItem value="GST">Pricing Component</MenuItem>
              <MenuItem value="VAT">Option 1</MenuItem>
              <MenuItem value="Other">Option 2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography className="title1">Tax Group For Pricing Component</Typography>
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
        </Box>


        <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Box>
          <Typography className="title1">Chargeable</Typography>
          <ToggleButtonGroup
            value={chargeable}
            exclusive
            onChange={handleChargeableChange}
            sx={{
              display: 'flex',
              gap: 1,
              '& .MuiToggleButton-root': {
                height: '40px',
                width: '50px',
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
            <ToggleButton value="Yes">Yes</ToggleButton>
            <ToggleButton value="No">No</ToggleButton>
          </ToggleButtonGroup>
        </Box>

      <Box>
        <Typography className="title1">Component Based On</Typography>
        <ToggleButtonGroup
          value={componentBasedOn}
          exclusive
          onChange={handleComponentBasedOnChange}
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
          <ToggleButton value="Amount">Amount</ToggleButton>
          <ToggleButton value="UOM">UOM</ToggleButton>
          <ToggleButton value="%">%</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      </Box>


      <Box>
        <Typography className="title1">UOM Value</Typography>
        <TextField
          type="number"
          value={uomValue}
          onChange={handleUOMValueChange}
          fullWidth
          sx={{ height: '40px', minWidth: '300px' }}
          slotProps={{
            input:{
                endAdornment:(<div style={{color:'#98A0AC',fontSize:'14px',width:'20%',textAlign:'end'}}>$ / Monthly</div>),
            }
        }}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button onClick={onBack} variant="outlined"
        style={{
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

export default Secondary;
