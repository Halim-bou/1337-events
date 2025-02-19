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
    <div
      className={`max-w-7xl mx-auto md:p-6 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8`}
    >
      {events.map((event, index) => (
        <div key={index}>
          <CardEvent event={event} />
        </div>
      ))}
    </div>
  );
}

export default ListEvents;
