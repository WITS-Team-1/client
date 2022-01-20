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
        <div style={{fontSize: "41px", fontWeight: "bold", margin: "10px"}}>
            {clockState}
        </div>
    );
}
    
export default ClockComponent;
