import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Switch,
  Typography,
  Box,
  Button,
  IconButton,
  Checkbox,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PoolIcon from '@mui/icons-material/Pool';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Aminity from '../../assets/swimming.jpg';
import './Amenities.css';

const amenitiesList = [
  { name: 'Amenity 1', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 2', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 3', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 4', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 5', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 6', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
];

export default function AmenitiesDialog({ open, handleClose }) {
  // Manage switch and checkbox states separately
  const [checkedItems, setCheckedItems] = useState(Array(amenitiesList.length).fill(false));
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // Handle switch toggle
  const handleToggle = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    // Reset the checkbox state to false if the switch is turned off
    if (!newCheckedItems[index]) {
      setCheckboxChecked(false);
    }
  };

  // Handle checkbox click
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <Dialog open={open} onClose={handleClose}
    PaperProps={{ style: { minHeight: '600px' } }}>
      <Box>
        <DialogTitle>
          <Box className="dialogTitle" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Add Amenities</Typography>
            {/* Close Icon */}
            <IconButton edge="end" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box className="amnities-content" display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <PoolIcon />
              <Typography variant="h6">05 Total Amenities</Typography>
            </Box>
            <Typography className="amenitiesPrice">$200.00</Typography>
          </Box>
          <Typography variant="subtitle1" className="subtitle">
            Available Amenities
          </Typography>

          <Box
            style={{
              maxHeight: '420px',
              overflowY: 'auto',
              scrollbarWidth: 'none', 
            }}
            className="scrollable-list" 
          >
            <List>
              {amenitiesList.map((amenity, index) => (
                <div key={index} className="listItem">
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={amenity.image} alt={amenity.name} variant="rounded" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={amenity.name}
                      secondary={`${amenity.price} • ${amenity.date}`}
                    />
                    <Switch
                      edge="end"
                      checked={checkedItems[index]}
                      onChange={() => handleToggle(index)}
                      color="success"
                      inputProps={{ 'aria-label': 'iOS design' }}
                    />
                  </ListItem>

                  {/* Conditionally render checkbox below the list item only for first index */}
                  {index === 0 && checkedItems[index] && (
                    <>
                      <Divider />
                      <Box display="flex" justifyContent="flex-start" alignItems="center" >
                        <Checkbox
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon />}
                          checked={checkboxChecked}
                          onChange={handleCheckboxChange}
                          color="primary"
                          inputProps={{ 'aria-label': 'Checkbox demo' }}
                        />
                        <Typography variant="body2" color="textSecondary">
                          Free applicability
                        </Typography>
                      </Box>
                    </>
                  )}
                </div>
              ))}
            </List>
          </Box>
          <Button
            variant="contained"
            className="saveButton"
            fullWidth
            onClick={handleClose}
            style={{ marginTop: '6%' }}
          >
            Update & Save
          </Button>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
