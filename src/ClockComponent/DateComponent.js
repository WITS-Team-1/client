import React from "react";
import WebFont from 'webfontloader';

var date = () =>
{
    var showDate = new Date();
    var optionsWeekday = { weekday: 'long' }
    var optionsDate = { month: 'long', day: 'numeric' }
    var weekdayString = showDate.toLocaleDateString("en-US", optionsWeekday)
    var dateString = showDate.toLocaleDateString("en-US", optionsDate);

    return(
        <div style={{fontSize: "30px", fontFamily: "KorolevMedium", color: "black",
        textAlign: "left", textTransform: "uppercase"}}>
            {weekdayString}
            <br/>
            {dateString}
        </div>
    ); 
}

export default date;