import * as React from "react"

import Layout from "../components/layout"
// import { GatsbyImage,} from "gatsby-plugin-image"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql,} from 'gatsby';
import "../css/about.css";

const AboutPage = ({data}) =>  {
    const sahilImg = getImage(data.portraitImage);
    // const desktopImage = getImage(data.desktopImage);

    return (
        <Layout>
            <div className="flex grid grid-flow-col grid-rows-6 grid-cols-6 gap-4 font-sans"> 

                {/* <div className="row-start-1 row-end-2 col-start-1 col-span-full border border-blue-500">
                </div>    */}
                <div className="row-start-1 row-end-1 col-start-1 col-span-full mt-4 text-center">
                    <h1 className="text-3xl sm:text-5xl text-custom-sienna text-center">About</h1>
                    <p className="text-blue-500 mt-4 col-start-1">a little more about me</p>
                </div>

                {/* <div className="row-start-2 "/> */}
                <div className="row-start-2 row-span-4 col-start-1 col-span-3">
                <GatsbyImage image={sahilImg} alt="Sahil" class="m-4 ring-4 ring-red-500 ring-opacity-50"/>
                </div>   

                <div className="row-start-2 row-span-4 col-start-4 col-span-3 mt-4">
                    <h1 className="text-3xl sm:text-5xl text-custom-sienna">About Me</h1>
                    <p className="text-blue-500 mt-4 col-start-1">Ayoo</p>
                </div>

                <div className="row-start-4 row-span-4 col-start-1 col-span-3 mt-4 ml-4">
                    <h1 className="text-3xl sm:text-5xl text-custom-back-white">About Me</h1>
                    <p className="text-blue-500 mt-4 col-start-1">Ayoo</p>
                </div>
            
            </div>

        </Layout>
    );
};

export default AboutPage


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
    desktopImage: file(relativePath: {eq: "desktop.jpeg"}) {
        childImageSharp {
            gatsbyImageData(
                height: 600
                width: 400
                quality: 100
                aspectRatio: 1.5
                transformOptions: {cropFocus: CENTER}
            )
        }
    }
    
  }
`;






