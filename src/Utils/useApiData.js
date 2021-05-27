import { useState, useEffect } from "react";

function useApiData(initialUrl) {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  // Fetch data...
  useEffect(() => {
    // We can't make useEffect's callback async, so use a function within the callback to simplify
    // fetch's promise responses
    const fetchData = async () => {
      // Starting a new request
      setIsLoading(true);
      console.log('useApiData_Url:' + url);
      const response = await fetch(url);
      

      // Store the response data in a state value
      setData(await response.json());
      // Clear the URL so that if the same URL is set later we'll initiate a new request
      setUrl();

      // All done!
      setIsLoading(false);
      console.log('finished UseEffect');
    };

    // Only call fetchData if `url` has a value
    if (url) {
      console.log('Yes url');
      fetchData();
    }
    else{
      console.log('no url');
    }
  }, [url]);

  // Return state values, and a function for triggering a new request
  return [data, isLoading, setUrl];
}

export default useApiData;