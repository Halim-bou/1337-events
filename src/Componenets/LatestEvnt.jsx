import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function LatestEvent({event}) {
  return (
    <div className="relative my-20">
      <Card className="max-w-7xl mx-auto md:p-6 p-4 lg:max-h-[60vh] flex-col lg:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-2/5 shrink-0 sm:rounded-md rounded-l-md rounded-r-none"
        >
          <img
            src="https://media-hosting.imagekit.io//4608ad878d1345b1/t%C3%A9l%C3%A9chargement_2.png?Expires=1834637130&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bCBWnsv3oNBd6W-6o~VVEi8LcTNlO0nQc-ojnkZE9bHXzIKOK4a3I-BQMjyQKO8~2cRK2Tjmfp3CWqs0uhracPk6RMAfxVmxQ93bJJsID-fAxbZM4LMfEeMuKxQw7e8v4sHEmiyZQ2qylIDwsd-AJisiKBFGT5GMDOhYxcFBZ37Bq9-YlUCiWgL0LLbLNkhw1hSSU3tuk7TnH0G1lqL2TKAx9Xh9OYE7PoYl-wgXwD7Gi4YuIKGgOSwC2JoR0TeTvPYrA9iQF2Kh0DbgNzNGIFHIamP2QKo3PsiS760PPTy9bvgs6pNpxxkQT5-eBRzgEmvNDJB3ZJMlrQ5W3grbCA__"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="my-4 px-4 uppercase">
            Latest Event
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 px-4 ">
          Times UM6P
          </Typography>
          <Typography color="gray" className="mb-8 px-4 font-normal">
          Times UM6P is the ultimate source for the latest news, insights, and discussions centered around the University Mohammed VI Polytechnic (UM6P) community. Whether you’re a student, faculty member, or part of the broader academic world, Tmes UM6P offers engaging content that dives into university events, research breakthroughs, student life, and much more. Stay connected with us for inspiring stories, thought-provoking articles, and an insider’s view into the dynamic academic environment of UM6P. Join the conversation and explore the world of knowledge and innovation shaping the future at UM6P
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}
