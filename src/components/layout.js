import React from "react"
import Seo from "./Seo"
import Header from "./header/header"

const Layout = ({ children }) => {
  return (
    <>
      <Seo></Seo>
      <div className="min-h-screen min-w-full bg-custom-back-black ">
        <div className="container max-w-screen-md z-0">
          <Header></Header>
          {children}
          <footer className="py-2 text-center text-gray-600 text-xs font-mono">
            &copy; Sahil Jaganmohan 2021
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout