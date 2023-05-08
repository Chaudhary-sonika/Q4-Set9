import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useVideo } from "../contexts/context";
export const SingleVideo = ()=>{
    const {apiData} = useVideo();
    const {singleId} = useParams();
    const product = apiData.find((item)=>item.id === parseInt(singleId, 10));
    const { id, title, description, url, thumbnail, duration } = product;
    return(
        <div key={id}>
            <h1>{title}</h1>
            <div>
                <img src={thumbnail} alt="videoThumbnail"/>
               <h2> {title}</h2>
               <Link to={url}>Watch Video</Link>
               <h3>Description: {description}</h3>
                <i>Duration: {duration}</i>
               
            </div>
        </div>
    )
}