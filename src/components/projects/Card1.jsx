import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
   
  export default function Card1(props) {
    return (
      <Card className="flex-row w-full max-w-[50rem] sm:max-w-[40rem] sm:max-h-[30rem]   ">
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none sm:hidden">
          <img 
            src={props.image} 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className="uppercase mb-4">{props.title}</Typography>
          <Typography variant="h4" color="blue-gray"  className="mb-2 sm:mb-1 sm:text-sm">
         {props.type}
          </Typography>
          <Typography color="gray" className="font-normal mb-8 sm:mb-2 sm:text-sm">
           {props.desc}
          </Typography>
          <a href={props.github} className="inline-block">
            <Button variant="text" className="flex items-center gap-2" >
             <span className="sm:text-xs"> Find Github Repo</span>
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }