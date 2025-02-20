import React from "react";
import CardEvent from "./CardEvent";

const events = [
  {
    imgUrl: "https://images-ext-1.discordapp.net/external/e6FiSmhiQo2i6MI-KRVb-Gg78-nMHvOMQkpy-DDSB2c/https/i.imgur.com/hZRH0sr.jpg?format=webp&width=832&height=468",
    title: "Green Gallop",
    description:
      "Green Gallop – Join us for an exciting eco-friendly run! Celebrate sustainability and fitness as we race towards a greener future. Lace up, go green, and gallop for the planet!",
  },
  {
    imgUrl: "https://images-ext-1.discordapp.net/external/KDDMfZ3heE6NcvA2XW0OeadAGbntUmNH-QDMgW9jPY0/https/i.imgur.com/ybcOrPz.jpg?format=webp&width=468&height=467",
    title: "Friendly Chess Competition",
    description:
      "Join us for a fun and friendly chess challenge! All skill levels welcome.",
  },
  {
    imgUrl: "https://images-ext-1.discordapp.net/external/mzxv-ZUOs1T4yyczYLDWGOvgZhklPiDI2pmpptsRURs/https/i.imgur.com/6oYjuQY.jpg?format=webp&width=331&height=468",
    title: "Global Game Jam",
    description:
      "The Global Game Jam is an annual event where game developers worldwide create games in 48 hours, collaborating around a shared theme to foster creativity and innovation.",
  },
  {
    imgUrl: "https://images-ext-1.discordapp.net/external/j9036gG8PboFY40wkxyTRiZILhUF5Zd71Km1OD2vbio/https/i.imgur.com/wezxF98.jpg?format=webp&width=468&height=468",
    title: "UM6P Explorer INFO session",
    description:
      "The \"UM6P Explorer INFO Session\" is a brief event to introduce the UM6P Explorer program, covering its opportunities, application process, and benefits. It’s a great chance to learn more and connect with program representatives.",
  },
  {
    imgUrl: "https://images-ext-1.discordapp.net/external/6cO8jMgFUre5Ix9DdOk7buXTR9edDJtSiGMEb18Ltg8/https/i.imgur.com/FC0jpbt.jpg?format=webp&width=832&height=468",
    title: "Give Blood Give Life",
    description:
      "Give Blood, Give Life is a charitable event aimed at encouraging individuals to donate blood and help save lives. It emphasizes the vital role of blood donations in supporting patients in need of medical care, highlighting the simple yet impactful act of giving blood as a way to make a difference in someone's life.",
  },
  {
    imgUrl: "https://images-ext-1.discordapp.net/external/Phxyjyjn0gMyLTytYBxrdKsaMy8y9qxd3fdjXPFD9q0/https/i.imgur.com/PKilsH2.jpg?format=webp&width=374&height=467",
    title: "Shadowing Day",
    description:
      "Shadowing Day is an opportunity for individuals to observe and learn from experienced professionals in their field. Participants will follow mentors throughout their day to gain firsthand insight into their roles, tasks, and responsibilities, enhancing their understanding of the job and industry.",
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
