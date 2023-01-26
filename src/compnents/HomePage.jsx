import React, { useRef } from "react";

const HomePage = ({ setUserName }) => {
  const inputRef = useRef();

  const handleStart = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };

  return (
    <div className="homePage">
      <input
        placeholder="Enter Your Name"
        ref={inputRef}
        className="userNameInput"
      />
      <button className="startBtn" onClick={() => handleStart()}>
        Play
      </button>
    </div>
  );
};

export default HomePage;
