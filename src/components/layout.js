import React from "react"
import Seo from "./Seo"
import Header from "./header/header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Seo></Seo>
      <div className="min-h-screen min-w-full bg-custom-back-black ">
        <div className="container max-w-screen-md z-0">
          <Header></Header>
            {children}
          <Footer></Footer>
         
        </div>
      </div>
    </>
  )
}

export default Layout