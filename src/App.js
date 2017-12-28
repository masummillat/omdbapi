import React, { Component } from 'react';
import MovieList from './components/MovieList'
import './App.css';
import SearchMovie from "./components/SearchMovie";
import ReactPlayer from 'react-player'
import Templet from "./components/Templet";
class App extends Component{

    state={
        searchResult:false,
        movie:[],
        specificMovie:[]
    }

    handleSubmit = (e) =>{

        console.log("search result: ")
        fetch('http://www.omdbapi.com/?s='+e.target.movieName.value+'&apikey=d89e0bf3')
            .then(response=>response.json())
            .then(parseJSON =>parseJSON.Search.map(movie=>({
                Title:movie.Title,
                Year:movie.Year,
                imdbID: movie.imdbID,
                Type: movie.Type,
                Poster:movie.Poster
            }))).then( movie=> this.setState({
                movie

            })
        )
            .catch(error=>{
                console.log(error)
                this.setState({
                    searchResult:true
                })
            })
            console.log(this.state.movie)

    }

    itemClick=(imdbID)=>{
        fetch('http://www.omdbapi.com/?i='+imdbID+'&apikey=d89e0bf3')
            .then(response=>response.json())
            .then(parseJSON =>{
                this.setState({
                    specificMovie:parseJSON
                })
            })
            .catch(error=>console.log(error))
            console.log(this.state.specificMovie)
    }

    render(){

        const {movie,specificMovie,searchResult}=this.state
        console.log(typeof (movie))

        console.log(typeof (specificMovie))
        return (
            <div className="App">
                <SearchMovie smovie={this.handleSubmit} />
                <div className="infoDisplay">
                    <div className="searchList">
                        {(Object.keys(movie).length !== 0) ?
                            movie.map(movie=><MovieList onclick={()=>{this.itemClick(movie.imdbID)}} movie={movie} key={movie.imdbID}/>):
                            (searchResult)?<h1>Sorry No Result Found</h1> : <h1>Search for movie</h1>


                        }
                    </div>
                    <div className="detailInfo">
                        {(Object.keys(specificMovie).length !== 0) ? <Templet specificMovie={specificMovie}/>: ''}

                    </div>
                </div>
            </div>
        );
    }
  }

export default App;
