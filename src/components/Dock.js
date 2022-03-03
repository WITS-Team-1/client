    import React from 'react';
    import './Dock.css';
    import themes from '../assets/images/themes.png';
    import calendar from '../assets/images/calendar.png';
    import timer from '../assets/images/timer.png';
    import spotify from '../assets/images/spotify.png';
    import todolist from '../assets/images/todolist.png';
    import sounds from '../assets/images/sounds.png';
    import stickers from '../assets/images/stickers.png';
    import DatePicker from 'sassy-datepicker';
    import exit from "../assets/images/exit.png"

    class Dock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleShowHide = this.toggleShowHide.bind(this)
        this.Calendar = this.Calendar.bind(this)
        this.openCalendar = this.openCalendar.bind(this)
    }
    
    Calendar =() => {
        const onChange = (date) => {
      <button aria-label='edit'>
        <edit-icon />
      </button>
      };
    }
    openCalendar = () => {
        this.setState(state => ({ isOpen: true}));
    };
    toggleShowHide = () => {       
        this.setState(state => ({ isOpen: !state.isOpen }));
      };
    render() {
        return (
        <React.Fragment>
            <div className='calendarwidget'>
                {    this.state.isOpen?   
                <React.Fragment>
                <button className='button-exit'><img src={exit} alt="exit" onClick={this.toggleShowHide}/></button>
                <DatePicker onChange={this.Calendar}>
                    </DatePicker>
                    </React.Fragment>
                    :null}
            </div>
            <div className='footer'>
                <div id="container">
                    <div id="cont">
                        <div className="footer_center">
                            <section id="icons">
                                <a href="/index.html">
                                    <img src={themes} width="60" height="60" alt="Theme"/>
                                </a>
                                <button className="button-noborder" onClick={this.openCalendar}>
                                    <img src={calendar} width="60" height="60" alt="Calendar"/>
                                </button>  
                                <a href="index.html">
                                    <img src={timer} width="60" height="60" alt="Timer"/>
                                </a>
                                <a href="index.html">
                                    <img src={spotify} width="60" height="60" alt="Spotify"/>
                                </a>
                                <a href="index.html">
                                    <img src={todolist} width="60" height="60" alt="To-do List"/> 
                                </a>
                                <a href="index.html">
                                    <img src={sounds} width="60" height="60" alt="Sounds"/>
                                </a>    
                                <a href="index.html">
                                    <img src={stickers} width="60" height="60" alt="Sticky"/>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
        );
        
    }
}

export default Dock;
