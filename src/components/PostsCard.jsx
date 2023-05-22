import React from "react";

function PostsCard({ postRandom }) {
  console.log(postRandom);
  return (
    
      <p className="posts_card">{postRandom.phrase}</p>
   
  );
}

export default PostsCard;
