import React, { useEffect, useState } from "react";
import './SoundWidget.css';
import './thumb.css';

function SoundWidget() {
    return (
        <div className='slider-container'>
            <div className='thumb'></div>
            <input type='range' min='0' max='100' step='0.01' className='range1'/>
            <input type='range' min='0' max='100' step='0.01' className='range2'/>
            <input type='range' min='0' max='100' step='0.01' className='range3'/>
            <input type='range' min='0' max='100' step='0.01' className='range4'/>
            <input type='range' min='0' max='100' step='0.01' className='range5'/>
        </div>
        
    );
}
export default SoundWidget;