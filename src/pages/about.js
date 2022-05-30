import * as React from "react"

import Layout from "../components/layout"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql,} from 'gatsby';
import { FaLaptopCode} from "react-icons/fa";
import {IoHardwareChipOutline} from "react-icons/io5"
import {BiMicrochip} from "react-icons/bi"
import {AiOutlineCloudServer,AiOutlineTool} from "react-icons/ai"
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
                        
                        <div className="h-64 sm:h-80 overflow-y-auto">

                            <p id="bioP" className="text-gray-100">I was born and raised in New Jersey, and it's one of my favorite places 
                                        I call home. I also have lived and spent time in Atlanta, Chicago, and of course
                                        Purdue!
                            </p>            
                            <p id="bioP" className="text-green-500">
                                        Ever since I was young, I've loved to play and watch Soccer! Forza Juve! I am heavily interested in Football and Basketball too!       
                            </p>  
                            <p id="bioP" className="text-blue-500">
                                        As an outdoor person, I tend to find my way to be outside,
                                        whether it's hiking, skiing, kayaking, white-water rafting, ziplining, etc...
                            </p>  
                            <p id="bioP" className="text-pink-500">
                                        I have a deep interest in the stock market, I have been trading equities since I was in 
                                        6th grade. I'm continuously learning about new strategies, better ways of analysis, and
                                        different trading vehicles. 
                            </p>  

                            <p id="bioP" className="text-purple-500">
                                        Professionally, I had always had my eyes set on providing a direct impact on the medical field and critical systems. 
                                        Computer Engineering opens plenty of opportunities to work on the software and hardware aspects of such systems. 
                                        In the future, I hope to work on developing products ranging from implantable to surgical devices.
                            </p>  

                            <p id="bioP" className="text-yellow-500" >
                                        I decided to go to Purdue, to complete my undergraduate degree, and the place has
                                        become a second home for me! The diverse groups of people and the vast amount of knowledge 
                                        the place has to offer has made the entire experience amazing!! As a part of the accelerated 
                                        program at Purdue, I intend to complete my BS + MS in 4.5 years.
                            </p> 

                        </div> 
                    </div>

                    <div id="bio"className="row-start-1 sm:col-start-4 sm:col-span-3 ">
                        <GatsbyImage image={sahilImg} alt="me" imgStyle={{zIndex:'0'}} className="rounded-full ring ring-custom-portrait-pic-border" id="gatsbyImage"></GatsbyImage>
                    </div>
                </div> 

                <h1 className="text-red-100 text-2xl text-center mt-4 font-bold underline">Professional Skillset</h1>

                <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-5 mx-4 sm:mx-2 mt-6">

                    <div className="col-start-1 sm:col-start-1 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <FaLaptopCode id="skillsLogo" className="bg-yellow-400"></FaLaptopCode>
                        </div>
                       
                        <p id="skillsDesc">Languages</p>
                        <p className="hidden sm:block text-center">C/C++, Java,<br/>Python, Golang, JavaScript, Swift,<br/>Ruby</p>
                        <p className="block sm:hidden text-center">C/C++,Java, Python,Golang, JavaScript, Swift,Ruby</p>

                    </div>

                    <div className="col-start-3 sm:col-start-3 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <BiMicrochip id="skillsLogo" className="bg-purple-500"></BiMicrochip>
                        </div>
                       
                        <p id="skillsDesc">Embedded Systems</p>
                        <p className="hidden sm:block text-center">I2C,DMA,SPI,<br/>UART,ESP32<br/>NVIDA-CUDA</p>
                        <p className="block sm:hidden text-center">I2C,DMA,SPI,<br/>UART,<br/>NVIDA-CUDA,<br/>ESP32</p>

                    </div>

                    <div className="col-start-1 sm:col-start-5 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <IoHardwareChipOutline id="skillsLogo" className="bg-red-400"></IoHardwareChipOutline>
                        </div>
                       
                        <p id="skillsDesc">Hardware</p>
                        <p className="hidden sm:block text-center">ASIC Design, SystemVerilog,<br/>PCB Design,<br/>ARMv6-M,RTL,FPGA</p>
                        <p className="block sm:hidden text-center">ASIC Design, SystemVerilog, PCB-Design,<br/>ARMv6-M,RTL,<br/>FPGA</p>
                        
                    </div>


                    <div className="col-start-3 sm:col-start-1 col-span-2 text-white">
                         <div id="skillsLogoDiv">
                            <AiOutlineCloudServer id="skillsLogo" className="bg-pink-400"></AiOutlineCloudServer>
                        </div>
                       
                        <p id="skillsDesc">Cloud & Containerization</p>
                        <p className="hidden sm:block text-center">Azure,AWS-EC2,Docker, Kubernetes,Jenkins</p>
                        <p className="block sm:hidden text-center">Azure,AWS-EC2, Docker, Kubernetes, Jenkins</p>

                    </div>

                    <div className="col-start-1 sm:col-start-3 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <FiDatabase id="skillsLogo" className="bg-blue-400"></FiDatabase>
                        </div>
                       
                        <p id="skillsDesc">Databases</p>
                        <p className="hidden sm:block text-center">SQL,OracleDB,<br/>MongoDB</p>
                        <p className="block sm:hidden text-center">SQL,OracleDB,<br/>MongoDB</p>

                    </div>

                    <div className="col-start-3 sm:col-start-5 col-span-2 text-white">
                        <div id="skillsLogoDiv">
                            <AiOutlineTool id="skillsLogo" className="bg-green-400"></AiOutlineTool>
                        </div>
                       
                        <p id="skillsDesc">Frameworks</p>
                        <p className="hidden sm:block text-center">React,OpenMP,MPI,<br/>Scikit-Learn,GraphQL</p>
                        <p className="block sm:hidden text-center">React,<br/>OpenMP,MPI,<br/>Scikit-Learn,<br/>GraphQL</p>

                    </div>



                </div> 

            
            </div>



        </Layout>
    );
};

export default AboutPage


export const query = graphql`
  query {
    portraitImage: file(relativePath: {eq: "portrait_center.jpg"}) {
      childImageSharp {
        gatsbyImageData(
            quality: 70
            aspectRatio: 1.0
            transformOptions: {cropFocus: CENTER}
            placeholder: BLURRED
          )
      }
    },
    
  }
`;






