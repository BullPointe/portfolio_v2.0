import * as React from "react"

import Layout from "../components/layout"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql,} from 'gatsby';
import { FaLaptopCode } from "react-icons/fa";
import {IoHardwareChipOutline} from "react-icons/io5"
import {BiMicrochip} from "react-icons/bi"
import {AiOutlineCloudServer} from "react-icons/ai"
import {FiDatabase} from "react-icons/fi"
import "../css/about.css";

const AboutPage = ({data}) =>  {
    const sahilImg = getImage(data.portraitImage);
    return (
        <Layout>
            <div className="font-mono">

                <h1 className="text-4xl sm:text-5xl text-custom-sienna text-center mt-4">About Me</h1>
                <p className="text-blue-500 text-center mt-1">in more depth</p>


                <div className=" grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-10 mx-4 sm:mx-2 mt-6">
                    
                    <div className="row-start-2 sm:row-start-1 col-start-1 col-span-full sm:col-span-3 text-gray-300">
                        <p id="title" className="inline-block uppercase p-0 font-bold text-xs border-b-2 border-red-600">Short Biography</p>
                        <p>Start your Gatsby and Tailwind CSS project easily with this Gatsby Starter</p>
                    
                    </div>

                    <div id="bio"className="row-start-1 sm:col-start-4 sm:col-span-3 ">
                        <GatsbyImage image={sahilImg} className="rounded-full ring ring-custom-portrait-pic-border"></GatsbyImage>
                    </div>
                </div> 

                <h1 className="text-custom-orange text-2xl text-center mt-4 font-bold underline">Professional Skillset</h1>

                <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-5 mx-4 sm:mx-2 mt-6">

                    <div className="col-start-1 sm:col-start-1 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <FaLaptopCode id="skillsLogo"></FaLaptopCode>
                        </div>
                       
                        <p id="skillsDesc">Languages</p>
                        <p className="hidden sm:block text-center">C/C++, Java,<br/>Python, Golang, JavaScript, Swift,<br/>Ruby</p>
                        <p className="block sm:hidden text-center">C/C++,Java, Python,Golang, JavaScript, Swift,Ruby</p>

                    </div>

                    <div className="col-start-3 sm:col-start-3 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <BiMicrochip id="skillsLogo"></BiMicrochip>
                        </div>
                       
                        <p id="skillsDesc">Embedded Systems</p>
                        <p className="hidden sm:block text-center">I2C,DMA,SPI,<br/>UART,<br/>NVIDA-CUDA,ESP32</p>
                        <p className="block sm:hidden text-center">I2C,DMA,SPI, UART,<br/>NVIDA-CUDA,<br/>ESP32</p>

                    </div>
                    <div className="col-start-1 sm:col-start-5 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <IoHardwareChipOutline id="skillsLogo"></IoHardwareChipOutline>
                        </div>
                       
                        <p id="skillsDesc">Hardware</p>
                        <p className="hidden sm:block text-center">ASIC Design, SystemVerilog,<br/>PCB Design,<br/>ARMv6-M,RTL,FPGA</p>
                        <p className="block sm:hidden text-center">ASIC Design, SystemVerilog, PCB-Design,<br/>ARMv6-M,RTL, FPGA</p>
                        
                    </div>

                    <div className="col-start-3 sm:col-start-2 col-span-2 text-white">
                         <div id="skillsLogoDiv">
                            <AiOutlineCloudServer id="skillsLogo"></AiOutlineCloudServer>
                        </div>
                       
                        <p id="skillsDesc">Cloud & Containerization</p>
                        <p className="hidden sm:block text-center">Azure,AWS-EC2,Docker, Kubernetes, Jenkins</p>
                        <p className="block sm:hidden text-center">Azure,AWS-EC2, Docker, Kubernetes, Jenkins</p>

                    </div>

                    <div className="col-start-2 sm:col-start-4 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <FiDatabase id="skillsLogo"></FiDatabase>
                        </div>
                       
                        <p id="skillsDesc">Databases</p>
                        <p className="hidden sm:block text-center">SQL,OracleDB,<br/>MongoDB</p>
                        <p className="block sm:hidden text-center">SQL,OracleDB,<br/>MongoDB</p>

                    </div>


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
    
  }
`;






