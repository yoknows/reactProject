// VideoDetailsDetails: displays actuals video details, passed in props
import styles from './VideoDetailsDetails.module.css';

function VideoDetailsDetails (props) {

    return(
        <div>
            <img src={props.video.Poster} /><br/>
            <div className={styles.titleWrap}>
                <label className={styles.propertyTitle}>Title:</label> 
                <label className={styles.propertyTitle}>Year:</label> 
                <label className={styles.propertyTitle}>Genre:</label> 
                <label className={styles.propertyTitle}>Director:</label> 
                <label className={styles.propertyTitle}>Actors:</label> 
                <label className={styles.propertyTitle}>Plot:</label> 
                <label className={styles.propertyTitle}>Imdb Rating:</label>    
                <label className={styles.propertyTitle}>Imdb Link:</label>    
            </div>
            <div className={styles.valueWrap}>
                <label className={styles.propertyValue}>{props.video.Title}</label>
                <label className={styles.propertyValue}>{props.video.Year}</label>
                <label className={styles.propertyValue}>{props.video.Genre}</label>
                <label className={styles.propertyValue}>{props.video.Director}</label>
                <label className={styles.propertyValue}>{props.video.Actors}</label>
                <label className={styles.propertyValue}>{props.video.Plot}</label>
                <label className={styles.propertyValue}>{props.video.imdbRating}</label>
                <label className={styles.propertyValue}><a target="_blank" href={"https://imdb.com/title/"+ props.video.imdbID}>Link to Imdb page in new window</a></label>
            </div>

        </div>
           )
}

export default VideoDetailsDetails;