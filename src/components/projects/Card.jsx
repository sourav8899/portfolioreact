import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
   
  export default function Example(props) {
    return (
      <Card className="max-w-[24rem] max-h-[2rem]: overflow-hidden  mx-8">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={props.image}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
         {props.type}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
           {props.desc}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
        <a href={props.github} className="inline-block">
            <Button variant="text" className="flex items-center gap-2" >
              Find Github Repo
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    );
  }