import React from "react";
import './SoundWidget.css';
import './thumb.css';
import sound_widget from '../assets/images/sound_widget.png';

function SoundWidget() {
    return (
        <div className='slider-container'>
            <div className='thumb'></div>
            <input type='range' min='0' max='100' step='0.01' className='range1'/>
            <input type='range' min='0' max='100' step='0.01' className='range2'/>
            <input type='range' min='0' max='100' step='0.01' className='range3'/>
            <input type='range' min='0' max='100' step='0.01' className='range4'/>
            <input type='range' min='0' max='100' step='0.01' className='range5'/>

            <div className='text1'>
                <p>Sound Title Here</p>
            </div>
            <div className='text2'>
                <p>Sound Title Here</p>
            </div>
            <div className='text3'>
                <p>Sound Title Here</p>
            </div>            
            <div className='text4'>
                <p>Sound Title Here</p>
            </div>
            <div className='text5'>
                <p>Sound Title Here</p>
            </div>

            <div className='image1'>
                <img src={sound_widget} width="20" height="20"></img>
            </div>
            <div className='image2'>
                <img src={sound_widget} width="20" height="20"></img>
            </div>
            <div className='image3'>
                <img src={sound_widget} width="20" height="20"></img>
            </div>
            <div className='image4'>
                <img src={sound_widget} width="20" height="20"></img>
            </div>
            <div className='image5'>
                <img src={sound_widget} width="20" height="20"></img>
            </div>
        </div>
        
    );
}
export default SoundWidget;