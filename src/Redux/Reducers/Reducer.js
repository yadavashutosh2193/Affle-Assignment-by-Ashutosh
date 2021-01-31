
import {ADD_BOOKING, LIST_BOOKING} from '../Constant/Constant';

const initialState = {
    Bookings: []
}

export const BookingReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_BOOKING:return{
            ...state,
           Bookings: state.Bookings.push(action.payload)
        }
        case LIST_BOOKING:
        return state
        default : return state
    }
    
}