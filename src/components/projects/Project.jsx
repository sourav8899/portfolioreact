import "./file.css"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 import Card from "./Card";
 import Card1 from "./Card1";
export default function Example() {
  const data = [
    {
      label: "WasteWise",
      value: "wastewise",
      app:`A Flutter App`,
      title:`Waste Wise`,
      image:`https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
      desc: `You can say goodbye to the days of wondering what kind of waste you have Just snap a picture of it and our app will identify it for you in a snap ! We can identify everything from paper and plastic to grass and metal`,
      github:`https://github.com/sourav8899/hackthron.git`
    },
    {
      label: "Hire and Seek",
      value: "hire",
      app:`WebApplicaiton`,
      desc: `Job Application made easy with Apply with Seek`,
      image:`https://www.anubhavraj.me/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fraw.githubusercontent.com%252FRajAnubhav%252FHIRE-AND-SEEK%252Fmaster%252Fdrive-download-20230407T174705Z-001%252FMain%252520Page.jpg%3Ftable%3Dblock%26id%3D89d8f67d-45c9-4046-be14-66a227e039d1%26cache%3Dv2&w=2048&q=75`,
      github:`https://github.com/RajAnubhav/HIRE-AND-SEEK`
    },
 
    {
      label: "Authtication page ",
      value: "auth",
      desc: `A scratch made authtication page with the help of node and  mongodb `,
      app:`nodeJs project`,
      image:`https://i.postimg.cc/4NSgfvVv/Untitled.png`,
      github:`https://github.com/Pari-gowda/GFG_Website_Project/tree/login`
   
    },
 
 
];
 
return (
 <div  className="flex justify-center sm:mx-10 small:mx-10 ">

 
<Tabs id="custom-animation" value="wastewise">
<span className="flex justify-center text-3xl font-bold py-5 text-black ">Project</span>
  <TabsHeader >
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody
    animate={{
      initial: { y: 250 },
      mount: { y: 0 },
      unmount: { y: 250 },
    }}
   >
    {data.map(({ value, desc,app,title,image ,github}) => (
      <TabPanel key={value} value={value} >
        {/* <Card desc={desc}type={app} title={title} image={image} github={github}></Card> */}
        <Card1 desc={desc} type={app} title={title}image={image} github={github}></Card1>
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
</div>
); }