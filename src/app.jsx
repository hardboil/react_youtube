import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    console.log(`search : ${query}`);
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResult=25&q=${query}&key=${API_KEY}`;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
