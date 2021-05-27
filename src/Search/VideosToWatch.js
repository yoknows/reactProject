// VideosToWatch -- Retrieve from Firebase the videos that have been marked as watch.  Show in order of added
import { useEffect, useState } from 'react';
import styles from './VideosToWatch.module.css';
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
            <h2 className={styles.videoList}>These are the videos you have already said you want to watch!</h2>
            <table className={styles.center} > 
                <thead>
                    <tr><th>Video Title</th><th>Video Year</th></tr>
                </thead>
                <tbody>
        {videos.map(video => {
          return (
            <tr key={video.date}>
              <td>{video.title}</td>
              <td>{video.year}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
        </section>
    )
}

export default VideosToWatch;