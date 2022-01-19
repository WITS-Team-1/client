    import React from 'react';
    import './Dock.css';

    class Dock extends React.Component {
    render(){
        return (
        <React.Fragment>
            <body>
                <div class="footer">
                <div id="container">
                <div id="cont">
                <div class="footer_center">
                    <section id="icons">
                        <a href="/index.html">
                                <img src="/images/themes.png" width="60" height="60" alt="Theme icon" />
                        </a>
                        <a href="/index.html">
                                <img src="/images/calendar.png" width="60" height="60" alt="Calendar icon" />
                        </a>  
                        <a href="index.html">
                                <img src="/images/timer.png" width="60" height="60" alt="Timer icon"/>
                        </a>
                        <a href="index.html">
                        <img src="/images/spotify.png" width="60" height="60" alt="Spotify icon" />
                        </a>
                        <a href="index.html">
                                <img src="/images/todolist.png" width="60" height="60" alt="To-do List icon"/> 
                        </a>
                        <a href="index.html">
                        <img src="/images/sounds.png" width="60" height="60" alt="Sounds icon"  />
                        </a>    
                        <a href="index.html">
                        <img src="/images/stickers.png" width="60" height="60" alt="Sticker icon" />
                        </a>
                    </section>
                </div>
                </div>
                </div>
                </div>
            </body>
        </React.Fragment>
        );
    }
    }
    export default Dock;
