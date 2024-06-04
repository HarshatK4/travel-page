import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-content";
import styles from './MainNavigation.module.css';
 export default function MainNavigation () {
    const favoriteCtx= useContext(FavoriteContext);
    return(
        <header className={styles.header}>
            <div className={styles.logo}> Travel places</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>All Meet Ups</Link>
                        </li>
                        <li>
                            <Link to='/new-meetup'>Add New MeetUps</Link>
                        </li>
                        <li>
                            <Link to='/favorite'> My Favorites
                            <span className={styles.badge}>{favoriteCtx.totalFavorites}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    );
 }