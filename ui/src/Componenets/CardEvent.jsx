import React from "react";

function CardEvent({event}) {
  return (
    <div cla>
      <div>{event.imgUrl}</div>
      <div>{event.title}</div>
      <div>{event.description}</div>
    </div>
  );
}

export default CardEvent;
