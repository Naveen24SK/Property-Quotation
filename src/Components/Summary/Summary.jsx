import React from 'react';
import Divider from '@mui/material/Divider';
import './Summary.css';

const Summary = () => {
  return (
    <div className="summary-container">
      <h2>Quotation Summary</h2>
      <div className="summary-sec">
        <table className="summary-table">
          <thead className='summary-head'>
            <tr>
              <th>DESCRIPTION</th>
              <th>QTY</th>
              <th style={{textAlign:"right"}}>AMOUNT</th>
            </tr>
            {/* <tr><td colSpan="3"><Divider /></td></tr> */}

          </thead>
          <tbody>
            <tr>
              <td>Total Amount</td>
              <td>3</td>
              <td>$3,600.00</td>
            </tr>            
            <tr>
              <td>Total Discount</td>
              <td>10% </td>
              <td>-$100.00</td>
            </tr>
            <tr><td colSpan="3"><Divider /></td></tr>
            
            <tr>
              <td>Total Refundable</td>
              <td>0%</td>
              <td>$0</td>
            </tr>
            <tr><td colSpan="3"><Divider /></td></tr>

            <tr>
              <td>Total Tax</td>
              <td>18%</td>
              <td>$648.00</td>
            </tr>
            <tr><td colSpan="3"><Divider /></td></tr>
          </tbody>
        </table>
        <div className="quote-amount">
          <span>Quote Amount</span>
          <span>$4,148.00</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
