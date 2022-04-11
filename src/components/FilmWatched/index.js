import React, {useState} from "react";
import { FaHeart } from 'react-icons/fa';
import './FilmWatched.css'

function FilmWatched({filmWatched}){
    const [watched, setWatched] = useState(filmWatched);
    const [hoverWatched, setHoverWatched] = useState(false);

    return(
        //Add validation and restriction with StarRating
        <div className="film-watched-component">
            <label>
                <input
                    type="checkbox"
                    name="watched"
                    onClick={()=>{watched === true ? setWatched(false) : setWatched(true)}}
                />
                <FaHeart
                    className="heart"
                    size={20}
                    color={((watched || hoverWatched) === true) ? "#C22F80" : "#D2D2D2"}
                    onMouseEnter = {()=> setHoverWatched(true)}
                    //Desktop version
                    onMouseLeave = {() => setHoverWatched(false)}
                    //Mobile version
                    onTouchEnd = {() => setHoverWatched(false)}
                />
            </label>
        </div>
    );
}

export { FilmWatched }

