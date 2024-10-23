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
  Typography,
  Box,
  Button,
  IconButton,
  Checkbox,
  Divider,
  Switch
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PoolIcon from '@mui/icons-material/Pool';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import Aminity from '../../assets/swimming.jpg';
import './Amenities.css';

// Custom iOS-style switch
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& .MuiSwitch-thumb': {
        backgroundColor: '#5AC782', // Circle color when checked
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#EEF9EE', // Background color when checked
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    backgroundColor: '#98A0AC', // Circle color when unchecked
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E4E8EE', // Background color when unchecked
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const amenitiesList = [
  { name: 'Amenity 1', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 2', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 3', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 4', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 5', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
  { name: 'Amenity 6', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Aminity },
];

export default function AmenitiesDialog({ open, handleClose }) {

  const [checkedItems, setCheckedItems] = useState(Array(amenitiesList.length).fill(false));
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleToggle = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    if (!newCheckedItems[index]) {
      setCheckboxChecked(false);
    }
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <Dialog open={open} onClose={handleClose} >
      <Box>
        <DialogTitle>
          <Box className="dialogTitle" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Add Amenities</Typography>
            <IconButton edge="end" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />
        <Box>
        <DialogContent>
          <Box className="amnities-content" display="flex" justifyContent="space-between" alignItems="center" padding={1.5}>
            <Box display="flex" justifyContent="space-between" alignItems="center" >
              <PoolIcon />
              <Typography variant="h6" marginLeft={1}>05 Total Amenities</Typography>
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
          >
            <List>
              {amenitiesList.map((amenity, index) => (
                <Box border={'1px solid #E4E8EE'} mb={1} borderRadius={'6px'}>
                <div key={index} className="listItem">
                  <ListItem 
                    sx={{
                      paddingTop: '2px',  
                      paddingBottom: '2px',
                      paddingLeft: '8px',
                      paddingRight: '8px',
                    }} >
                    <ListItemAvatar>
                      <Avatar src={amenity.image} alt={amenity.name} variant="rounded" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={amenity.name}
                      secondary={`${amenity.price} • ${amenity.date}`}
                    />
                    {/* Replace default Switch with IOSSwitch */}
                    <IOSSwitch
                      edge="end"
                      checked={checkedItems[index]}
                      onChange={() => handleToggle(index)}
                      color="success"
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
                </Box>
              ))}
            </List>
          </Box>
          <Button
            variant="contained"
            className="saveButton"
            fullWidth
            onClick={handleClose}
          >
            Update & Save
          </Button>
        </DialogContent>
        </Box>
      </Box>
    </Dialog>
  );
}
