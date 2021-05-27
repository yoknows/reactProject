// VideoSearch.js -- Form with input text for search term. Uses useApiData custom hook to initiate API call
import {useEffect, useState} from 'react';
import useApiData from '../Utils/useApiData';

function VideoSearch (props) {
const [searchTerm, setSearchTerm] = useState('');
const [searchUrl, setSearchUrl] = useState(null);
const [searchData, isLoading, fetchNewUrl] = useApiData(searchUrl);

// call the callback function once data is populated
useEffect ( () =>{
    props.setData(searchData);
}, [searchData]
)

// once the url is set, get the data
useEffect ( () =>{
    FetchMyData(searchTerm);
}, [searchUrl]
)


const handleChange = (e) => {
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
}


function  FetchMyData (searchValue)  {
         fetchNewUrl(searchUrl);
  
}   // fetchMyData

  return (
    <form action="#">
        {isLoading? <p>Loading...</p> : <p>Enter form data</p>}
        <label htmlFor="term">Enter a search term: </label>
        
        <input onChange={handleChange} type="text" id="term"  value={searchTerm} />

        <button onClick={handleSubmit}>Let's search</button>

    </form>

  ) // return

}
export default VideoSearch;