import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BookingReducer } from "../Reducers/Reducer";


const store = createStore(BookingReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;