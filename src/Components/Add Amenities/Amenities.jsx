import React from 'react';
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
} from '@mui/material';
import './Amenities.css';

const amenitiesList = [
  { name: 'Amenity 1', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: 'image_url_1' },
  { name: 'Amenity 2', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: 'image_url_2' },
  { name: 'Amenity 3', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: 'image_url_3' },
  { name: 'Amenity 4', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: 'image_url_4' },
  { name: 'Amenity 5', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: 'image_url_5' },
];

export default function AmenitiesDialog({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Box className="dialogTitle">
          <Box>
            <Typography variant="h6">05 Total Amenities</Typography>
            <Typography className="amenitiesPrice">$200.00</Typography>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <List>
          {amenitiesList.map((amenity, index) => (
            <ListItem key={index} className="listItem">
              <ListItemAvatar>
                <Avatar src={amenity.image} alt={amenity.name} />
              </ListItemAvatar>
              <ListItemText
                primary={amenity.name}
                secondary={`${amenity.price} • ${amenity.date}`}
              />
              <Switch edge="end" />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          className="saveButton"
          fullWidth
          onClick={handleClose}
        >
          Update & Save
        </Button>
      </DialogContent>
    </Dialog>
  );
}
