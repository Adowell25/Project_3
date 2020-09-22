import React from 'react'
import FullCalendar, { preventContextMenu } from '@fullcalendar/react'//, { getRectCenter } 
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable} from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from 'axios';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import { INITIAL_EVENTS, createEventId } from './event-utils'
import getEventBriteEvents from "../services/api.js"
import { STATES } from 'mongoose';
document.addEventListener('DOMContentLoaded', function() {
  let draggableEl = document.getElementById('mydraggable');
  let calendarEl = document.getElementById('mycalendar');
})
 class Calendar extends React.Component {
  constructor() {
    //super is used to access the variables
    super();
    this.state = {
       data: [],
       events: []
      }
    }
      componentDidMount() {
        //API request
      axios.get("http://localhost/therichpost/public/api/sample-restful-apis").then(response => {
        //getting and setting api data into variable
        this.setState({ data : response.data });
        getEventBriteEvents().then(({results}) => this.setState({events: results}))
  })
  }
  render() {
    return (
      <FullCalendar
      dateClick={this.handleDateClick}
      plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
      droppable = {true}
      selectable = "true"
      dayMaxEvents = {3}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth, dayGridWeek, dayGridDay, listWeek'
      }}
      select={this.handleDateSelect}
      //pop-up click event for event title and start time
      eventClick={
        function(arg){
          alert(arg.event.title)
          alert(arg.event.start)
        }
      }
        events = {[
            { title: 'event 1', date: '2020-09-13', backgroundColor: 'red'},
            { title: 'event 2', date: '2020-09-13', backgroundColor: 'red'},
            { title: 'event 3', date: '2020-09-13', backgroundColor: 'red'},
            { title: 'event 4', date: '2020-09-13', backgroundColor: 'red'},
          ]}
        events = {this.state.events}
        />
        )
      }
      handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
        calendarApi.unselect() // clear date selection
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      }
      //date pop-up click event
      handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    }
    export default Calendar