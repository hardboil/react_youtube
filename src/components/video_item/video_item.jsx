import React from "react";
import styles from "./video_item.module.css";

// ! props.video 를 video로 사용이 가능하다
// ? const VideoItem = (props) => ();
// ? const VideoItem = ({video}) => ();
// ? const VideoItem = ({video: videoItem}) => ();
// ? const VideoItem = ({video: {snippet}}) => ();
const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

// const VideoItem = (props) => (
//   <li>
//     <img src={props.video.snippet.thumbnails.medium.url} alt="thumbnail" />
//     <div>
//       <p>{props.video.snippet.title}</p>
//       <p>{props.video.snippet.channelTitle}</p>
//     </div>
//   </li>
// );

export default VideoItem;
