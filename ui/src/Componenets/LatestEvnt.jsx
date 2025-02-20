import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function LatestEvent() {
  return (
    <div className="relative my-20">
      <Card className="max-w-7xl mx-auto md:p-6 p-4 lg:max-h-[60vh] flex-col lg:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-2/5 shrink-0 sm:rounded-md rounded-l-md rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="my-4 px-4 uppercase">
            Latest Event
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 px-4 ">
            UM6P Sustainable Development
          </Typography>
          <Typography color="gray" className="mb-8 px-4 font-normal">
            Body text for whatever you’d like to add more to the subheading.
            Body text for whatever you’d like to add more to the subheading.
            Body text for whatever you’d like to add more to the subheading.
            Body text for whatever you’d like to add more to the subheading.
            Body text for whatever you’d like to add more to the subheading.
            Body text for whatever you’d like to add more to the subheading.
            Body text for whatever you’d like to add more to the subheading.
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
