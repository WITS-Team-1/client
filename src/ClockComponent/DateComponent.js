import React from "react";
import WebFont from 'webfontloader';

var date = () =>
{
    const showDate = new Date();
    const optionsWeekday = { weekday: 'long' }
    const optionsDate = { month: 'long', day: 'numeric' }
    const weekdayString = showDate.toLocaleDateString("en-US", optionsWeekday)
    const dateString = showDate.toLocaleDateString("en-US", optionsDate);

    return(
        <div style={{fontSize: "30px", fontFamily: "KorolevMedium", color: "black", position: "relative", left: "11px",
        textTransform: "uppercase"}}>
            {weekdayString}
            <br/>
            {dateString}
        </div>
    ); 
}

export default date;