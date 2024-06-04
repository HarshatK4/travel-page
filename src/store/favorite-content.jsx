import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favMeetup) => {},
    removeFavorite: (meetupId) =>{},
    itemsFavorite: (meetupId) => {}
});

export function FavoriteContextProvider (props) {
    const [userFav, setuserFav]=useState([]);
    function addFavHandler (favMeetup){
        setuserFav((prevuserFav)=>{
            return prevuserFav.concat(favMeetup);
        });
    }
    function removeFavHandler (meetupId){
            setuserFav((prevuserFav)=>{
                return prevuserFav.filter(meetup => meetup.id != meetupId);
            });    
    }
    function itemsFavHandler (meetupId){
        return userFav.some(meetup => meetup.id === meetupId);    
}
    const context ={
        favorites: userFav,
        totalFavorites: userFav.length,
        addFavorite: addFavHandler,
        removeFavorite: removeFavHandler,
        itemsFavorite: itemsFavHandler
    };
    return(
        <FavoriteContext.Provider value={context} >
            {props.children}
        </FavoriteContext.Provider>
    );
}
export default FavoriteContext;