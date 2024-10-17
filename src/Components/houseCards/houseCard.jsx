import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './houseCard.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CircleIcon from '@mui/icons-material/Circle';
import Home from '../../assets/house1.avif';
import CustomPopper from '../Popper/popper';
import Button from '@mui/material/Button';
import UnitDialog from '../Unit Dialog/UnitDialog'; // Import UnitDialog

const HouseCard = () => {
    // Initial state with card details
    const [cards, setCards] = useState([
        { id: 1, title: 'Jumeirah Estate', price: 1200, discountedPrice: 900, discountApplied: true, imgSrc: Home },
        { id: 2, title: 'Jumeirah Estate', price: 1200, discountedPrice: null, discountApplied: false, imgSrc: Home },
        { id: 3, title: 'Jumeirah Estate', price: 1200, discountedPrice: null, discountApplied: false, imgSrc: Home },
        { id: 4, title: 'Jumeirah Estate', price: 1200, discountedPrice: null, discountApplied: false, imgSrc: Home },
    ]);

    const [anchorEl, setAnchorEl] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    // Handle Customize button click
    const handleCustomizeClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    // Delete a card when the delete icon is clicked
    const handleDelete = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    return (
        <div className='house-contain'>
            <h2 className='unit-head'>Unit Details</h2>
            
            {/* Map over the cards array */}
            <div className='card-sec'>
            {cards.map((card, index) => (
                <div className="house-card" key={card.id} onClick={handleDialogOpen}>
                    <div className="house-img-container">
                        <img
                            src={card.imgSrc}
                            alt="house"
                            className="house-img"
                        />
                        <button className="delete-icon" onClick={(e) => { e.stopPropagation(); handleDelete(card.id); }}>
                            <DeleteIcon />
                        </button>
                        {card.discountApplied && (
                            <div className="discount-label">
                                % Discount Applied
                            </div>
                        )}
                    </div>
                    <div className="house-details">
                        <div className="house-title">
                            <h3>{card.title}</h3>
                            {card.discountApplied ? (
                                <>
                                    <h3 className="house-price discounted-price">${card.discountedPrice.toFixed(2)}</h3>
                                    {/* <span className="original-price">${card.price}</span> */}
                                </>
                            ) : (
                                <h3 className="house-price">${card.price}</h3>
                            )}
                        </div>
                        <div className="house-location">
                            Jumeirah Golf Estate <CircleIcon sx={{ fontSize: "small" }} /> 2000 Sq.Ft
                        </div>
                        <div className="house-features">
                            <span><HotelOutlinedIcon /> 2</span>
                            <span><CircleIcon sx={{ fontSize: "small" }} /></span>
                            <span><BathtubOutlinedIcon /> 2</span>
                            <span><CircleIcon sx={{ fontSize: "small" }} /></span>
                            <span><HomeOutlinedIcon /> 2BHK</span>
                        </div>
                        <div className="customise-link" onClick={(e) => e.stopPropagation()}>
                            <Button variant="text" onClick={handleCustomizeClick}>
                                <AddRoundedIcon /> Customise
                            </Button>
                            {/* Popper */}
                            <CustomPopper open={Boolean(anchorEl)} anchorEl={anchorEl} />
                        </div>
                    </div>
                </div>
            ))}
            </div>

            {/* Dialog Component */}
            <UnitDialog open={dialogOpen} onClose={handleDialogClose} />
        </div>
    );
};

export default HouseCard;
