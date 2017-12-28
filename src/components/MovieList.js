import React from 'react'
import '../stylesheets/MovieList.css'
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
const style = {
    height: 300,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'flex',
};

const MovieList = ({movie ,onclick=f=>f}) =>{
    return(

        <List>
            <ListItem
                primaryText={movie.Title}
                leftAvatar={<Avatar size={50} src={movie.Poster} />}
                onClick={onclick}
            />
        </List>
    )
}


const itemClick=(imdbID)=>{
    console.log(imdbID+"item clicked")
}






export default MovieList