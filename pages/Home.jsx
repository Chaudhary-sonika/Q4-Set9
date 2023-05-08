import { useNavigate } from "react-router"
export const Home = ()=>{
    const navigate = useNavigate();
    return(
      <div id="mainDiv">
        <h1>Welcome to my Video Streaming App</h1>
        <h2>To browse all videos, click the below button or go to the videos page</h2>
        <button onClick={()=>navigate("/videolib")}>Explore Videos</button>
      </div>
    )
}