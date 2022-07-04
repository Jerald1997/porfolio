import { useState } from "react";
import BigCard from "./component/BigCard";
import Card from "./component/Card";
import Greeting from "./component/Greeting";
import BCCompPic from "./component/BCCompPic";

import { FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

function App() {
  const [dispComponent, setDispComponent] = useState(<BCCompPic />);

  const labels = [
    {
      name: "Personal and Contact Details",
      logo: <FaUser size={85} />,
      component: "person",
    },
    {
      name: "Educational Background",
      logo: <FaGraduationCap size={85} />,
      component: "education",
    },
    {
      name: "Skills",
      logo: <FaBrain size={85} />,
      component: "skill",
    },
    {
      name: "Work Experience",
      logo: <FaCogs size={85} />,
      component: "experience",
    },
  ];

  return (
    <div className="h-screen w-auto m-2 grid gap-2 grid-rows-[200px_1fr_90px] md:grid-cols-2 md:grid-template-rows-none">
      <section className="flex flex-wrap">
        <Greeting />
      </section>
      <section className="h-auto row-span-2">
        <BigCard comp={dispComponent} />
      </section>
      <section className=" h-auto w-full flex items-center justify-center mb-2">
        <div className="grid grid-cols-4 md:grid-cols-2 w-full md:w-96 md:gap-5">
          {labels.map((item) => (
            <Card
              key={item.component.toString()
              }
              logo={item.logo}
              name={item.name}
              defaultDisplay={() => setDispComponent(<BCCompPic />)}
              hoverDisplay={() => setDispComponent(item.component)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
