import './ChooseTheme.css';
import ThemeOption from './ThemeOption';
import Rome from "./assets/Rome.jpg";
import Tokyo from "./assets/Tokyo.jpg";
import ArrowL from"./assets/ArrowL.png";
import ArrowR from"./assets/ArrowR.png";
import Carousel from 'react-elastic-carousel';
import React, { Component } from 'react';

// import Item from "./ThemeOption";


//it doesnt like it when i use body tag
//how to implement font
// do i have to import every image
// how do i center the main container on the screen 

class ChooseTheme extends Component{
  state = {
      items: [
        {
          imgSource: Rome,
          name: 'ROME',
        },
        {
          imgSource: Tokyo,
          name: 'TOKYO',
        },    
      ],
    };

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map((item, index) => (
          <div className='carousel-item-container' key={index}>
            <img src={item.imgSource} className='option' alt={item.name}/>
            <button className='option-btn'>
              <p>{item.name}</p>
            </button>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default ChooseTheme;