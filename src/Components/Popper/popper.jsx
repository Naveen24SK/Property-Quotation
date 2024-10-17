import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PricingDialog from '../Pricing/pricingDialog'; 

const CustomPopper = ({ open, anchorEl }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handlePricingClick = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <Popper open={open} anchorEl={anchorEl} placement="right">
                <Paper elevation={1} style={{ padding: '1px' }}>
                    <List>
                        <ListItem button onClick={handlePricingClick}>
                            <ListItemText primary="Add pricing component" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Add utilities" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Add Discount" />
                        </ListItem>
                    </List>
                </Paper>
            </Popper>
            {/* Pricing Dialog */}
            <PricingDialog open={dialogOpen} onClose={handleDialogClose} />
        </>
    );
};

export default CustomPopper;
