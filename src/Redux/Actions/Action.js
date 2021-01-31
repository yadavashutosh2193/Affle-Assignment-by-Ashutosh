import {ADD_BOOKING, LIST_BOOKING} from '../Constant/Constant';

export const Add_Booking = (data)=>{
    return {
        type: ADD_BOOKING,
        payload: data
    }
}
export const List_Booking = ()=>{
    return {
        type: LIST_BOOKING
    }
}

export const AddNweBookingAction = (data)=>{
   return (dispatch)=>{
           dispatch(Add_Booking(data));       
   }
}
export const getBookingList = ()=>{
    return (dispatch)=>{
        dispatch(List_Booking());
    }
}