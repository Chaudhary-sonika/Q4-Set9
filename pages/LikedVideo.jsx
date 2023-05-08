import { useVideo } from "../contexts/context";
import { Link } from "react-router-dom";

export const LikedVideos = ()=>{
    const {likedVideo} = useVideo();
    console.log(likedVideo);
    return(
      <div id="mainDiv">
        <h1>Youre Liked Videos </h1>
        {likedVideo.map((item)=>(
            <div key={item.id} style={{display:"inline-block"}}>
                <img src={item.thumbnail} alt="videoThubnail" style={{margin:"10px", height:"250px", width:"300px"}}/>
                <p>{item.title}</p>
                <Link to={`/single/${item.id}`}>Watch Here</Link>
            </div>
        ))}
      </div>
    )
}