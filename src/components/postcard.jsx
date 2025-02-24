import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div className="post-card">
      <img src={profileImage} alt={username} className="profile-pic" />
      <h3>{username}</h3>
      <p>{content}</p>
      <LikeButton isLikedInitially={isLiked} />
    </div>
  );
};

export default PostCard;
