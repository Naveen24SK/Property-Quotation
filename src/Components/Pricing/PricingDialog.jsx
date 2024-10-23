import React, { useState } from 'react';
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
    Typography,
    Divider,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Primary from '../PricingLabel/Primary';
import Secondary from '../PricingLabel/Secondary';
import OneTimeCharge from '../PricingLabel/OneTime';
import Refundable from '../PricingLabel/Refundable';
import Inventory from '../PricingLabel/Inventory';
import Parking from '../PricingLabel/Parking';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import './pricingDialog.css';

const PricingDialog = ({ open, onClose }) => {
    const [selectedPricing, setSelectedPricing] = useState(null);

    const pricingItems = [
        { id: '01', label: 'Primary', bgColor: '#FEEAEA80', color: '#B3776D', tooltip: 'Base rent or monthly rental amount.' },
        { id: '02', label: 'Secondary', bgColor: '#EDE4FE80', color: '#896DB3', tooltip: 'Additional charges for services.' },
        { id: '03', label: 'One Time Charges', bgColor: '#DBF0F180', color: '#6DAFB3', tooltip: 'One-time setup fees.' },
        { id: '04', label: 'Refundables', bgColor: '#E4EDFF80', color: '#6D80B3', tooltip: 'Deposit or other refundable amounts.' },
        { id: '05', label: 'Inventory Item', bgColor: '#FFFAD880', color: '#B3A16D', tooltip: 'Costs for inventory or assets.' },
        { id: '06', label: 'Parking Slot', bgColor: '#FEEAEA80', color: '#B3776D', tooltip: 'Charges for parking slots.' },
    ];

    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip placement="top" {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: { 
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }));
    

    const handlePricingSelect = (id) => {
        switch (id) {
            case '01':
                setSelectedPricing('primary');
                break;
            case '02':
                setSelectedPricing('secondary');
                break;
            case '03':
                setSelectedPricing('oneTimeCharges');
                break;
            case '04':
                setSelectedPricing('refundables');
                break;
            case '05':
                setSelectedPricing('inventoryItem');
                break;
            case '06':
                setSelectedPricing('parkingSlot');
                break;
            default:
                setSelectedPricing(null);
                break;
        }
    };

    const handleBack = () => {
        setSelectedPricing(null);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <Box width={550}>
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Pricing Table</Typography>
                        <IconButton edge="end" onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <Divider />
                <Box>
                <DialogContent>
                    {selectedPricing === 'primary' ? (
                        <Primary onBack={handleBack} />
                    ) : selectedPricing === 'secondary' ? (
                        <Secondary onBack={handleBack} />
                    ) : selectedPricing === 'oneTimeCharges' ? (
                        <OneTimeCharge onBack={handleBack} />
                    ) : selectedPricing === 'refundables' ? (
                        <Refundable onBack={handleBack} />
                    ) : selectedPricing === 'inventoryItem' ? (
                        <Inventory onBack={handleBack} />
                    ) : selectedPricing === 'parkingSlot' ? (
                        <Parking onBack={handleBack} />
                    ) : (
                        <List>
                            {pricingItems.map((item) => (
                                <ListItem
                                    key={item.id}
                                    className="pricing-item"
                                    style={{ backgroundColor: item.bgColor, height: '70px', padding: '16px' }}
                                    onClick={() => handlePricingSelect(item.id)}
                                >
                                    <ListItemIcon>
                                        <Box className="item-id" style={{ backgroundColor: item.color }}>
                                            {item.id}
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText
                                        className="pricing-name"
                                        primary={item.label}
                                        style={{ color: item.color }}
                                    />       
                                     <LightTooltip title={item.tooltip}>
                                    <IconButton edge="end">
                                        <InfoOutlinedIcon style={{ color: '#CED3DD' }} />
                                    </IconButton>
                                </LightTooltip>
                                <IconButton edge="end">
                                    <ArrowForwardIosIcon style={{ color: item.color }} />
                                </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </DialogContent>
                </Box>
                </Box>
        </Dialog>
    );
};

export default PricingDialog;
