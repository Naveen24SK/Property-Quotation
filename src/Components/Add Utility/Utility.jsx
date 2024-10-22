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
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Parking from '../../assets/park.jpg';

const utilityList = [
  { name: 'Utility 1', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Parking },
  { name: 'Utility 2', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Parking },
  { name: 'Utility 3', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Parking },
  { name: 'Utility 4', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Parking },
  { name: 'Utility 5', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Parking },
  { name: 'Utility 5', price: '$20.00', date: 'Valid Feb 22 - 12 Feb 23', image: Parking },
];

export default function UtilityDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ style: { minHeight: '600px' } }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Add Utility</Typography>
          <IconButton edge="end" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
      <Box className="utility-content" display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <AutoAwesomeRoundedIcon />
          <Typography variant="h6">05 Total Utility</Typography>
          </Box>
          <Typography>$200.00</Typography>
        </Box>
        <Typography variant="subtitle1" className="subtitle1">
          Available Utility
        </Typography>
        <Box style={{ maxHeight: '420px', overflowY: 'auto',scrollbarWidth: 'none' }}>
          <List>
            {utilityList.map((utility, index) => (
             <div key={index} className="listItem">
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar src={utility.image} alt={utility.name} variant="rounded" />
                </ListItemAvatar>
                <ListItemText
                  primary={utility.name}
                  secondary={`${utility.price} • ${utility.date}`}
                />
                <Switch edge="end" color="success" inputProps={{ 'aria-label': 'iOS design' }} />
              </ListItem>
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
    </Dialog>
  );
}
