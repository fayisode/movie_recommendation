import React, { useState } from "react";
import Suggestions from "../suggestions/suggestions.js";
import Posts from "../posts/posts.js";


function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Thithe",
      postImage:
        "https://static.vecteezy.com/system/resources/thumbnails/011/778/457/small_2x/music-logo-icon-free-vector.jpg ",
      Likes: 433,
      timestamp: "2d",
    },
    {
      user: "Expo",
      postImage:
        "https://cdn.vectorstock.com/i/preview-1x/11/39/logo-musik-vector-12071139.jpg ",
      Likes: 433,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((posts) => (
            <Posts
              user={posts.user}
              postImage={posts.postImage}
              Likes={posts.Likes}
              timestamp={posts.timestamph}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;

