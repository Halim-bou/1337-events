import React from "react";
import CardEvent from "./CardEvent";

const events = [
  {
    imgUrl: "https://images-ext-1.discordapp.net/external/e6FiSmhiQo2i6MI-KRVb-Gg78-nMHvOMQkpy-DDSB2c/https/i.imgur.com/hZRH0sr.jpg?format=webp&width=832&height=468",
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

function ListEvents({ maxEvents = 3 }) {
  const eventsToShow = maxEvents === 'all' || maxEvents < 0 ? events : events.slice(0, maxEvents);
  return (
    <div
      className={`max-w-7xl mx-auto md:p-6 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8`}
    >
      {eventsToShow.map((event, index) => (
        <div key={index}>
          <CardEvent event={event} />
        </div>
      ))}
    </div>
  );
}

export default ListEvents;
