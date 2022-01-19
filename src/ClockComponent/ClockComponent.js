import React, { useEffect, useState } from "react";

function ClockComponent() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            var timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            setClockState(timeString);
        }, 400); 
    }, []);

    return <div style={{fontSize: "55px", margin: "10px"}}>{clockState}</div>};

export default ClockComponent;