import React, { useEffect, useState } from "react";
import './SoundWidget.css';

function SoundWidget() {
    return (
        <div className='slider-container'>
            <div className="volume-bar-cover"></div>
            <div className='thumb'></div>
            <input type='range' step='0.01' className='range'/>
        </div>
    );
}
export default SoundWidget;

// https://www.youtube.com/watch?v=AYBuL8FhgwA