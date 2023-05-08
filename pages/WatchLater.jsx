import { useVideo } from "../contexts/context";
import { Link } from "react-router-dom";
export const WatchLater = ()=>{
    const {watchData} = useVideo();
    return(
      <div id="mainDiv">
        <h1>You selected these vidoes to watch later</h1>
        {watchData.map((item)=>(
            <div key={item.id} style={{display:"inline-block"}}>
                <img src={item.thumbnail} alt="videoThubnail" style={{margin:"10px", height:"250px", width:"300px"}}/>
                <p>{item.title}</p>
                <Link to={`/single/${item.id}`}>Watch Here</Link>
            </div>
        ))}
      </div>
    )
}