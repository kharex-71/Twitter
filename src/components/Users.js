import React, { useState, useEffect } from "react";
import ProfileUser from "./ProfileUser";
import { Watch } from "react-loader-spinner";
import UserPosts from "./UserPosts";
import { MdSwipeRight } from "react-icons/md";
import "./users.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${id}`
      );
      const usersData = await data.json();
      setUsers(usersData);
      setIsLoading(false);
    };
    fetchUsers();
  }, [id]);

  if (isLoading) {
    return (
      <div className="load loader">
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  const handClick = () => {
    setId((prevId) => (prevId % 10) + 1);
  };

  return (
    <div>
      <button className="change User" onClick={handClick}>
        <MdSwipeRight />
      </button>
      {users.map((user) => {
        return (
          <ProfileUser
            key={user.id}
            User={user.name}
            username={user.username}
            email={user.email}
            image={user.name && user.name.charAt(0).toUpperCase()}
          />
        );
      })}
      <UserPosts userId={id} />
    </div>
  );
};

export default Users;
