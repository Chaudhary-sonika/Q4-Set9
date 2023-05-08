import { useVideo } from "../contexts/context"
import { Link } from "react-router-dom";
export const VideoLib = ()=>{
    const {apiData, likedVideoHandler, watchHandler, likedVideo, watchData} = useVideo();
    
    return(
      <div id="mainDiv">
        <h1>All Videos</h1>
        {apiData.map((item)=>{
           const isLiked = likedVideo.find((arr)=>arr.id===item.id);
           const isWatched = watchData.find((arr)=>arr.id===item.id);
            return(
                <div key={item.id} style={{display:"inline-block"}}>
                    <img src={item.thumbnail} alt="videoThubnail" style={{margin:"10px", height:"250px", width:"300px"}}/>
                    <p>{item.title}</p>
                    <Link to={`/single/${item.id}`}>Watch Here</Link>
                    <div style={{margin:"5px"}}>
                    <button onClick={()=>likedVideoHandler(item)}>{isLiked?"Liked":"Like"}</button> 
                    <button onClick={()=>watchHandler(item)}>{isWatched?"Added to the Watch Later":"Watch Later"}</button>
                    </div>
                </div>
            )
        })}
      </div>
    )
}