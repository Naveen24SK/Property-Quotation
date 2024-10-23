import React, { useState } from 'react';
import { Box, Button, Select, MenuItem,IconButton, ToggleButtonGroup, ToggleButton, TextField,Typography, FormControl } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Inventory.css';

const Inventory = ({ onBack }) => {
    const [revenueType, setRevenueType] = useState('Lease');
    const [pricingComponent, setPricingComponent] = useState('Pricing Component');
    const [taxGroup, setTaxGroup] = useState('GST');
    const [pricingBasedOn, setPricingBasedOn] = useState('Monthly');

    const handleRevenueTypeChange = (event, newValue) => {
        if (newValue !== null) setRevenueType(newValue);
    };

    const handlePricingComponentChange = (event) => {
        setPricingComponent(event.target.value);
    };

    const handleTaxGroupChange = (event) => {
        setTaxGroup(event.target.value);
    };

    const handlePricingBasedOnChange = (event, newValue) => {
        if (newValue !== null) setPricingBasedOn(newValue);
    };

    return (
        <Box
            className="primary-container"
            sx={{
                padding: '2px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#FFFAD880',
                    color: '#B3776D',
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
        <Typography className="title1" ml={2} color='#B3A16D'>Secondary Components</Typography>
        <IconButton edge="end">
             <InfoOutlinedIcon style={{ color: '#CED3DD',marginRight:'105%' }} />
        </IconButton>            </Box>

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
                        <ToggleButton value="Stay">Stay</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                <Box>
                    <p className="title1">Pricing Component</p>
                    <FormControl fullWidth>
                        <Select
                            IconComponent={ExpandMoreIcon}
                            value={pricingComponent}
                            onChange={handlePricingComponentChange}
                            sx={{ height: '40px', minWidth: '210px' }}
                        >
                            <MenuItem value="Pricing Component">Pricing Component</MenuItem>
                            <MenuItem value="Option 1">Option 1</MenuItem>
                            <MenuItem value="Option 2">Option 2</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

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
                </Box>

                <Box>
                    <p className="title1">Pricing Based On</p>
                    <ToggleButtonGroup
                        value={pricingBasedOn}
                        exclusive
                        onChange={handlePricingBasedOnChange}
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
                        <ToggleButton value="Monthly">Monthly</ToggleButton>
                        <ToggleButton value="Total">Total</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" gap={2}>
                <Box>
                    <p className="title1">Item Unit Price</p>
                    <TextField
                        type="number"
                        value="200"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'solid #E4E8EE 2px',
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
                            input: {
                                endAdornment: (
                                    <div style={{ color: '#98A0AC', fontSize: '14px', width: '20%', textAlign: 'end' }}>
                                        $
                                    </div>
                                ),
                            },
                        }}
                    />
                </Box>

                <Box>
                    <p className="title1">Quantity</p>
                    <TextField
                        type="number"
                        value="10"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'solid #E4E8EE 2px',
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
                            input: {
                                endAdornment: (
                                    <div style={{ color: '#98A0AC', fontSize: '14px', width: '20%', textAlign: 'end' }}>
                                        Qty
                                    </div>
                                ),
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box display="flex" justifyContent="space-between">
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

export default Inventory;
