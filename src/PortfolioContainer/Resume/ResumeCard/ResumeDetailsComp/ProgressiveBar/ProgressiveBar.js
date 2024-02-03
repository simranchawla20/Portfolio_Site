// #FF5823
import React from "react";
import './Progressivebar.css'

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 17,
      width: '80%',
      backgroundColor: "#FF5823",
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      
    }
  
    return (
      <div className="bar" style={containerStyles}>
        <div style={fillerStyles}>
          <span className="precentage" style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;