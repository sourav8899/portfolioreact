import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 import Certificatecard from'./Certificatecard';
export default function Certificate() {
  const data = [
    {
      label: "Coding Ninjas",
      value: "html",
      desc: `
      Completing the Data Structures course at Coding Ninjas improved my coding skills and provided a strong foundation in arrays, linked lists, stacks, queues, trees, heaps, and graphs.`,
    },
    {
      label: "Smart India Hackathon",
      value: "react",
      desc: `Winning the 3rd prize in the Smart Indian hackathon was a great achievement. Our team worked collaboratively to develop a creative solution and showcased our skills in problem-solving, innovation, and teamwork. This experience boosted my confidence in my ability to create impactful projects and work effectively with others. `,
    },
    {
      label: "Tumkur Smartcity Hackathon",
      value: "vue",
      desc: `Winning the first prize in a hackathon for developing a waste segregation system was a thrilling experience. Our team's hard work and innovative approach towards developing an AI-based system to segregate waste efficiently paid off. It was a great learning opportunity and helped us to hone our skills in machine learning, computer vision, and software development. I am proud to have contributed to such a meaningful project that can help to solve environmental challenges.`,
    },
    {
      label: "Azure Fundamentals",
      value: "just",
      desc: `Studying Azure Fundamentals in AI-900 has been an insightful experience. This course provided me with a solid understanding of various Azure services and tools used in AI development. I learned about important AI concepts such as machine learning, natural language processing, and computer vision, and how they can be implemented using Azure services like Azure Machine Learning, Azure Cognitive Services, and Azure Databricks.

      The course also covered best practices for implementing AI projects on Azure and helped me to gain an understanding of the ethical and responsible use of AI. Overall, this course was a valuable addition to my skillset and has enhanced my understanding of AI development on the Azure platform.`,
    },
   
  ];
 
  return (
    <div className="flex justify-center flex-col items-center my-6   sm:mx-10 small:mx-10 ">
      <span className="flex justify-center text-3xl font-bold py-5 text-black "> Certificate</span>
    <Tabs value="html" className="max-w-[40rem]">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-blue-500/10 shadow-none text-blue-500",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
           <Certificatecard></Certificatecard>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
  );
}