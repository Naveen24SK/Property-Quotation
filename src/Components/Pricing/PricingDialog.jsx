import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    IconButton,
    Typography
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import './pricingDialog.css';

const PricingDialog = ({ open, onClose }) => {
    const pricingItems = [
        { id: '01', label: 'Primary', bgColor: '#ffe6e6' },
        { id: '02', label: 'Secondary', bgColor: '#e6e6ff' },
        { id: '03', label: 'One Time Charges', bgColor: '#e6fff2' },
        { id: '04', label: 'Refundables', bgColor: '#e6f5ff' },
        { id: '05', label: 'Inventory Item', bgColor: '#ffffe6' },
        { id: '06', label: 'Parking Slot', bgColor: '#fff0e6' }
    ];

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>
                <Typography variant="h6">Pricing Table</Typography>
            </DialogTitle>
            <DialogContent>
                <List>
                    {pricingItems.map((item) => (
                        <ListItem key={item.id} className="pricing-item" style={{ backgroundColor: item.bgColor }}>
                            <ListItemIcon>
                                <Box className="item-id">{item.id}</Box>
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                            <IconButton edge="end">
                                <InfoIcon />
                            </IconButton>
                            <IconButton edge="end">
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
};

export default PricingDialog;
