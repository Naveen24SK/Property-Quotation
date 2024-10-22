import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, ToggleButtonGroup, ToggleButton, TextField, Typography, FormControl, InputLabel } from '@mui/material';

const Refundable = ({ onBack }) => {
    const [revenueType, setRevenueType] = useState('Lease');
    const [pricingComponent, setPricingComponent] = useState('Pricing Component');
    const [taxGroup, setTaxGroup] = useState('GST');
    const [componentBase, setComponentBase] = useState('Amount');

    return (
        <Box p={2}>
            <Typography variant="h6">Refundable Price Component</Typography>

            {/* Revenue Type Toggle Buttons */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <ToggleButtonGroup
                    value={revenueType}
                    exclusive
                    onChange={(e, value) => setRevenueType(value || revenueType)}
                    fullWidth
                >
                    <ToggleButton value="Lease">Lease</ToggleButton>
                    <ToggleButton value="Sales">Sales</ToggleButton>
                    <ToggleButton value="Manage">Manage</ToggleButton>
                    <ToggleButton value="Stay">Stay</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Pricing Component Select */}
            <Box mt={2}>
                <FormControl fullWidth>
                    <InputLabel>Pricing Component</InputLabel>
                    <Select
                        value={pricingComponent}
                        onChange={(e) => setPricingComponent(e.target.value)}
                    >
                        <MenuItem value="Pricing Component">Pricing Component</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Tax Group Select */}
            <Box mt={2}>
                <FormControl fullWidth>
                    <InputLabel>Tax Group For Pricing Component</InputLabel>
                    <Select
                        value={taxGroup}
                        onChange={(e) => setTaxGroup(e.target.value)}
                    >
                        <MenuItem value="GST">GST</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Component Based On */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <ToggleButtonGroup
                    value={componentBase}
                    exclusive
                    onChange={(e, value) => setComponentBase(value || componentBase)}
                    fullWidth
                >
                    <ToggleButton value="Amount">Amount</ToggleButton>
                    <ToggleButton value="Rental Value">Rental Value</ToggleButton>
                    <ToggleButton value="%">%</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Fixed Amount Value Input */}
            <Box mt={2}>
                <TextField fullWidth label="Fixed Amount Value" defaultValue="200" />
            </Box>

            {/* Create New Pricing Table Button */}
            <Box display="flex" justifyContent="space-between">
          <Button onClick={onBack} variant="outlined">Back</Button>
          <Button variant="contained">Create Pricing Component</Button>
        </Box>
        </Box>
    );
};

export default Refundable;
