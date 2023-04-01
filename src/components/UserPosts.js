import React, { useState, useEffect } from "react";
import "./posts.css";
import PostsComment from "./PostsComment";
const UserPosts = ({ userId }) => {
  const [posts, setPost] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const postsData = () => {
      setDataLoaded(null);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((jsonData) => {
          setPost(jsonData);
          setDataLoaded(false);
        })
        .catch((error) => console.error(error));
    };
    postsData();
  }, [userId]);

  if (!dataLoaded) {
    return (
      <div className="posts-disaini">
        <button type="button" onClick={() => setDataLoaded(true)}>
          View posts
        </button>
        <div className="line"></div>
      </div>
    );
  }

  return (
    <div className="posts-disaini">
      <button type="button" onClick={() => setDataLoaded(false)}>
        Hide posts
      </button>
      <div className="line"></div>
      <div>
        {posts.map((item) => (
          <div key={item.id}>
            <div className="usersPosts">
              <div className="postsHeader">
                <div className="picture">{item.id}</div>
                <div className="user-posts-info">
                  <h4 className="postsAuthor">@Author</h4>
                  <p className="title">{item.title}</p>
                </div>
              </div>
              <div className="posts-content-image">
                <img src="#" alt="posts" />
              </div>
              <div className="likes-comment">
                <PostsComment postId={userId} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
