import React, { useState } from 'react';
import { Box, Dialog, DialogContent, DialogTitle, Button, Divider, IconButton, Select, MenuItem, TextField } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import house from '../../assets/house2.avif';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Editprice.css';

export default function EditPrice({ open, onClose, mode }) {
    const [discountType, setDiscountType] = useState('AED');
    const [discountValue, setDiscountValue] = useState(100);
    const [finalTotal, setFinalTotal] = useState(1200);
    const [pricingComponents, setPricingComponents] = useState([
        { name: 'Bill Name Here', amount: 1000 },
        { name: 'Bill Name Here', amount: 1000 },
        { name: 'Bill Name Here', amount: 1000 },
        { name: 'Amenity Name Here', amount: 1000 },
        { name: 'Amenity Name Here', amount: 1000 },
    ]);

    const handleDiscountChange = (event) => {
        const value = event.target.value;
        setDiscountValue(value);
        if (discountType === 'AED') {
            setFinalTotal(1200 - value);
        } else {
            setFinalTotal(1200 - (1200 * value / 100));
        }
    };

    const handleDiscountTypeChange = (event) => {
        const type = event.target.value;
        setDiscountType(type);
        if (type === 'AED') {
            setFinalTotal(1200 - discountValue);
        } else {
            setFinalTotal(1200 - (1200 * discountValue / 100));
        }
    };

    const handleRemoveComponent = (index) => {
        const updatedComponents = pricingComponents.filter((_, i) => i !== index);
        setPricingComponents(updatedComponents);
        calculateFinalTotal(updatedComponents);
    };

    const calculateFinalTotal = (updatedComponents) => {
        const total = updatedComponents.reduce((sum, item) => sum + item.amount, 0);
        setFinalTotal(total);
    };

    const textFieldStyle = {
        width: '80px',
        '& .MuiOutlinedInput-root': {
            height: '25px',
            backgroundColor: '#FFFFFF',
            borderColor: '#E4E8EE',
            '& fieldset': {
                borderColor: '#E4E8EE',
            },
            '&:hover fieldset': {
                borderColor: '#E4E8EE',
            },
        },
        '& .MuiInputBase-input': {
            color: '#333',
        },
    };

    const selectStyle = {
        backgroundColor: '#FFFFFF',
        color: '#333',
        height: '25px',
        borderColor: '#E4E8EE',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E4E8EE',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#004ba0',
        },
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" scroll="paper">
            <Box>
                <DialogTitle>
                    {mode === 'AddDiscount' ? 'Add Discount to Unit' : 'Remove Component'}
                    <IconButton edge="end" style={{ position: 'absolute', right: 15, top: 8 }} onClick={onClose}>
                        <CloseRoundedIcon />
                    </IconButton>
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <Box>
                    <Box>
                        <div className="dialog-content">
                            {/* Left Side - Image and Unit Info */}
                            <div className="unit-info">
                                <div className="img-contain">
                                    <ImageList variant="quilted" cols={4} rowHeight={80} gap={5}>
                                        {itemData.map((item, index) => (
                                            <ImageListItem
                                                key={item.img}
                                                cols={item.cols || 1}
                                                rows={item.rows || 1}
                                                className={index === 4 ? 'overlay-container' : ''}
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    className="unit-img"
                                                />
                                                {index === 4 && (
                                                    <div className="overlay">
                                                        <div className="overlay-text">+2</div>
                                                    </div>
                                                )}
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </div>
                                <div className="unit-title">
                                    Jumeirah Estate <span className="unit-badge">UNT-1234</span>
                                </div>
                                <div className="unit-subtitle">Rubix Apartment, K Tower, Floor 1</div>
                                <div className="unit-details">
                                    <span>
                                        <HotelOutlinedIcon className='icons' /> 2
                                    </span>
                                    <CircleIcon className='icons' fontSize="inherit" />
                                    <span>
                                        <BathtubOutlinedIcon className='icons' /> 2
                                    </span>
                                    <CircleIcon className='icons' fontSize="inherit" />
                                    <span>
                                        <HomeOutlinedIcon className='icons' /> 2BHK
                                    </span>
                                    <CircleIcon className='icons' fontSize="inherit" />
                                    <span>
                                        <SelectAllIcon className='icons' /> 2000 Sq.Ft
                                    </span>
                                </div>
                                <Divider />
                                <div className="view-link">
                                    <p>
                                        <BookOutlinedIcon />
                                        Handbook
                                    </p>
                                    <Button variant="text" style={{ textTransform: 'none' }}>View/Download</Button>
                                </div>
                            </div>

                            {/* Right Side - Pricing Details */}
                            <div className="unit-price-details">
                                <div className="pricing-title">UNIT PRICE DETAIL</div>

                                <Box style={{ maxHeight: '420px', overflowY: 'auto', scrollbarWidth: 'none'  }}>
                                    {pricingComponents.map((component, index) => (
                                        <div key={index} className={mode === 'AddDiscount' ? 'unit-pricing-item' : 'remove-pricing-item'}>
                                            <div className="bill-details">
                                                <span className="bill-name">{component.name}</span>
                                                <span className="bill-amount">${component.amount}</span>
                                            </div>

                                            {mode === 'AddDiscount' ? (
                                                <div className="discount-section">
                                                    <p>Discount</p>
                                                    <div>
                                                        <TextField
                                                            type="number"
                                                            value={discountValue}
                                                            onChange={handleDiscountChange}
                                                            sx={textFieldStyle}
                                                        />
                                                        <Select
                                                            value={discountType}
                                                            onChange={handleDiscountTypeChange}
                                                            IconComponent={ExpandMoreIcon}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                            sx={selectStyle}
                                                        >
                                                            <MenuItem value="AED">AED</MenuItem>
                                                            <MenuItem value="%">%</MenuItem>
                                                        </Select>
                                                    </div>
                                                </div>
                                            ) : (
                                                <IconButton onClick={() => handleRemoveComponent(index)} className="remove-icon">
                                                    <DeleteIcon />
                                                </IconButton>
                                            )}
                                        </div>
                                    ))}
                                </Box>
                                <div className="pricing-total2">
                                    <span>Final Total:</span>
                                    <span>{finalTotal} AED</span>
                                </div>
                            </div>
                        </div>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        {mode === 'AddDiscount' ? (
                            <Button variant="contained" color="primary" className="apply-discount-button" 
                            sx={{
                                width: "50%",
                            }}>
                                Apply Discount
                            </Button>
                        ) : (
                            <Button variant="contained" color="primary" className="update-save-button"
                            sx={{
                                width: "50%",
                            }}>
                                Update & Save
                            </Button>
                        )}
                    </Box>
                    </Box>
                </DialogContent>
            </Box>
        </Dialog>
    );
}

const itemData = [
    { img: house, title: 'Unit', rows: 2, cols: 2 },
    { img: house, title: 'Unit' },
    { img: house, title: 'Unit' },
    { img: house, title: 'Unit' },
    { img: house, title: 'Unit' },
];
