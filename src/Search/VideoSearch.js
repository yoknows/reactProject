import {useEffect, useState} from 'react';
import useApiData from '../Utils/useApiData';

function VideoSearch (props) {
const [searchTerm, setSearchTerm] = useState('');
const [searchUrl, setSearchUrl] = useState(null);
//const [data, setData] = useState('');
//const [isLoading, setIsLoading] = useState(false);
//const [searchData, setSearchData] = useState();
const [searchData, isLoading, fetchNewUrl] = useApiData(searchUrl);
console.log('VideoSearch:props' + props)

useEffect ( () =>{
    //setSearchTerm('Raiders');
    console.log('VideoSearch:UseEffect:SearchTermValue-->' + searchTerm);
   } // useEffect internal
   ,[]

 ) // useEffect

useEffect ( () =>{
    props.setData(searchData);
}, [searchData]

)

useEffect ( () =>{
    FetchMyData(searchTerm);
    console.log('after fetch with term='+ searchTerm);
}, [searchUrl]

)


const handleChange = (e) => {
    console.log('VideoSearch:handleChange')
  setSearchTerm(e.target.value);

}

const handleSubmit = (e) => {
  e.preventDefault();
  const searchUrlObj = new URL('http://www.omdbapi.com/');
  searchUrlObj.search = new URLSearchParams({
    // list query params as properties
    s: searchTerm,
    apikey: "5c39f505"
  });
  setSearchUrl(searchUrlObj);
  console.log('handleSubmit, before fetch:' + searchTerm);
  
}


function  FetchMyData (searchValue)  {
        console.log('Fetch My Data:'+ searchValue);
         fetchNewUrl(searchUrl);
  
}   // fetchMyData

  return (
    <form action="#">
        {isLoading? <p>Loading...</p> : <p>Enter form data</p>}
        <label htmlFor="term">enter a search term: </label>
        {/* STEP 1 add an onChange handler to the input and pass in the function we want to call upon input change.*/}
        <input onChange={handleChange} type="text" id="term"  value={searchTerm} />

        <button onClick={handleSubmit}>Let's search</button>

        {/* {searchData && searchData.Search ? 
            
            <ul>
                {searchData.Search.map(video => (
                <li key={video.imdbID}>{video.Title}</li>
              ))}
            </ul>    
              
        : <p>No Results</p>}  */}
  </form>

  ) // return

}
export default VideoSearch;