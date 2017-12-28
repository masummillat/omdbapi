import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12,
};
const SearchMovie = props =>{
    const { smovie }= props
    return(
        <form onSubmit={e=>{
            e.preventDefault()
            smovie(e)
            console.log(e.target.movieName.value)
        }}>
            <TextField name="movieName"
                       hintText="Hint Text"
            />
            <RaisedButton type="submit" label="Primary" primary={true} style={style} />
        </form>
    )
}



export default SearchMovie