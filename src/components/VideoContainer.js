import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";



const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    
    const data = await fetch(process.env.REACT_APP_YT_API_KEY);
    const json = await data.json();
   // console.log(json)
    setVideos(json.items);
    console.log(json)
  };
  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map(video => 
       <Link to={"/watch?v="+video.id} key={video.id}>
<VideoCard key={video.id} info={video} />
       </Link> 
      )}
    </div>
  );
};

export default VideoContainer;
