import React from 'react'
import FullCalendar, { preventContextMenu } from '@fullcalendar/react'//, { getRectCenter } 
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from 'axios'

 class Calendar extends React.Component {

  constructor() {
    //super is used to access the variables
    super();
    this.state = {
       data: []
    }
 }
 componentDidMount() {
 //API request
 axios.get("http://localhost/therichpost/public/api/sample-restful-apis").then(response => {
  
  //getting and setting api data into variable
  this.setState({ data : response.data });
 
})
}

  render() {
    return (
      <FullCalendar
        dateClick={this.handleDateClick}
        plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'addEventButton',
          right: 'dayGridMonth, dayGridWeek, dayGridDay, listWeek'
        }}

        
        //pop-up click event for event title and start time
        eventClick={
          function(arg){
            alert(arg.event.title)
            alert(arg.event.start)
          }
        }

        events = {[
          { title: 'event 1', date: '2020-09-03', backgroundColor: 'red'},
          
        ]}

      />
    )
  }
  //date pop-up click event
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }



 }

  


export default Calendar

