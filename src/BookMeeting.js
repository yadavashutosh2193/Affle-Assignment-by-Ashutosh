import './App.css';
import CalendarComponent from "./Calendar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TimeSlot from './TimeSlot';
import { useEffect, useState } from 'react';
import {connect } from "react-redux";
import { AddNweBookingAction, getBookingList} from "../src/Redux/Actions/Action";

function BookMeeting({Bookings, AddNweBookingAction, getBookingList}) {
  const [meetingRoom, setMeetingRoom] = useState("");
  const [name, setName]  = useState("");
  const [description, setDescription] = useState("");
  const [Meetingdate, setMeetingDate] = useState(null);
  const [ShowCalender, setShowCalendar] = useState(false);
  const [slot, setSlot] = useState();
  const [Booking, setBooking] = useState([]);
   useEffect(()=>{
       getBookingList();
   }, [Booking])
  const isEmpty = (val) => val === null || val === undefined || val === "";
  const DisableSlots = ()=> Booking.find((elem)=> (elem.Meetingdate.getDate() === Meetingdate.getDate() && elem.slot === slot));
  
  const OnchangeRoom = (e)=>{
    setMeetingRoom(e.target.value);
  }
  const OnchangeName = (e)=>{
    setName(e.target.value);
  }
  const OnchangeDescription = (e)=>{
    setDescription(e.target.value);
  }
 const OnClickCountinue = ()=>{
    if(isEmpty(meetingRoom) || isEmpty(name) || isEmpty(description)){
      alert("please fill all fields");
    }else{
      setShowCalendar(true);
    }
  }

  const onSubmit = async ()=>{
      if(isEmpty(Meetingdate) || isEmpty(slot)){
        alert("please choose meeting date and slot");
      }
      if(DisableSlots() !== undefined){
        alert("this slot is not available");
      }
      else{
        const booking = {name: name, meetingRoom:meetingRoom, description:description, Meetingdate: Meetingdate, slot:slot};
        Booking.push(booking);
        setBooking(Booking);
       await AddNweBookingAction(booking);
        alert(`you successfully booked a meeting on ${Meetingdate.getDate()} : ${Meetingdate.getMonth() + 1} : ${Meetingdate.getFullYear()} at ${slot}`);
        setShowCalendar(false);
        setMeetingDate(new Date());
        setSlot();
        setMeetingRoom("");
        setName("");
        setDescription("");
        console.log(Bookings);
      }
  }
  return (
    <div className = "container mx-auto mb-3">
      <div className = "row bg-info">
        <div className = "col col-sm-12">
          <button className = "btn text-danger">LogOut</button>
        </div>
      </div>
      {!ShowCalender ? <>
      <div className = "row mt-3 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-4 mx-auto w-100">
        <p className = "bg-dark p-3 text-white" style = {{fontWeight:'bold', fontSize: '15px'}}>Meeting Room Booking</p>
        </div>
      </div>
      <div className = "row mt-1 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-4 mx-auto w-100">
        <label htmlFor = "meeting">Meeting Room</label><br/>
          <input type = "text" id = "meeting" value = {meetingRoom} placeholder = "Select Meeting Room" list = "meetings"
            onChange = {OnchangeRoom}
          />
        </div>
        <datalist id = "meetings">
          <option value = "Training Room"></option>
        </datalist>
      </div>
      <div className = "row mt-1 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-4 mx-auto w-100">
        <label htmlFor = "name">Name</label><br/>
          <input type = "text" id = "name"value = {name} placeholder = "Enter Your Name" onChange = {OnchangeName}/>
        </div>
      </div>
      <div className = "row mt-1 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-4 mx-auto w-100">
        <label htmlFor = "discription">Meeting Description</label><br/>
          <input type = "text" value = {description} id = "discription" placeholder = "Enter Meeting Description" onChange ={OnchangeDescription}/>
        </div>
      </div> 
      <div className = "row mt-1 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-4 mx-auto w-100">
        <input type = "submit" style = {{fontWeight:'bold', fontSize: '15px'}} value = "Continue >>" className = "btn border text-white bg-info mt-3" onClick = {OnClickCountinue}/>
        </div>
      </div> 
      
      </> :<>
      <div className = "row mt-1 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-4 mx-auto w-100">
        Select Meeting Date<br/>
        <CalendarComponent Meetingdate = {Meetingdate} setMeetingDate = {setMeetingDate}/>
        </div>
      </div>
      <div className = "row mt-1 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-10 mx-auto w-100">
        Please Select your preferred slot<br/>
        <TimeSlot setSlot = {setSlot} DisableSlots = {DisableSlots}/>

        </div>
      </div>
      <div className = "row mt-3 w-100">
      <div className = "col col-sm-1"></div>
        <div className = "col col-sm-4 mx-auto w-100">
        <input className = "btn text-white bg-success" type = "submit" value = "BOOK APPOINTMENT" onClick = {onSubmit}/>

        </div>
      </div> </>}
    </div>
    
  );
}

const mapStateToprops = (state)=>{
  return {
      Bookings: state.Bookings
  }
}
const mapDispatchtoProps = (dispatch)=>{
    return{
        AddNweBookingAction: ()=> dispatch(AddNweBookingAction),
        getBookingList: ()=> dispatch(getBookingList())
    }
}
export default connect(mapStateToprops, mapDispatchtoProps)(BookMeeting);
