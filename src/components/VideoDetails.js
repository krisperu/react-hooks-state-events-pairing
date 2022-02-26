import React from 'react'
import video from "../data/video.js";
// import Comment from "./Comment"
import CommentsList from "./CommentsList"
function VideoDetails() { 

  return (
    <div>
    
    <iframe
    width="919"
    height="525"
    src={video.embedUrl}
    frameBorder="0"
    allowFullScreen
    title={video.title}
    />
    <h1>{video.title}</h1>
    <p>{video.views} Views | Uploaded {video.createdAt}</p>
    <button>{video.upvotes}👍</button>
    <button>{video.downvotes}👎</button>
    <CommentsList comments={video.comments}/>
  </div>
  )
}

export default VideoDetails