import React, { useState } from 'react';
import { Dialog, DialogTitle, IconButton, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './UnitDetail.css';

const UnitDetail = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button to trigger dialog */}
      <button className="open-dialog-btn" onClick={handleClickOpen}>
        Open Unit Details
      </button>

      {/* MUI Dialog for Unit Details */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Unit Details
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div className="unit-details-content">
            {/* Left Section with Unit Information */}
            <div className="unit-info">
              <div className="unit-images">
                <img
                  src="https://via.placeholder.com/150"
                  alt="main unit"
                  className="main-image"
                />
                <div className="secondary-images">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="secondary unit"
                    className="secondary-image"
                  />
                  <img
                    src="https://via.placeholder.com/50"
                    alt="secondary unit"
                    className="secondary-image"
                  />
                  <img
                    src="https://via.placeholder.com/50"
                    alt="secondary unit"
                    className="secondary-image"
                  />
                  <img
                    src="https://via.placeholder.com/50"
                    alt="secondary unit"
                    className="secondary-image"
                  />
                </div>
              </div>
              <div className="unit-description">
                <h4>
                  Jumeirah Estate <span className="unit-tag">UNT-1234</span>
                </h4>
                <p>Rubix Apartment, K Tower, Floor 1</p>
                <div className="unit-specs">
                  <span>
                    2 <i className="fas fa-bed"></i>
                  </span>
                  <span>
                    2 <i className="fas fa-bath"></i>
                  </span>
                  <span>2BHK</span>
                  <span>2000 Sq.Ft</span>
                </div>
                <div className="handbook-section">
                  <i className="fas fa-file-alt"></i> Handbook{' '}
                  <a href="#">View / Download</a>
                </div>
              </div>
            </div>

            {/* Right Section with Pricing Details */}
            <div className="pricing-details">
              <h4>Unit Pricing Details</h4>
              <div className="pricing-info">
                <div className="pricing-item">
                  <p>Bill Name Here</p>
                  <p>$1,000</p>
                </div>
                <div className="discount">
                  <p>Discount</p>
                  <p>10%</p>
                </div>
                <div className="pricing-item">
                  <p>Bill Name Here</p>
                  <p>$1,000</p>
                </div>
                <div className="discount">
                  <p>Discount</p>
                  <p>10%</p>
                </div>
                <div className="pricing-item">
                  <p>Bill Name Here</p>
                  <p>$1,000</p>
                </div>
                <div className="pricing-item">
                  <p>Bill Name Here</p>
                  <p>$1,000</p>
                </div>
              </div>
              <div className="final-total">
                <p>Final Total</p>
                <p>$1,200</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UnitDetail;
