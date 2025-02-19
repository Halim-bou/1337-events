import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CardEvent({event}) {
  return (
    <div className="flex justify-center px-10">
      <Card className="mt-6 w-auto">
      <CardHeader color="blue-gray" className="relative h-56 rounded-md bg-center mx-2 my-2">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mt-2 px-3">
          UI/UX Review Check
        </Typography>
        <Typography className="px-3 py-2">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="px-5 py-4">
        <Button className="bg-slate-600">Read More</Button>
      </CardFooter>
    </Card>
      {/* <div>{event.imgUrl}</div>
      <div>{event.title}</div>
      <div>{event.description}</div> */}
    </div>
  );
}

export default CardEvent;
