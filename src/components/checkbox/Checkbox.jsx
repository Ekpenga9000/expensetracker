import React, { useState } from 'react';
import './Checkbox.css';

function Checkbox(props) {
  const {status, handleChange} = props
  return (
      <div>
        {status.map((item, index) => {
          return (
            <div key={index} className='checkbox-div'>
              <input type="checkbox" name={item.name} id={item.for} value={item.label} onChange={handleChange} />
              <label htmlFor={item.for}>{item.label}</label> 
            </div>
          )
        })}
    </div>
  )
}

export default Checkbox;