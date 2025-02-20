import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CardEvent({ event, session = 0 }) {
  return (
    <div className="flex justify-center">
      <Card className="w-95 h-[450px] flex flex-col justify-between">
        <CardHeader
          color="blue-gray"
          className="relative h-56 rounded-md bg-cover mx-2 my-2 object-contain"
          style={{
            backgroundImage: `url(${event.imgUrl})`,
            backgroundSize: "cover", // Makes the background cover the entire element
            backgroundPosition: "center",
          }}
        >
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mt-2 px-3">
            {event.title}
          </Typography>
          <Typography className="px-3 py-2">
            {event.description}
          </Typography>
        </CardBody>
        <CardFooter className="px-5 py-4">
          {session === 0 ? (
            <>
            <Button className="bg-slate-600">Reserve</Button>
            </>
          ):
          (
            <>
            <Button className="bg-slate-600">Read more</Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardEvent;
