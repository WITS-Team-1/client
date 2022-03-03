
import React from "react";
import { render } from "react-dom";
import DatePicker from 'sassy-datepicker';
import './Calendar.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Calendar() {
  const onChange = (date) => {
  console.log(date.toString());
<button aria-label='edit'>
  <edit-icon />
</button>
};

return (
  <Popup trigger={<button> Trigger</button>} position="right center">
    {close => (
  <div>
  <DatePicker onChange={onChange} />
<button
type="button"
className="button"
onClick={() => {
close();
}}
>
close modal
</button>
</div>
    )}
</Popup>
);
}
render(
  <Calendar></Calendar>
, document.querySelector("#root"));
export default Calendar;