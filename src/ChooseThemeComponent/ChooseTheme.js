import styles from './ChooseTheme.module.css';
import Rome from '../assets/images/Rome.jpg';
import Tokyo from '../assets/images/Tokyo.jpg';
import NewYork from '../assets/images/NewYork.jpg';
import Hawaii from '../assets/images/Hawaii.jpg';
import ArrowL from '../assets/images/ArrowL.png';
import ArrowR from '../assets/images/ArrowR.png';
import Carousel, { consts } from 'react-elastic-carousel';
import Flex from './Flex.js';
import Dot from './Dot.js';
import React, { Component } from 'react';
import styled from 'styled-components';

class ChooseTheme extends Component {
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
    const pointer =
      type === consts.PREV ? <img src={ArrowL} /> : <img src={ArrowR} />;

    const Button = styled.button`
      background-color: Transparent;
      border-radius: 20px;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
    `;

    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  }

  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    ];
  }

  render() {
    const { items } = this.state;
    return (
      <div className={styles.main_container}>
        <Carousel
          /* Carousel styling and functionality */
          breakPoints={this.breakPoints}
          renderArrow={this.myArrow}
          itemsToScroll={1}
          itemsToShow={4}
          tiltEasing='cubic-bezier(0.110, 1, 1.000, 0.210)'
          transitionMs={700}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <Flex direction='row'>
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <Dot
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </Flex>
            );
          }}
        >
          {items.map((item, index) => (
            <div className={styles.carousel_item_container} key={index}>
              <img
                src={item.imgSource}
                className={styles.option}
                alt={item.name}
              />
              <button className={styles.option_btn}>
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
