
import React, { useState } from "react";
import "./suggestions.css";
import { Avatar } from "@mui/material";
import Posts from "../posts/posts.js";


function Suggestions({ user }) {
  const [suggestions, setPosts] = useState([
    {
      user: "Thithe",
    },
    {
      user: "Expo",
    },
  ]);

  return (
    <div className="sugessions">
      {suggestions.map((suggestions) => (
        <Posts user={suggestions.user} />
      ))}
      <div className="suggetions__title">Recommendations</div>
      According to your taste
      <div className="suggetions__ContentBased">
        <div className="SuggestionHeader">
          <Avatar>N</Avatar>
          {user}
        </div>
      </div>
      <div className="suggetions__CollaborativeFiltering">
        What other's like
      </div>
    </div>
  );
}

export default Suggestions;

