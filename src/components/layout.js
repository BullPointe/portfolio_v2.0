import React from "react"
import Seo from "./seo"
import Header from "./header/header"
import Footer from "./footer"
import Fade from "react-reveal/Fade"

const Layout = ({ children }) => {
  return (
    <>
      <Seo></Seo>
      <div className="min-h-screen min-w-full bg-custom-back-black ">
        <div className="container max-w-screen-md z-0">
          
            <Header></Header>
      
            <Fade right cascade>
            {children}
            </Fade>
            <Footer></Footer>
            
         
        </div>
      </div>
    </>
  )
}

export default Layout