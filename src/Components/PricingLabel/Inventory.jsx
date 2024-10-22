import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, ToggleButtonGroup, ToggleButton, TextField, Typography, FormControl, InputLabel } from '@mui/material';
import './Inventory.css'; // Importing the custom CSS for styling

const Inventory =({ onBack })=> {
    const [revenueType, setRevenueType] = useState('Lease');
    const [pricingComponent, setPricingComponent] = useState('Pricing Component');
    const [taxGroup, setTaxGroup] = useState('GST');
    const [pricingBasedOn, setPricingBasedOn] = useState('Monthly');
    
    return (
        <Box className="inventory-container">
            <Typography variant="h6">Inventory Item Component</Typography>

            {/* Revenue Type Toggle Buttons */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <ToggleButtonGroup
                    value={revenueType}
                    exclusive
                    onChange={(e, value) => setRevenueType(value || revenueType)}
                    className="toggle-group"
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
                        className="small-select"
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
                        className="small-select"
                    >
                        <MenuItem value="GST">GST</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Pricing Based On Toggle Buttons */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <ToggleButtonGroup
                    value={pricingBasedOn}
                    exclusive
                    onChange={(e, value) => setPricingBasedOn(value || pricingBasedOn)}
                    className="toggle-group"
                >
                    <ToggleButton value="Monthly">Monthly</ToggleButton>
                    <ToggleButton value="Total">Total</ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Item Unit Price Input */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <TextField label="Item Unit Price" defaultValue="200" className="small-input" />
                <Typography variant="body1" className="currency-symbol">$</Typography>
            </Box>

            {/* Quantity Input */}
            <Box mt={2} display="flex" justifyContent="space-between">
                <TextField label="Quantity" defaultValue="10" className="small-input" />
                <Typography variant="body1" className="qty-label">Qty</Typography>
            </Box>

            {/* Create Pricing Component Button */}
            <Box display="flex" justifyContent="space-between">
          <Button onClick={onBack} variant="outlined">Back</Button>
          <Button variant="contained">Create Pricing Component</Button>
        </Box>
        </Box>
    );
};

export default Inventory;
