import { fakeFetch } from "../pages/fakeFetch";
import { createContext, useContext, useEffect, useState } from "react";

export const VideoContext = createContext(null);

export const VideoProvider = ({children})=>{
    const [apiData, setApiData] = useState();
    const [likedVideo, setLikedVideo] = useState([]);
    const [watchData, setWatchData] = useState([]);
    const fetchData = async()=>{
        try{
            const response = await fakeFetch("https://example.com/api/videos");
            if(response.status===200){
               setApiData(response.data.videos)
            }
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchData();
    }, []);

    const likedVideoHandler = (item)=>{
     const isLiked = likedVideo.find((arr)=>arr.id===item.id)
     if(!isLiked){
        setLikedVideo([...likedVideo, {...item}]);
     }else{
        setLikedVideo([...likedVideo])
     }
     }
     const watchHandler = (item)=>{
        const isWatched = watchData.find((arr)=>arr.id===item.id);
        if(!isWatched){
            setWatchData([...watchData, {...item}]);
        }else{
            setWatchData([...watchData])
        }
     }
    return(
        <VideoContext.Provider value={{apiData, setApiData, likedVideoHandler, likedVideo, watchData, watchHandler}}>
            {children}
        </VideoContext.Provider>
    )
}
export const useVideo = ()=> useContext(VideoContext);