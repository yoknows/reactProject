// VideoSearchResults -- props get passed the json.  Repeat items with poster image + dynamic link to Route
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function VideoSearchResults(props)
{
    console.log("Video Search Results:"+ props.resultData)
    return (
        <div>
           { !props ? <p>Empty</p> : 
           props.resultData && props.resultData.Search ? 
            
           <div class="wrapper">
                {props.resultData.Search.map(video => (
                    <div className="box a"  key={video.imdbID}><Link to={'/Details/' + video.imdbID}>{video.Title}</Link>
                    <br/><br/><img src={video.Poster} style={{width: "80%"},{height: "80%"}}></img></div>
              ))}
            </div>
           : <p>No Results</p>}
            
        </div>
    )
}
export default VideoSearchResults;