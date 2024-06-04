import { useContext } from "react";
import FavoriteContext from "../../store/favorite-content";
import MeetupList from "../meetups/MeetupList"
export default function Favorite(){
    const favoriteCtx= useContext(FavoriteContext);
    let content;
    if (favoriteCtx.totalFavorites== 0){
        content = <p>No favorite list... Start adding some</p>
    }
    else {
        content =<MeetupList meetups= {favoriteCtx.favorites} />
    }
    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}