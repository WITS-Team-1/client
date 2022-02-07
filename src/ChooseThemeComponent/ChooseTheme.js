import './ChooseTheme.css';
import ThemeOption from './ThemeOption';
import Rome from "./assets/Rome.jpg";
import Tokyo from "./assets/Tokyo.jpg";
import NewYork from "./assets/NewYork.jpg";
import Hawaii from "./assets/Hawaii.jpg"
import ArrowL from"./assets/ArrowL.png";
import ArrowR from"./assets/ArrowR.png";
import Carousel, {consts} from 'react-elastic-carousel';
import Flex from './Flex.js';
import Dot from './Dot.js';
import React, { Component } from 'react';
import styled from 'styled-components';


// import Item from "./ThemeOption";



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
        {
          imgSource: NewYork,
          name: 'NEW YORK',
        },
        {
          imgSource: Hawaii,
          name: 'HAWAII',
        },
      ],
    };

    
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <img src={ArrowL} /> : <img src={ArrowR} />

    const Button = styled.button`
      background-color: Transparent;
      border-radius: 20px;
      background-repeat:no-repeat;
      border: none;
      cursor:pointer;
    `

    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    )
  }

  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      // { width: 1450, itemsToShow: 5 },
      // { width: 1750, itemsToShow: 6 },
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <div class="main-container">
        <Carousel 
          breakPoints={this.breakPoints}
          renderArrow={this.myArrow}
          itemsToScroll={1}
          itemsToShow={4}
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}

          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <Flex direction="row">
                {pages.map(page => {
                  const isActivePage = activePage === page
                  return (
                    <Dot
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                    />
                    
                  )
                })}
              </Flex>
            )
          }}
          >

          {items.map((item, index) => (
            <div className='carousel-item-container' key={index}>
              <img src={item.imgSource} className='option' alt={item.name}/>
              <button className='option-btn'>
                <p>{item.name}</p>
              </button>
            </div>
          ))}
        </Carousel>
      </div>

    );
  }
}

export default ChooseTheme;