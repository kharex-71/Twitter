import React, { useState, useEffect } from "react";
import "./example.css";
import { MdEditSquare } from "react-icons/md";
const url = "https://api.github.com/users/mojombo";

const Example = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((rsp) => {
        if (rsp.status >= 200 && rsp.status <= 299) {
          return rsp.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          setUser(rsp.status);
        }
      })
      .then((user) => {
        setUser(user.name);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{`Error: ${user}`}</h1>;
  }

  const someFunction = () => {
    console.log("hello");
  };

  return (
    <div className="news-feed">
      <button className="" type="button" onClick={() => someFunction}>
        <MdEditSquare />
      </button>
      <h1>{user}</h1>
    </div>
  );
};

export default Example;
