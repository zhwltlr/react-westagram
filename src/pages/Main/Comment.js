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
        src={
          turnRed === false
            ? `${process.env.PUBLIC_URL}/images/heart.png`
            : `${process.env.PUBLIC_URL}/images/redheart.png`
        }
        alt="heart"
      />
      <img
        onClick={onDelete}
        src={`${process.env.PUBLIC_URL}/images/delete.png`}
        alt="delete"
      />
    </div>
  );
};

export default Comment;
