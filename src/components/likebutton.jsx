import React, { useState } from "react";

const LikeButton = ({ isLikedInitially }) => {
  const [isLiked, setIsLiked] = useState(isLikedInitially);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={handleLike}
    >
      {isLiked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
