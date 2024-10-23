import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button, Divider,     IconButton,
} from '@mui/material';
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
import '../Unit Dialog/UnitDialog.css';
import { CloseOutlined } from '@mui/icons-material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function UnitDialog({ open, onClose }) {
    return (
        <Dialog  open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle>Unit Details   <IconButton
                    edge="end"
                    style={{ position: 'absolute', right: 15, top: 8 }}
                    onClick={onClose}
                >
                    <CloseRoundedIcon />
                </IconButton></DialogTitle>
            <Divider />
            <DialogContent
            sx={{height:1000}}
            >
                <div className="dialog-content">
                    {/* Left Side - Image and Unit Info */}
                    <div className="unit-info">
                        {/* Image List */}
                        <div className='img-contain'>
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
                        <div className="unit-title">Jumeirah Estate <span className="unit-badge">UNT-1234</span></div>
                        <div className="unit-subtitle">Rubix Apartment, K Tower, Floor 1</div>
                        <div className="unit-details">
                            <span><HotelOutlinedIcon />2</span>
                            <CircleIcon fontSize="inherit"/>
                            <span><BathtubOutlinedIcon />2</span>
                            <CircleIcon fontSize="inherit" />
                            <span><HomeOutlinedIcon />2BHK</span>
                            <CircleIcon fontSize="inherit" />
                            <span><SelectAllIcon />2000 Sq.Ft</span>
                        </div>
                        <Divider />
                        <div className='view-link'>
                       <p><BookOutlinedIcon />HandBook</p> 
                        <Button  variant="text">View/Download</Button>
                    </div>
                    </div>

                    {/* Right Side - Pricing Details with Scroll */}
                    <div className="unit-pricing-details">
                        <div className="pricing-title">UNIT PRICING DETAILS</div>
                        <div className="pricing-list">
                            <div className='pricing-names'>
                            {[...Array(5)].map((_, index) => (
                                <>
                                <div key={index} className="unit-pricing-item1">
                                    <span>Bill Name Here</span>
                                    <span>$1,000</span>
                                </div>
                     <Divider />
                     </>
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
    },
    {
        img: house,
        title: 'More Details',
    }
];
