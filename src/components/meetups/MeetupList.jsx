import styles from './MeetupList.module.css';
import MeetupItem from './MeetupItem';
export default function MeetupList(props){
    return (
        <ul className={styles.list}>
            {props.meetups.map((meetup)=>(
                <MeetupItem
                    key={meetup.key}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    description={meetup.description}
                    />
            ))}
        </ul>
    );
}