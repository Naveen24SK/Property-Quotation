import React from 'react';
import Profile from '../../assets/profile.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import './Details.css';

const Details = () => {
  return (
    <div className="details-container">
      <h3 className='lead-head'>Lead Details</h3>
      <div className="lead-info">
        <Avatar src={Profile} sx={{ width: 50, height: 50, backgroundColor: '#f5f5f5', marginLeft: '10px', borderRadius:'4px' }} variant="square" />
        <div className="lead-text">
          <p className="lead-name">
            Tom Cruise <span className="prospect-badge">Prospect</span>
          </p>
          <p className="lead-contact">
            +91 9090808012 &nbsp;<CircleIcon sx={{fontSize:'small'}} />&nbsp; Tomcruise2515@mail.com
          </p>
        </div>
      </div>
      <Divider />
      <div className="quotation-section">
        <h4 className='quotation-head'>Quotation Details</h4>
        <div className="quotation-details">
          <div>
            <p className="detail-label">Lease Start Date</p>
            <p className="detail-value">30 Jan 22</p>
          </div>
          <div>
            <p className="detail-label">Lease End Date</p>
            <p className="detail-value">30 Jan 23</p>
          </div>
          <div>
            <p className="detail-label">Rent Start Date</p>
            <p className="detail-value">30 Jan 23</p>
          </div>
          <div>
            <p className="detail-label">Grace Period</p>
            <p className="detail-value">
              90 Days<span className="grace-period-note">(Beginning)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
