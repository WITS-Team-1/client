import React from "react";

var date = () =>
{
    var showDate = new Date();
    var optionsWeekday = { weekday: 'long' }
    var optionsDate = { month: 'long', day: 'numeric' }
    var weekdayString = showDate.toLocaleDateString("en-US", optionsWeekday)
    var dateString = showDate.toLocaleDateString("en-US", optionsDate);

    return(
        <div>
            {weekdayString}
            <br/>
            {dateString}
        </div>
    ); 
}

export default date;