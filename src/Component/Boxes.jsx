import React from 'react'
import './boxes.css'

const Boxes = (props) => {
  return (
    <div className='box'>
        <div style={{backgroundColor:props.colorCode}} className="upper"></div>
        <div style={{boxShadow: props.boxShadow}} className="lower">
            <h4>{props.colorCode}</h4>
            <p style={{color: props.colorCode,fontWeight:"bold"}}>{props.colorName}</p>
        </div>
    </div>
  )
}

export default Boxes