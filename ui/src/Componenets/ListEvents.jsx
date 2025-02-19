import React from "react";
import CardEvent from "./CardEvent";

const events = [
  {
    imgUrl: "",
    title: "UM6P Sustainable Development",
    description:
      "Body text for whatever you’d like to add more to the subheading. ",
  },
  {
    imgUrl: "",
    title: "UM6P Sustainable Development",
    description:
      "Body text for whatever you’d like to add more to the subheading. ",
  },
  {
    imgUrl: "",
    title: "UM6P Sustainable Development",
    description:
      "Body text for whatever you’d like to add more to the subheading. ",
  },
];

function ListEvents() {
  return (
    <div className={`flex justify-between gap-5}`}>
      {events.map((event, index) => (
        <div key={index}>
          <CardEvent event={event} />
        </div>
      ))}
    </div>
  );
}

export default ListEvents;
