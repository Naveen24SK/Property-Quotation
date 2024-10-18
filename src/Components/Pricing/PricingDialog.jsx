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
    Tooltip,
    Typography
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './pricingDialog.css';

const PricingDialog = ({ open, onClose }) => {
    const pricingItems = [
        { id: '01', label: 'Primary', bgColor: '#FEEAEA80', color: '#B3776D', tooltip: 'Base rent or monthly rental amount.' },
        { id: '02', label: 'Secondary', bgColor: '#EDE4FE80', color: '#896DB3', tooltip: 'Additional charges for services.' },
        { id: '03', label: 'One Time Charges', bgColor: '#DBF0F180', color: '#6DAFB3', tooltip: 'One-time setup or initiation fees.' },
        { id: '04', label: 'Refundables', bgColor: '#E4EDFF80', color: '#6D80B3', tooltip: 'Deposit or other refundable amounts.' },
        { id: '05', label: 'Inventory Item', bgColor: '#FFFAD880', color: '#B3A16D', tooltip: 'Costs for inventory or assets.' },
        { id: '06', label: 'Parking Slot', bgColor: '#FEEAEA80', color: '#B3776D', tooltip: 'Charges for parking slots.' }
    ];

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>
                <Typography variant="h6">Pricing Table</Typography>
                <IconButton
                    edge="end"
                    style={{ position: 'absolute', right: 15, top: 8 }}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <List>
                    {pricingItems.map((item) => (
                        <ListItem key={item.id} className="pricing-item" style={{ backgroundColor: item.bgColor, height: '80px', padding: '16px' }}>
                            <ListItemIcon>
                                <Box className="item-id" style={{ backgroundColor: item.color }}>
                                    {item.id}
                                </Box>
                            </ListItemIcon>
                            <ListItemText className='pricing-name' primary={item.label} style={{ color: item.color }} />
                            <Tooltip title={item.tooltip} arrow>
                                <IconButton edge="end">
                                    <InfoOutlinedIcon style={{ color: item.color }} />
                                </IconButton>
                            </Tooltip>
                            <IconButton edge="end">
                                <ArrowForwardIosIcon style={{ color: item.color }} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
};

export default PricingDialog;
