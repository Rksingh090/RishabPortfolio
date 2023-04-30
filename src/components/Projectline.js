import React, { useMemo, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IoMdClose } from 'react-icons/io'
import { AnimatePresence, motion } from 'framer-motion'
import { fashionGallery, jshopGallery, promanGallery } from "../util/image";
import { useHome } from "../context/HomeContext";

function ProjectLine() {
  const [showProject, setShowProject] = useState(false)
  const [showProjectNo, setShowProjectNo] = useState(1)

  const { onHoverEnd, onHoverStart } = useHome();

  const projectData = useMemo(() => [
    {
      title: "JShop",
      description: "An online jewellery shop application created using Django and HTML with SQLite database server.",
      explaination: "It is my first project that i have made which includes backend and database codes also.",
      gallery: jshopGallery,
      createdOn: "January 2019",
      reason: "Personal Project",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "SQLlite"]
    },
    {
      title: "Proman",
      description: "A advanced todo list with features like Deadline, Drag & Drop, file upload, add member.",
      explaination: "Subtasks within a card can be made with checklists. Tasks can be allocated to several members, so they will be notified of any card changes.",
      gallery: promanGallery,
      createdOn: "March 2020",
      reason: "College Project",
      technologies: ["ReactJS", "JSX", "CSS", "NodeJS", "Express JS", "Mongo DB", "redux", "redux-thunk"],
      projectLink: "https://proman-frontend.vercel.app"
    },
    {
      title: "Fashion Level",
      description: "The e-commerce platform is a modern and efficient solution that provides a seamless shopping experience to customers.",
      explaination: "Which includes Admin-Panel (ReactJS), Android/IOS App (Flutter), and NodeJS/MongoDB backend.",
      createdOn: "October 2022",
      reason: "Client Project",
      gallery: fashionGallery,
      technologies: ["JSX", "React", "Redux toolkit", "Flutter/Dart", "Node JS", "Mongo DB"]
    },
    {
      title: "EMI App"
    }
  ], [])

  return (
    <div className="plineContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 1072.45 736.51"
      >
        <path
          d="M538.57 748.62v-68.79a89 89 0 0189-89H654M1198 415.62v86.27a89 89 0 01-89 89H692.54M908.32 189.13h181.49A108.23 108.23 0 011198 297.36v79.74"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <path d="M723.45 177.02L246.81 177.02"

          className="plinePath"></path>
        <path
          d="M147.85 12.11V80.9a108.23 108.23 0 00108.23 108.23h98.64M393.2 188v1.12a19.25 19.25 0 01-38.44 0V188a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle cx="227.59" cy="175.9" r="13.3"
          className="plineCircle"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(1)
          }}></circle>
        <text className="plineTxt1" x="165" y="220">
          January, 2019
        </text>
        <text className="plineTxt2" x="205" y="250">
          JShop
        </text>
        <path
          d="M1217.3 396.36v1.12a19.25 19.25 0 01-38.44 0v-1.12a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle
          cx="1051.69" cy="384.25" r="13.3" className="plineCircle"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(3)
          }}
        ></circle>
        <text className="plineTxt1" x="685" y="220">
          March, 2020
        </text>
        <text className="plineTxt2" x="710" y="250">
          Proman
        </text>
        <path
          d="M908.32 189.13v1.12a19.25 19.25 0 01-38.44 0v-1.12a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle cx="742.71" cy="177.02" r="13.3" className="plineCircle"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(2)
          }}
        ></circle>
        <text className="plineTxt1" x="890" y="375">
          October, 2022
        </text>
        <text className="plineTxt2" x="900" y="405">
          Fashion Level
        </text>
        <path
          d="M692.54 590.86V592.12a19.25 19.25 0 01-38.44 0v-1.27a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle cx="526.93" cy="578.9" r="13.3" className="plineCircle"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(4)
          }}
        ></circle>
        <text className="plineTxt1" x="455" y="545">
          February, 2023
        </text>
        <text className="plineTxt2" x="490" y="515">
          EMI App
        </text>
      </svg>

      <div className="plineHint">
        Click On the Dots to see projects
      </div>
      <AnimatePresence>
        {
          (showProject && showProjectNo === 1) && (
            <SingleProject data={projectData[0]} onClose={() => setShowProject(false)} />
          )
        }
        {
          (showProject && showProjectNo === 2) && (
            <SingleProject data={projectData[1]} onClose={() => setShowProject(false)} />
          )
        }
        {
          (showProject && showProjectNo === 3) && (
            <SingleProject data={projectData[2]} onClose={() => setShowProject(false)} />
          )
        }
        {
          (showProject && showProjectNo === 4) && (
            <SingleProject data={projectData[3]} onClose={() => setShowProject(false)} />
          )
        }
      </AnimatePresence>
    </div>
  );
}

const SingleProject = ({ onClose, data }) => {
  return (
    <motion.div _dragX={200}
      initial={{ left: "-400px", opacity: 0 }}
      animate={{ left: "50%", opacity: 1 }}
      exit={{ left: "150%", opacity: 0 }} className="singleProject">
      <div className="projectGrid">
        <Splide
          className="splideSlider"
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            arrows: false,
            pagination: true,
            autoplay: true,
            interval: 2000
          }}>
          {data?.gallery && data.gallery.length > 0 &&
            data.gallery.map((imageData, idx) => (
              <SplideSlide key={idx} className="splideSlide">
                <img src={imageData?.img} alt={imageData?.altText} />
              </SplideSlide>
            ))}
        </Splide>
        <div className="projectDetails">
          <div className="projectMeta">
            <h2 className="projectTitle">{data?.title}</h2>
            <p className="projectDescription">{data?.description}</p>
            <p className="projectDescription">{data?.explaination}</p>
          </div>

          <div className="projectFooter">
            <div className="projectDates">
              <h4>Created On</h4>
              <p className="projectTimeline">{data?.createdOn}, {data?.reason}</p>
            </div>

            <div className="projectTechnologies">
              {data?.technologies && data?.technologies.length > 0 &&
                data?.technologies.map((tech_stack, idx) => (
                  <p className="technology" key={idx}>{tech_stack}</p>
                ))
              }
            </div>
            <a href={data?.projectLink ? data?.projectLink : "#projects"} target="_blank" rel="noreferrer" className="projectVisitLink">Visit Now</a>
          </div>

        </div>
      </div>
      <div className="closeProject" onClick={onClose}><IoMdClose /></div>
    </motion.div>
  )
}

export default ProjectLine;