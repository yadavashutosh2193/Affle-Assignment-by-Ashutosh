import './App.css';
// import CalendarComponent from "./Calendar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BookMeeting from './BookMeeting'
import {Provider}from 'react-redux';
import store from '../src/Redux/Container/Container'

function App() {
  return (
    <Provider store = {store}>
      <BookMeeting/>
    </Provider>
  )
  
}

export default App;
