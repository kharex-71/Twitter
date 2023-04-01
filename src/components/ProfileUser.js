import React from "react";
import "./profileUser.css";
//import UserPosts from "./UserPosts";
//import NavBar from "./NavBar";

const ProfileUser = (props) => {
  const { User, username, email, image } = props;
  return (
    <div key={User.id}>
      <section className="wrapper">
        <div className="header-component">
          <div className="Users">
            <h3 className="userName">{User}</h3>
            <h5 className="countTweets">0 Likes</h5>
          </div>
        </div>
        <div className="userPicture">
          <div className="coverimage">
            <img src="#" alt="cover" />
          </div>
          <div className="profile-image-btn-edit-profile">
            <div className="profile"> {image} </div>
            <button className="edit-profile">Edit Profile</button>
          </div>
        </div>
        <div className="users-info">
          <div className="user-info-text">
            <h3 className="userName">{User}</h3>
            <h4 className="userLogin">@{username}</h4>
            <h4 className="dataJoined">{email}</h4>
          </div>
          <div className="follow-button">
            <button type="button">128 Following</button>
            <button type="button">4 Followers</button>
          </div>
        </div>
        <div className="nav-bar">
          <div className="content-posts"></div>
        </div>
      </section>
    </div>
  );
};

export default ProfileUser;
