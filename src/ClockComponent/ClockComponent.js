import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import WebFont from 'webfontloader';


function ClockComponent() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        getTime();
        setInterval(() => {
            getTime();
        }, 400); 
    }, []);

    function getTime() {
        const time = new Date();
        var timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setClockState(timeString);
    }

    return( 
        <div style={
            {fontSize: "42px", fontWeight: "bold", fontFamily: "KorolevHeavy", margin: "12px", 
            "-webkit-text-stroke-width": "2.15px", "-webkit-text-stroke-color": "black"}}>
            {clockState}
        </div>
    );
}
    
export default ClockComponent;
