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
  LinearProgress,
  InputLabel,
  FormControl,
  Typography
} from '@mui/material';

import './Primary.css';

const Primary = ({ onBack }) => {
  const [taxGroup, setTaxGroup] = useState('GST');
  const [componentBasedOn, setComponentBasedOn] = useState('Amount');
  const [uomValue, setUomValue] = useState(200);

  const handleTaxGroupChange = (event) => {
    setTaxGroup(event.target.value);
  };

  const handleComponentBasedOnChange = (event) => {
    setComponentBasedOn(event.target.value);
  };

  const handleUOMValueChange = (event) => {
    setUomValue(event.target.value);
  };

  return (
    <Box className="primary-container">
      <Typography variant="h6" className="title">Primary Pricing Component</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <FormControl fullWidth>
          <InputLabel>Revenue Type</InputLabel>
          <Select value="Lease">
            <MenuItem value="Lease">Lease</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Manage">Manage</MenuItem>
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

        <FormControl component="fieldset">
          <Typography>Component Based On</Typography>
          <RadioGroup value={componentBasedOn} onChange={handleComponentBasedOnChange} row>
            <FormControlLabel value="Amount" control={<Radio />} label="Amount" />
            <FormControlLabel value="UOM" control={<Radio />} label="UOM" />
          </RadioGroup>
        </FormControl>

        <TextField
          label="UOM Value"
          type="number"
          value={uomValue}
          onChange={handleUOMValueChange}
          InputProps={{
            endAdornment: <Typography>SAR / Total</Typography>,
          }}
          fullWidth
        />

        <Box className="progress-container">
          <Typography>Maximum</Typography>
          <LinearProgress variant="determinate" value={95} />
          <Typography>$190 Sq. Yard/Monthly</Typography>

          <Typography>Recommended</Typography>
          <LinearProgress variant="determinate" value={60} />
          <Typography>$120 Sq. Yard/Monthly</Typography>

          <Typography>Minimum</Typography>
          <LinearProgress variant="determinate" value={50} />
          <Typography>$100 Sq. Yard/Monthly</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Button onClick={onBack} variant="outlined">Back</Button>
          <Button variant="contained">Create Pricing Component</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Primary;
