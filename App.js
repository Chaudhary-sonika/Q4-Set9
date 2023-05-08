import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { VideoLib } from "./pages/Video";
import { LikedVideos } from "./pages/LikedVideo";
import { WatchLater } from "./pages/WatchLater";
import { VideoProvider } from "./contexts/context";
import { useVideo } from "./contexts/context";
import { SingleVideo } from "./pages/SingleVideo";
function App() {
  const { likedVideo, watchData } = useVideo();
  return (
    <div style={{ textAlign: "center" }}>
      <nav style={{ margin: "15px" }}>
        <NavLink to="/" style={{ margin: "10px" }}>
          Home{" "}
        </NavLink>

        <NavLink to="/videolib" style={{ margin: "10px" }}>
          Videos
        </NavLink>

        <NavLink to="/likedvideo" style={{ margin: "10px" }}>
          Liked Videos ({likedVideo.length}){" "}
        </NavLink>

        <NavLink to="/wtachlater" style={{ margin: "10px" }}>
          WatchLater ({watchData.length}){" "}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolib" element={<VideoLib />} />
        <Route path="/wtachlater" element={<WatchLater />} />
        <Route path="/likedvideo" element={<LikedVideos />} />
        <Route path="/single/:singleId" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <VideoProvider>
      <App />
    </VideoProvider>
  </BrowserRouter>
);
export default App;
