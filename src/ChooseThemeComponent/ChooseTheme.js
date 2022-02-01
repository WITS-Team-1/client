import './ChooseTheme.css';
import ThemeOption from './ThemeOption';
import Rome from "./assets/Rome.jpg";
import ArrowL from"./assets/ArrowL.png";
import ArrowR from"./assets/ArrowR.png";
import Carousel from "react-elastic-carousel";
import React, { Component } from 'react';

// import Item from "./ThemeOption";


//it doesnt like it when i use body tag
//how to implement font
// do i have to import every image
// how do i center the main container on the screen 

class ChooseTheme extends Component{
    state = {
        items: [
            Rome,
            Rome
        ]
      }
    
      render () {
        const { items } = this.state;
        return (
          <Carousel>
            {items.map(item => <div key={item.id}>{item.url}</div>)}
          </Carousel>
        )
      }
}

export default ChooseTheme;