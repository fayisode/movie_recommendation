import React from "react";
import "./posts.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RecommendIcon from "@mui/icons-material/Recommend";
import AddCommentIcon from "@mui/icons-material/AddComment";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";

function Posts({ user, postImage, Likes, timestamp }) {
  return (
    <div className="posts">
      <div className="posts__header">
        <div className="posts__headerAuthor">
          <Avatar>{user.charAt(0)}</Avatar>
          {user} <span> 10h</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="posts__image">
        <img src={postImage} alt="" />
      </div>
      <div className="posts__footer">
        <button>
          <div className="posts__footerIcon">
            <RecommendIcon />
          </div>
        </button>
        <button>
          <div className="posts__footerIcon">
            <AddCommentIcon />
          </div>
        </button>
        <button>
          <div className="posts__footerIcon">
            <SendToMobileIcon />
          </div>
        </button>
      </div>
      Liked by {Likes}
      <br></br>
      <br></br>
    </div>
  );
}

export default Posts;

