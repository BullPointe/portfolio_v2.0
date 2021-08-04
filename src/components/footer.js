import { Link } from "gatsby"
import React from "react"
import {FaMailchimp,FaFileInvoice,FaGithubAlt,FaLinkedin,FaHome} from "react-icons/fa"

import "../css/footer.css"

const Footer = () => {
  return (
    <>
    <footer className="mt-5 pb-4 text-gray-600 text-xs font-mono border-t mx-3">
            
           
            <div className=" flex justify-center my-4">
              <a href="/" aria-label="Mail"><FaMailchimp id="footerLinks" className="bg-pink-700"/></a>
              <a href="/" aria-label="Linkedin"><FaLinkedin id="footerLinks" className="bg-blue-700"/></a>
              <Link to="/" aria-label="Home"><FaHome id="footerLinks" className="bg-yellow-700"/></Link>
              <a href="/" aria-label="Github"><FaGithubAlt id="footerLinks" className="bg-green-700"/></a>
              <a href="/" aria-label="Resume"><FaFileInvoice id="footerLinks" className="bg-purple-700"/></a>
            </div>

            <div className="text-center">
              &copy; Sahil Jaganmohan {new Date().getFullYear()}
            </div>
    </footer>
     
    </>
  )
}


export default Footer