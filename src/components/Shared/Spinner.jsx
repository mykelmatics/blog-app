import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';


const Spinner = ({size, color}) => {
    return (
        <div style={{ width: size?`${size}px`:'100px', margin: 'auto', display: 'block' }}>
          <ClipLoader color={color || "#6b62ff"} size={size || 100}/>
        </div>
      );
}

export default Spinner
