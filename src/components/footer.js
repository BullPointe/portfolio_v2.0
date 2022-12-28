import { Link } from "gatsby"
import React from "react"
import {FaMailBulk,FaFileInvoice,FaGithubAlt,FaLinkedin,FaHome} from "react-icons/fa"

import "../css/footer.css"
import GetFooterDeatils from "../hooks/footerQuery"

const Footer = () => {
  const data = GetFooterDeatils();
  return (
    <>
    <footer className="mt-5 pb-4 text-gray-600 text-xs font-mono border-t mx-3">
            
           
            <div className=" flex justify-center my-4">
              <a href="mailto:dev.sahil.jaganmohan@gmail.com" aria-label="Mail"><FaMailBulk id="footerLinks" className="bg-pink-700"/></a>
              <a href="https://www.linkedin.com/in/sahil-jaganmohan" aria-label="Linkedin"><FaLinkedin id="footerLinks" className="bg-blue-700"/></a>
              <Link to="/" aria-label="Home"><FaHome id="footerLinks" className="bg-yellow-700"/></Link>
              <a href="https://github.com/bullpointe" aria-label="Github"><FaGithubAlt id="footerLinks" className="bg-green-700"/></a>
              <a href={data.file.publicURL} aria-label="Resume" target="_blank" rel="noopener noreferrer"><FaFileInvoice id="footerLinks" className="bg-purple-700"/></a>
            </div>

            <div className="text-center">
              &copy; Sahil Jaganmohan {new Date().getFullYear()}
            </div>
    </footer>
     
    </>
  )
}


export default Footer