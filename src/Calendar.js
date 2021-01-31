import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CalendarComponent = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={props.Meetingdate} onChange={date => props.setMeetingDate(date)} 
        isClearable filterDate = {date=>date.getDay() !== 6 && date.getDay() !== 0}
        minDate = {new Date()}
        scrollableMonthYearDropdown showYearDropdown
    />
  );
};
export default CalendarComponent