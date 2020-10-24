import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    // ! youtube.js 작성 전 코드
    // console.log(`search : ${query}`);
    // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    // const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResult=25&q=${query}&key=${API_KEY}`;
    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // fetch(API_URL, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) =>
    //     result.items.map((item) => ({ ...item, id: item.id.videoId }))
    //   )
    //   .then((items) => setVideos(items))
    //   .catch((error) => console.log("error", error));

    // ? 아래와 같이 사용할 경우 검색이 발생할 때마다 Youtube를 객체를 계속 생성하는 문제가 있음
    // const youtube = new Youtube();

    // ?
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  useEffect(() => {
    // ! youtube.js 작성 전 코드
    // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    // const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`;
    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
    // fetch(API_URL, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log("error", error));
    //

    //
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
