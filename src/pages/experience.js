import * as React from "react"

import Layout from "../components/layout"


const ExperiencePage = () => (
  <Layout>

    <div className="flex grid grid-flow-col grid-rows-6 grid-cols-6 gap-4 font-mono"> 

        <div className="row-start-1 row-end-1 col-start-1 col-span-full mt-4 text-center">
            <h1 className="text-3xl sm:text-5xl text-custom-sienna text-center">Experience</h1>
            <p className="text-blue-500 mt-4 col-start-1">full-time & projects</p>
        </div>

        <div className="row-start-2 row-span-4 col-start-1 col-span-3 mt-4 ml-4">
            <h1 className="text-3xl sm:text-5xl text-custom-back-white">About Me</h1>
            <p className="text-blue-500 mt-4 col-start-1">Ayoo</p>
        </div>
    
    </div>

  </Layout>
)

export default ExperiencePage
