import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#61dafb" : "white",
  };

  return (
    <div
      style={styles}
      className="h-24 w-24 border-solid border-black border-[1px] inline-block rounded-md mr-5"
      onClick={props.toggle}
    ></div>
  );
}
