import React, { useEffect, useState } from "react";
//import { Watch } from "react-loader-spinner";
import "./posts.css";
import { FaComments, FaRegComments } from "react-icons/fa";

const PostsComment = ({ postId }) => {
  const [posts, setPosts] = useState([]);
  const [showComment, setShowComment] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setShowComment(true);
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const postsData = await data.json();
      setPosts(postsData);
      setShowComment(false);
    };

    fetchPosts();
  }, [postId]);

  if (!showComment) {
    return (
      <div>
        <button type="button" onClick={() => setShowComment(true)}>
          <FaComments />
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        className="btnComLike"
        type="button"
        onClick={() => setShowComment(false)}
      >
        <FaRegComments />
      </button>
      <div>
        {posts.map((com) => (
          <div className="comment" key={com.id}>
            <div className="commentAuthor">{com.id}</div>
            <h6>{com.email}</h6>
            <p>{com.body}</p>

            <button className="btnComLike" type="button">
              <FaComments />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComment;
