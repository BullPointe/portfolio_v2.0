import * as React from "react"

import Layout from "../components/layout"
import ProjectsPage from "../components/project/projectsPage"
import ProjectsQuery from "../hooks/projectsQuery"


const Projects = () =>  {

  const data = ProjectsQuery();

  return (
    <Layout>
      <ProjectsPage data={data}></ProjectsPage>
    </Layout>

  );

}

export default Projects;
