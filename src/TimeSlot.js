import React, { useEffect, useState } from 'react';
import moment from 'moment';

const TimeSlot = (props)=>{
const [timeSlots, setTimeSlots] = useState([]);
const CreateTimeslot = (fromTime, toTime)=>{
  let startTime = moment(fromTime, 'hh:mm A');
  let endTime = moment(toTime, 'hh:mm A');
  if(endTime.isBefore(startTime)){
      endTime.add(1, 'day');
  }
  let arr = [];
  while(startTime <= endTime){
      arr.push(new moment(startTime).format('hh:mm A'));
      startTime.add(30, 'minute');
  }
  return arr;
}
useEffect(()=>{
   setTimeSlots(CreateTimeslot('10:00 AM', '07:00 PM'));
//    console.log(slots);
}, []);



return (
    <div>
    {
        timeSlots.map((time, index)=>{
            return <button className = "btn m-3 border" key = {index} onClick = {()=> props.setSlot(time)}>{time}</button>
        })
    }
    </div>
)
}
export default TimeSlot;