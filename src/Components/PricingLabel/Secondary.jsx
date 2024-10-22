import React, { useState } from 'react';
import {
  Box,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  InputLabel,
  FormControl,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';

import './secondary.css';

const Secondary = ({ onBack }) => {
  const [revenueType, setRevenueType] = useState('Lease');
  const [taxGroup, setTaxGroup] = useState('GST');
  const [chargeable, setChargeable] = useState('Yes');
  const [componentBasedOn, setComponentBasedOn] = useState('Amount');
  const [uomValue, setUomValue] = useState(200);

  const handleRevenueTypeChange = (event, newRevenueType) => {
    setRevenueType(newRevenueType);
  };

  const handleTaxGroupChange = (event) => {
    setTaxGroup(event.target.value);
  };

  const handleChargeableChange = (event, newChargeable) => {
    setChargeable(newChargeable);
  };

  const handleComponentBasedOnChange = (event, newComponentBasedOn) => {
    setComponentBasedOn(newComponentBasedOn);
  };

  const handleUOMValueChange = (event) => {
    setUomValue(event.target.value);
  };

  return (
    <Box className="secondary-container">
      <Typography variant="h6" className="title">Secondary Components</Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <ToggleButtonGroup
          value={revenueType}
          exclusive
          onChange={handleRevenueTypeChange}
          fullWidth
        >
          <ToggleButton value="Lease">Lease</ToggleButton>
          <ToggleButton value="Sales">Sales</ToggleButton>
          <ToggleButton value="Manage">Manage</ToggleButton>
          <ToggleButton value="Stay">Stay</ToggleButton>
        </ToggleButtonGroup>

        <FormControl fullWidth>
          <InputLabel>Pricing Component</InputLabel>
          <Select value="Pricing Component">
            <MenuItem value="Pricing Component">Pricing Component</MenuItem>
            {/* Add other options if necessary */}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Tax Group For Pricing Component</InputLabel>
          <Select value={taxGroup} onChange={handleTaxGroupChange}>
            <MenuItem value="GST">GST</MenuItem>
            <MenuItem value="VAT">VAT</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        <ToggleButtonGroup
          value={chargeable}
          exclusive
          onChange={handleChargeableChange}
          fullWidth
        >
          <ToggleButton value="Yes">Yes</ToggleButton>
          <ToggleButton value="No">No</ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          value={componentBasedOn}
          exclusive
          onChange={handleComponentBasedOnChange}
          fullWidth
        >
          <ToggleButton value="Amount">Amount</ToggleButton>
          <ToggleButton value="UOM">UOM</ToggleButton>
          <ToggleButton value="%">%</ToggleButton>
        </ToggleButtonGroup>

        <TextField
          label="UOM Value"
          type="number"
          value={uomValue}
          onChange={handleUOMValueChange}
          InputProps={{
            endAdornment: <Typography>$ / Monthly</Typography>,
          }}
          fullWidth
        />

        <Box display="flex" justifyContent="space-between">
          <Button onClick={onBack} variant="outlined">Back</Button>
          <Button variant="contained">Create Pricing Component</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Secondary;
