import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, ToggleButtonGroup, ToggleButton, TextField, Typography, FormControl, InputLabel } from '@mui/material';

const OneTime =({ onBack }) => {
    const [revenueType, setRevenueType] = useState('Lease');
    const [pricingComponent, setPricingComponent] = useState('Pricing Component');
    const [taxGroup, setTaxGroup] = useState('GST');
    const [componentBase, setComponentBase] = useState('Amount');
    const [chargeable, setChargeable] = useState('Yes');

    return (
        <Box p={2}>
            <Typography variant="h6">One Time Charges</Typography>

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

            {/* Chargeable Toggle */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <ToggleButtonGroup
                    value={chargeable}
                    exclusive
                    onChange={(e, value) => setChargeable(value || chargeable)}
                    fullWidth
                >
                    <ToggleButton value="Yes">Yes</ToggleButton>
                    <ToggleButton value="No">No</ToggleButton>
                </ToggleButtonGroup>
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
                    <ToggleButton value="UOM">UOM</ToggleButton>
                    <ToggleButton value="%">%</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* UOM Value Input */}
            <Box mt={2}>
                <TextField fullWidth label="UOM Value" defaultValue="200" />
            </Box>

            {/* Create Pricing Component Button */}
            <Box display="flex" justifyContent="space-between">
          <Button onClick={onBack} variant="outlined">Back</Button>
          <Button variant="contained">Create Pricing Component</Button>
        </Box>
        </Box>
    );
};

export default OneTime;
