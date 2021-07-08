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
                    <h1 className="text-5xl sm:text-5xl text-custom-sienna text-center">About Me</h1>
                    <p className="text-blue-500 mt-2 col-start-1">in more depth</p>
                </div>

                <div className="row-start-2 row-span-3 col-start-1 col-span-full border border-gray-100 md:mx-0 mx-4 rounded-xl"/>

                <div className="row-start-2 row-span-2 col-start-2 col-end-6
                                md:row-start-2 md:row-span-3 md:col-start-1 md:col-span-5">
                <GatsbyImage image={sahilImg} alt="Sahil" class="m-4 rounded-xl md:rounded-xl ring-4 ring-red-500 ring-opacity-50"/>
                </div>   

                <div className="row-start-4 row-span-1 col-start-1 col-span-full text-center
                                md:row-start-2 md:row-span-3 md:col-start-4 md:col-span-3 md:text-left 
                                mt-0 md:mt-4">
                    <h1 className="text-3xl sm:text-5xl text-custom-sienna">About Me</h1>
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






