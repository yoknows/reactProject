//VideoDetails: Gets the video ID from the URL params, and retrieves the video details
import {useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import useApiData from '../Utils/useApiData';
import VideoDetailsDetails from './VideoDetailsDetails';
import firebase from '../Utils/Firebase';

function VideoDetails()
{
    const [searchUrl, setSearchUrl] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [idValue, setIdValue] = useState(null);
    const {id} = useParams();   // get video ID from URL
    // const [searchData, isLoading, fetchNewUrl] = useApiData(searchUrl);  // I tried to get this to work with Custom Hook, but had issues
    
    useEffect ( () =>{
        setIdValue(id);
       } 
       ,[]
    
     ) // useEffect, when component loads

     // when API url is generated, call function to get API data
     useEffect ( () =>{
        getData();
        //console.log('after fetch with term='+ json);
    }, [searchUrl])
    
    // useEffect ( () =>{
    //     console.log('About to show data='+ searchData);
    // }, [searchData])

    // using url, call API and set videoData state with retrieved video details
    async function getData(){
        try{
          const response = await fetch(searchUrl);
          const json = await response.json();
          setVideoData(json);
        }//try
        catch(error){
          console.log(error);
        }
      }// getData

    // when video ID is passed, can then construct the url to call API
    useEffect ( () =>{
        const searchUrlObj = new URL('http://www.omdbapi.com/');
            searchUrlObj.search = new URLSearchParams({
              // list query params as properties
              i: idValue,
              apikey: "5c39f505"
            });
            setSearchUrl(searchUrlObj);
    }, [idValue]
    
    )

    // setup video DB on component load
    useEffect(
        () => {
            const dbRef = firebase.database().ref();
        }, []
    )

    // on click, add the video information to the DB
    const handleClick = (e) => {
        e.preventDefault();
        const videoToAdd = {
        date: Date.now(), 
        title: videoData.Title,
        year: videoData.Year,
        }
    
        // add to the DB
        const dbRef = firebase.database().ref('/videosToWatch/');
        dbRef.push(videoToAdd);
    }

    return (
        <div>
           {videoData? 
           <div>
                <button onClick={handleClick}>Add to viewing list</button>
                <VideoDetailsDetails video={videoData} />
            </div>
        : <p>No Details</p>   
        }
        </div>
    )
}
export default VideoDetails;
