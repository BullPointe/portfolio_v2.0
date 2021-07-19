import * as React from "react"

import Layout from "../components/layout"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql,} from 'gatsby';
import "../css/about.css";

const ProjectsPage = ({data}) =>  {
    return (
        <Layout>
            <div className="font-mono">

                <h1 className="text-4xl sm:text-5xl text-custom-sienna text-center mt-5">Projects</h1>
                <p className="text-blue-500 text-center mt-1">stuff i've worked on</p>
               
            
            </div>



        </Layout>
    );
};

export default ProjectsPage;


export const query = graphql`
  query {
    portraitImage: file(relativePath: {eq: "portrait.jpg"}) {
      childImageSharp {
        gatsbyImageData(
            quality: 100
            aspectRatio: 1.0
            transformOptions: {cropFocus: CENTER}
            placeholder: BLURRED
          )
      }
    },
    
  }
`;






