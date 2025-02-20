import Hero from "../Hero";
import LatestEvent from "../LatestEvnt";
import ListEvents from "../ListEvents";
import Sponsors from "../Sponsors";
import ListBlogs from "../ListBlogs";

export default function Home() {
	return (
		<>
		<Hero />
        <div>
          <div>
            <p className=" max-w-7xl mx-auto md:p-6 p-4   text-3xl mt-20 relative ">Upcoming Events</p>
          </div>
          <ListEvents />
        </div>
        <LatestEvent />
        <div>
          <div>
            <p className=" max-w-7xl mx-auto md:p-6 p-4 text-3xl px-10 relative">Blogs & Articles</p>
          </div>
          <ListBlogs />
        </div>
        <Sponsors />
		</>
	);
}
