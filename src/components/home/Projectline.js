import React, { useMemo } from "react";
import { motion } from 'framer-motion';
import { fashionGallery, jshopGallery, promanGallery } from "../../util/image";
import { BiLinkExternal } from 'react-icons/bi';

function ProjectLine() {

  const projectData = useMemo(() => [
    {
      title: "Fashion Level",
      description: "The e-commerce platform is a modern and efficient solution that provides a seamless shopping experience to customers.",
      explaination: "Which includes Admin-Panel (ReactJS), Android/IOS App (Flutter), and NodeJS/MongoDB backend.",
      createdOn: "October 2022",
      reason: "Client Project",
      gallery: fashionGallery,
      technologies: ["JSX", "React", "Redux toolkit", "Flutter/Dart", "Node JS", "Mongo DB"],
      reversed: true,
      projectLink: "https://fashion-dashboard-ten.vercel.app"
    },
    {
      title: "Proman",
      description: "A advanced todo list with features like Deadline, Drag & Drop, file upload, add member.",
      explaination: "Subtasks within a card can be made with checklists. Tasks can be allocated to several members, so they will be notified of any card changes.",
      gallery: promanGallery,
      createdOn: "March 2020",
      reason: "College Project",
      technologies: ["ReactJS", "JSX", "CSS", "NodeJS", "Express JS", "Mongo DB", "redux"],
      projectLink: "https://proman-frontend.vercel.app"
    },
    {
      title: "JShop",
      description: "An online jewellery shop application created using Django and HTML with SQLite database server.",
      explaination: "It is my first project that i have made which includes backend and database codes also.",
      gallery: jshopGallery,
      createdOn: "January 2019",
      reason: "Personal Project",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "SQLlite"],
      reversed: true
    },
    {
      title: "EMI App"
    }
  ], [])

  return (
    <div className='projects' id="projects">
      <div className="projectContainer">
        <h2 className="sectionHeading">Projects</h2>
        <div className="singleProjectList">
          <SingleProject data={projectData[0]} />
          <SingleProject data={projectData[1]} />
          <SingleProject data={projectData[2]} />
        </div>
      </div>
    </div>
  );
}

const SingleProject = ({ data }) => {
  return (
    <FadeInWhenVisible className="singleProject">
      <div className={`projectGrid ${data?.reversed && "reversed"}`}>


        <div className="imgDiv">
          <img src={data?.gallery[0].img} alt="" />
          <div className="mixGreenBlend"></div>
        </div>


        <div className={`projectDetails ${data?.reversed ? "reversed" : ""}`}>

          <h2 className="projectFeatured">Featured Project</h2>
          <h2 className="projectTitle">{data?.title}</h2>
          <div className="projectDescExp">
            <p className="projectDescription">{data?.description}</p>
            <p className="projectDescription">{data?.explaination}</p>
          </div>

          <div className="projectTechnologies">
            {data?.technologies && data?.technologies.length > 0 &&
              data?.technologies.map((tech_stack, idx) => (
                <p className="technology" key={idx}>{tech_stack}</p>
              ))
            }
          </div>

          <span className="projectCreatedOn selfStart">{data?.createdOn}</span>

          <a href={data?.projectLink ? data?.projectLink : "#projects"}
            target="_blank"
            rel="noreferrer"
            className={` projectVisitLink ${!data?.reversed ? "selfStart" : ""}`}>
            <BiLinkExternal size={18} />
            <span>Visit Now!</span>
          </a>
        </div>

      </div>
    </FadeInWhenVisible>
  )
}

function FadeInWhenVisible({ children, className }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={{
        visible: { opacity: 1, transform: "translateY(0px)" },
        hidden: { opacity: 0, transform: "translateY(150px)" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export default ProjectLine;