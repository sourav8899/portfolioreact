import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { Document, Page } from 'react-pdf';
export default function Buttonn() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment>
      <Button onClick={handleOpen}>
        Long Dialog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        
      <div>
      <Document file="CN_Certificate_42368c917271231e.pdf" onLoadSuccess={console.log("hello")}>
        <Page pageNumber={0} />
      </Document>
    
    </div>
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            Save changes
          </Button>
       
      </Dialog>
    </Fragment>
  );
}