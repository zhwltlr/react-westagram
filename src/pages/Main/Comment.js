import React from "react";
import { useState } from "react";

const Comment = ({ comment, i, onDelete }) => {
  const [turnRed, setTurnRed] = useState(false);
  return (
    <div key={i} className="comments">
      <span>jyp_0808</span>
      {comment}
      <img
        onClick={() => {
          setTurnRed(!turnRed);
        }}
        src={turnRed === false ? "/images/heart.png" : "/images/redheart.png"}
        alt="heart"
      />
      <img onClick={onDelete} src="/images/delete.png" alt="delete" />
    </div>
  );
};

export default Comment;
