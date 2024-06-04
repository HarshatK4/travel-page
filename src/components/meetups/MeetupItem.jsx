import styles from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoriteContext from '../../store/favorite-content';
export default function MeetupItem(props){
    const favoriteCtx= useContext(FavoriteContext);
    const itemsFavorite= favoriteCtx.itemsFavorite(props.id);
    function toggleFavStatusHandler(){
        if (itemsFavorite){
            favoriteCtx.removeFavorite(props.id);
        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }
    return(
        <li className={styles.item}>
            <Card>
            <div className={styles.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={styles.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={toggleFavStatusHandler}>
                   {itemsFavorite? 'Remove from Favorites' : 'To Favorites'}
                    </button>
            </div>
            </Card>
        </li>
    );
}