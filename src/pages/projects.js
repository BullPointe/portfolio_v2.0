import * as React from "react"

import Layout from "../components/layout"
import ProjectsPage from "../components/project/projectsPage"
import ProjectsQuery from "../hooks/projectsQuery"
import Fade from "react-reveal/Fade"


const Projects = () =>  {

  const data = ProjectsQuery();

  return (
    <Layout>
      <Fade right>
      <ProjectsPage data={data}></ProjectsPage>
      </Fade>
    </Layout>

  );

}

export default Projects;
