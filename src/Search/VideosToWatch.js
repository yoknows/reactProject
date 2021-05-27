import { useEffect, useState } from 'react';
import firebase from '../Utils/Firebase';

function VideosToWatch () {
    const [videos, setVideos] = useState([]);
    useEffect(
        () => {
            const dbRef = firebase.database().ref('/videosToWatch/');
            // .once is a method
            // fires when value changes
            dbRef.on('value', (snapshot) => {
                const firebaseData = snapshot.val();
          
                const videosFromDb = [];
                for (let video in firebaseData) {
                  const { title, year } = firebaseData[video];
                  videosFromDb.push({ title, year});
                }
          
                setVideos(videosFromDb);
            })

        }, []
    )

    return (
        <section>
            <h2>These are the videos you have already said you want to watch!</h2>
            <table>
                <th><td>Title</td><td>Year</td></th>
        {videos.map(video => {
          return (
            <tr key={video.date}>
              <td>{video.title}</td>
              <td>{video.year}</td>
            </tr>
          )
        })}
      </table>
        </section>
    )
}

export default VideosToWatch;