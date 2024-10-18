import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PricingDialog from '../Pricing/PricingDialog'; 
import AmenitiesDialog from '../Add Amenities/Amenities';  // Import AmenitiesDialog

const CustomPopper = ({ open, anchorEl }) => {
    const [pricingDialogOpen, setPricingDialogOpen] = useState(false);
    const [amenitiesDialogOpen, setAmenitiesDialogOpen] = useState(false);  // Add state for Amenities dialog

    // Handle Pricing Dialog
    const handlePricingClick = () => {
        setPricingDialogOpen(true);
    };

    const handlePricingDialogClose = () => {
        setPricingDialogOpen(false);
    };

    // Handle Amenities Dialog
    const handleAmenitiesClick = () => {
        setAmenitiesDialogOpen(true);
    };

    const handleAmenitiesDialogClose = () => {
        setAmenitiesDialogOpen(false);
    };

    return (
        <>
            <Popper open={open} anchorEl={anchorEl} placement="right">
                <Paper elevation={1} style={{ padding: '0px' }}>
                    <List>
                        <ListItem button onClick={handlePricingClick}>
                            <ListItemText 
                                primary="Add pricing component" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                        <Divider variant="middle" />
                        {/* Add Amenities Click Handler */}
                        <ListItem button onClick={handleAmenitiesClick}>
                            <ListItemText 
                                primary="Add Amenities" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button>
                            <ListItemText 
                                primary="Add Utilities" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button>
                            <ListItemText 
                                primary="Add Discount" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button>
                            <ListItemText 
                                primary="Remove Component" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Popper>

            {/* Pricing Dialog */}
            <PricingDialog open={pricingDialogOpen} onClose={handlePricingDialogClose} />

            {/* Amenities Dialog */}
            <AmenitiesDialog open={amenitiesDialogOpen} handleClose={handleAmenitiesDialogClose} />
        </>
    );
};

export default CustomPopper;
