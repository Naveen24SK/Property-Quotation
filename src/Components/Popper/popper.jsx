import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PricingDialog from '../Pricing/PricingDialog'; 
import AmenitiesDialog from '../Add Amenities/Amenities';
import UtilityDialog from '../Add Utility/Utility';
import EditPrice from '../Edit Unit Price/EditPrice';

const CustomPopper = ({ open, anchorEl, onModeChange }) => {
    const [pricingDialogOpen, setPricingDialogOpen] = useState(false);
    const [amenitiesDialogOpen, setAmenitiesDialogOpen] = useState(false); 
    const [utilityDialogOpen, setUtilityDialogOpen] = useState(false);
    const [editPriceDialogOpen, setEditPriceDialogOpen] = useState(false);
    const [editMode, setEditMode] = useState(''); // State to hold mode

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

    // Handle Utility Dialog
    const handleUtilityClick = () => {
        setUtilityDialogOpen(true);
    };
    
    const handleUtilityDialogClose = () => {
        setUtilityDialogOpen(false);
    };

        // Handle EditPrice Dialog for Discount or Remove
    const handleEditPriceClick = (mode) => {
        setEditMode(mode); // Set the mode (AddDiscount or RemoveComponent)
        setEditPriceDialogOpen(true); // Open EditPrice dialog
    };
    
    const handleEditPriceDialogClose = () => {
        setEditPriceDialogOpen(false); // Close EditPrice dialog
    };

    // Mode Change Handler
    const handleModeChange = (mode) => {
        onModeChange(mode); // Notify parent to switch mode
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
                        <ListItem button onClick={handleAmenitiesClick}>
                            <ListItemText 
                                primary="Add Amenities" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button onClick={handleUtilityClick}>
                            <ListItemText 
                                primary="Add Utilities" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button onClick={() => handleEditPriceClick('AddDiscount')}>
                            <ListItemText 
                                primary="Add Discount" 
                                primaryTypographyProps={{ fontSize: '12px', color: '#4E5A6B' }} 
                            />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem button onClick={() => handleEditPriceClick('RemoveComponent')}>
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

            {/* Utility Dialog */}
            <UtilityDialog open={utilityDialogOpen} handleClose={handleUtilityDialogClose} />

            {/* EditPrice Dialog */}
            <EditPrice open={editPriceDialogOpen} onClose={handleEditPriceDialogClose} mode={editMode} />
        </>
    );
};

export default CustomPopper;
