import React, { useState } from "react";
{/* <circle cx="227.59" cy="175.9" r="13.3"
          className="plineCircle1"
          onClick={() => {
            setShowProject(!showProject);
            setShowProjectNo(1)
          }}
        >
        </circle> */}
function ProjectLine() {
  const [showProject, setShowProject] = useState(false)
  const [showProjectNo, setShowProjectNo] = useState(1)
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
        <path d="M723.45 177.02L246.81 177.02" className="plinePath"></path>
        <path
          d="M147.85 12.11V80.9a108.23 108.23 0 00108.23 108.23h98.64M393.2 188v1.12a19.25 19.25 0 01-38.44 0V188a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle cx="227.59" cy="175.9" r="13.3" className="plineCircle"
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(1)
          }}></circle>
        <path
          d="M1217.3 396.36v1.12a19.25 19.25 0 01-38.44 0v-1.12a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle
          cx="1051.69" cy="384.25" r="13.3" className="plineCircle"
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(2)
          }}
        ></circle>
        <path
          d="M908.32 189.13v1.12a19.25 19.25 0 01-38.44 0v-1.12a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle cx="742.71" cy="177.02" r="13.3" className="plineCircle"
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(3)
          }}
        ></circle>
        <path
          d="M692.54 590.86V592.12a19.25 19.25 0 01-38.44 0v-1.27a19.26 19.26 0 0138.52 0z"
          className="plinePath"
          transform="translate(-146.35 -12.11)"
        ></path>
        <circle cx="526.93" cy="578.9" r="13.3" className="plineCircle"
          onClick={() => {
            setShowProject(true);
            setShowProjectNo(4)
          }}
        ></circle>
      </svg>

      {
        (showProject && showProjectNo === 1) && (
          <div className="singleProject">
            dfhgfdh
          </div>
        )
      }
      {
        (showProject && showProjectNo === 3) && (
          <div className="singleProject">
            dfhdf
          </div>
        )
      }
      {
        (showProject && showProjectNo === 2) && (
          <div className="singleProject">
            fdh
          </div>
        )
      }
      {
        (showProject && showProjectNo === 4) && (
          <div className="singleProject">
            dfhdf
          </div>
        )
      }
    </div>
  );
}

export default ProjectLine;