import styles from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';
export default function NewMeetupForm(props){
    const titleRef =useRef();
    const imageRef =useRef();
    const addressRef =useRef();
    const descriptionRef =useRef();
    function submitHandler(event){ 
        event.preventDefault();
        const enteredTitle =titleRef.current.value;
        const enteredImage =imageRef.current.value;
        const enteredAddress =addressRef.current.value;
        const enteredDescription =descriptionRef.current.value;
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        props.onAddMeetup(meetupData);
    }
    return(
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                   <label htmlFor='title'> Title</label> 
                   <input type='text' required id='title' ref={titleRef}/> 
                </div>
                <div className={styles.control}>
                   <label htmlFor='image'> Image</label> 
                   <input type='url' required id='image' ref={imageRef}/> 
                </div>
                <div className={styles.control}>
                   <label htmlFor='address'> Address</label> 
                   <input type='text' required id='address' ref={addressRef}/> 
                </div>
                <div className={styles.control}>
                   <label htmlFor='description'> Description</label> 
                   <textarea type='description' required rows='5' ref={descriptionRef}/> 
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup </button>
                </div>
            </form>
        </Card>
    );
}