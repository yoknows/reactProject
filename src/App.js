import {useEffect, useState} from 'react';
import Header from './Shared/Header';
import VideoSearch from './Search/VideoSearch';
import VideoSearchResults from './Search/VideoSearchResults';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';    //, Link, NavLink, Redirect
import VideoDetails from './Search/VideoDetails';
import Navigation from './Shared/Navigation';
import VideosToWatch from './Search/VideosToWatch';

import './App.css';

function App() {
  const [searchDataMain, setSearchDataMain] = useState(null);
  
  const updateData = (theData) => {
    setSearchDataMain(theData);
    console.log('AppJS, updateDataJustRan:searchData' + searchDataMain)
  }


  useEffect(()=>{
    console.log("AppJS: useEffect2");
  },[searchDataMain])

  return (
     // only need one router per app
     <Router>
      <div className="App">
            <Header/>
            <Navigation/>
            
            <Route exact path="/WatchList" component={VideosToWatch} />
            <Route path="/Details/:id" component={VideoDetails} />
            
            {/* Show Search Form and Form Results on root page */}
            <Route exact path="/" render={() => {
              return  <VideoSearch setData={updateData}/>    
            }} />
            <Route exact path="/" render={() => {
              return  <VideoSearchResults resultData={searchDataMain}/>    
            }} />
      </div>
    </Router>
  );
}

export default App;
