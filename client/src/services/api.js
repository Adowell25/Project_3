import { useImperativeHandle } from "react";

/*
  This function gathers up all of the events from the eventbrite api and returns a promise. You can then access the data 
  (start date and time, end date and time, name and descrpitpion) using the format below:
  getEventBriteEvents()
    .then(data=>{
      for(var i = 0;i<data.length;i++){
          event=data[i];
          //Do stuff here like adding it to the calendar, etc. Console log is below to see format
          console.log(event);
      }
  });
*/

/* This is the function that gets the events from the back end api. DO NOT TOUCH! If you do need to change something
it would be the host and ports. Otherwise please leave it alone. 
*/
export default function getEventBriteEvents() {
    var events = [];
    return fetch("http://localhost:3001/events")
        .then((response) => response.json())
        .then(data => {
            var event_ids = data
            var promises = [];
            for (var i = 0; i < event_ids.events.length; i++) {
                var promise = fetch("http://localhost:3001/events/" + event_ids.events[i]);
                promises.push(promise);
            }
            return Promise.all(promises)
                .then(responses => {
                    var responses_json = responses.map(response => response.json());
                    return Promise.all(responses_json);
                })


        });



}