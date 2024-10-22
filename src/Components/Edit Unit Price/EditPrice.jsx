import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Button, Divider, IconButton, Select, MenuItem, TextField } from '@mui/material';
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

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

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
        width: '100px',
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
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>
                Unit Details
                <IconButton edge="end" style={{ position: 'absolute', right: 15, top: 8 }} onClick={onClose}>
                    <CloseRoundedIcon />
                </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent sx={{ height: 1000 }}>
                <div className="dialog-content">
                    {/* Left Side - Image and Unit Info */}
                    <div className="unit-info">
                        <div className="img-contain">
                            <ImageList variant="quilted" cols={4} rowHeight={80} gap={10}>
                                {itemData.map((item, index) => (
                                    <ImageListItem
                                        key={item.img}
                                        cols={item.cols || 1}
                                        rows={item.rows || 1}
                                        className={index === 4 ? 'overlay-container' : ''}
                                    >
                                        <img
                                            {...srcset(item.img, item.rows, item.cols)}
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
                                <HotelOutlinedIcon />2
                            </span>
                            <CircleIcon fontSize="inherit" />
                            <span>
                                <BathtubOutlinedIcon />2
                            </span>
                            <CircleIcon fontSize="inherit" />
                            <span>
                                <HomeOutlinedIcon />2BHK
                            </span>
                            <CircleIcon fontSize="inherit" />
                            <span>
                                <SelectAllIcon />2000 Sq.Ft
                            </span>
                        </div>
                        <Divider />
                        <div className="view-link">
                            <p>
                                <BookOutlinedIcon />
                                Handbook
                            </p>
                            <Button variant="text" style={{textTransform:'none'}}>View/Download</Button>
                        </div>
                    </div>

                    {/* Right Side - Pricing Details */}
                    <div className="unit-pricing-details">
                        <div className="pricing-title">UNIT PRICE DETAIL</div>

                        {mode === 'AddDiscount' ? (
                            <>
                                {pricingComponents.map((component, index) => (
                                    <div key={index} className="unit-pricing-item">
                                        <div className="bill-details">
                                            <span className="bill-name">{component.name}</span>
                                            <span className="bill-amount">${component.amount}</span>
                                        </div>
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
                                    </div>
                                ))}

                                <div className="pricing-total">
                                    <strong>Final Total: {finalTotal} AED</strong>
                                </div>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="apply-discount-button"
                                >
                                    Apply Discount
                                </Button>
                            </>
                        ) : (
                            // for Remove Bill
                            <>
                                {pricingComponents.map((component, index) => (
                                    <div key={index} className="unit-pricing-item">
                                        <div className="bill-details">
                                            <span className="bill-name">{component.name}</span>
                                            <span className="bill-amount">${component.amount}</span>
                                        </div>
                                        <IconButton
                                            onClick={() => handleRemoveComponent(index)}
                                            className="remove-icon"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                ))}

                                <div className="pricing-total">
                                    <div className="final-total">
                                        <span>Final Total</span>
                                        <span className="final-amount">${finalTotal}</span>
                                    </div>
                                </div>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="update-save-button"
                                >
                                    Update & Save
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

const itemData = [
    {
        img: house,
        title: 'Bed',
        rows: 2,
        cols: 2,
    },
    {
        img: house,
        title: 'Bathroom',
    },
    {
        img: house,
        title: 'Living Room',
    },
    {
        img: house,
        title: 'Kitchen',
    },
    {
        img: house,
        title: 'Additional Image',
    },
];
