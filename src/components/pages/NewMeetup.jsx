import NewMeetupForm from "../meetups/NewMeetupForm";
import React from "react";
import { useNavigate } from 'react-router-dom';
export default function NewMeetup(){
    const history= useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
            'https://travel-page-87df0-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                 'Content-Type': 'application/json',
                },
        }
    ).then (()=>{
        history('/');
    });
   
    }
    return(
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}