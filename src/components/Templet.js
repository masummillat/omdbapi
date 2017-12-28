import React from  'react'
import '../stylesheets/MovieList.css'
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o'
const Templet =({specificMovie}) =>

        <div className="list">
            <div>
                <img src={specificMovie.Poster}/>
            </div>
            <div className="info">
                <div>
                    <a href="#"><h3>{specificMovie.Title}</h3></a>
                </div>
                <div className="runtime_biography">
                    <p className="runtime"><FaPlayCircleO/> {specificMovie.Runtime} - </p>
                    <p className="biography">{specificMovie.Genre}</p>
                </div>
                <br/>
                <div className="metascore">
                    <p style={{backgroundColor:'#61C74F',color:'#ffffff'}}>{specificMovie.Metascore}</p>
                    <p>Metascore</p>
                </div>
                <div>
                    <p className="plot">{specificMovie.Plot}</p>
                </div>
                <div className="director">
                    <p  style={{fontWeight:'bold'}}>Director:</p>
                    <p>{specificMovie.Director}</p>
                </div>
                <div className="Stars">
                    <p style={{fontWeight:'bold'}}>Stars: </p>
                    <p >{specificMovie.Actors}</p>
                </div>

            </div>
        </div>

export default Templet