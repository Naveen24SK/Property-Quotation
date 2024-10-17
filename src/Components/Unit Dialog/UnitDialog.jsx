import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import house from '../../assets/house2.avif';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import '../Unit Dialog/UnitDialog.css';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function UnitDialog({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Unit Details</DialogTitle>
            <DialogContent
            >
                <div className="dialog-content">
                    {/* Left Side - Image and Unit Info */}
                    <div className="unit-info">
                        {/* Image List */}
                        <div className='img-contain'>
                        <ImageList
                            sx={{ width: 250, height: 150 }} // Reduced dimensions
                            variant="quilted"
                            cols={4}
                            rowHeight={100}
                        >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        {...srcset(item.img, 100, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                        className='unit-img'
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        </div>
                        <div className="unit-title">Jumeirah Estate</div>
                        <div className="unit-subtitle">Rubix Apartment, K Tower, Floor 1</div>
                        <div className="unit-details">
                            <span><HotelOutlinedIcon />2</span>
                            <CircleIcon />
                            <span><BathtubOutlinedIcon />2</span>
                            <CircleIcon />
                            <span>2BHK</span>
                            <CircleIcon />
                            <span><SelectAllIcon />2000 Sq.Ft</span>
                        </div>
                        <Button href="#" variant="text">View / Download Handbook</Button>
                    </div>

                    {/* Right Side - Pricing Details with Scroll */}
                    <div className="unit-pricing-details">
                        <div className="pricing-title">Unit Pricing Details</div>
                        <div className="pricing-list">
                            <div className='pricing-names'>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="pricing-item">
                                    <span>Bill Name Here</span>
                                    <span>$1,000</span>
                                </div>
                            ))}
                            </div>
                            <div className="pricing-total">
                                <span>Final Total</span>
                                <span>$1,200</span>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

const itemData = [
    {
        img: house,
        title: 'House Front',
        rows: 2,
        cols: 2,
    },
    {
        img: house,
        title: 'Living Room',
    },
    {
        img: house,
        title: 'Dining Area',
    },
    {
        img: house,
        title: 'Backyard',
        cols: 1,
    },
    {
        img: house,
        title: 'More Details',
        cols: 1,
    }
];
