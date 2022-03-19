    import React from 'react';
    import './Dock.css';
    import themes from '../../assets/images/dock/themes.png';
    import calendar from '../../assets/images/dock/calendar.png';
    import timer from '../../assets/images/dock/timer.png';
    import spotify from '../../assets/images/dock/spotify.png';
    import todolist from '../../assets/images/dock/todolist.png';
    import sounds from '../../assets/images/dock/sounds.png';
    import stickers from '../../assets/images/dock/stickers.png';
    import DatePicker from 'sassy-datepicker';
    import exit from "../../assets/images/x_button.png"

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
        this.setState({isOpen: true});
    };
    toggleShowHide = () => {       
        this.setState(state => ({ isOpen: !state.isOpen }));
      };

    render() {
        return (
        <React.Fragment>
            <div className='calendarwidget'>
                {this.state.isOpen?   
                <React.Fragment>
                    <div className='calendarFonts'>
                <button className='button-exit'><img src={exit} alt="exit" onClick={this.toggleShowHide}/></button>
                <DatePicker onChange={this.Calendar}>
                    </DatePicker>
                    </div>
                    </React.Fragment>
                    :null}
            </div>
            <div className='footer'>
                <div id="container">
                    <div id="cont">
                        <div className="footer_center">
                            <section id="icons">
                                <button className="button-noborder">
                                    <img src={themes} width="60" height="60" alt="Theme"/>
                                </button>
                                <button className="button-noborder" onClick={this.openCalendar}>
                                    <img src={calendar} width="60" height="60" alt="Calendar"/>
                                </button>  
                                <button className="button-noborder">
                                    <img src={timer} width="60" height="60" alt="Timer"/>
                                </button>
                                <button className="button-noborder">
                                    <img src={spotify} width="60" height="60" alt="Spotify"/>
                                </button>
                                <button className="button-noborder">
                                    <img src={todolist} width="60" height="60" alt="To-do List"/> 
                                </button>
                                <button className="button-noborder">
                                    <img src={sounds} width="60" height="60" alt="Sounds"/>
                                </button>    
                                <button className="button-noborder">
                                    <img src={stickers} width="60" height="60" alt="Sticky"/>
                                </button>
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
