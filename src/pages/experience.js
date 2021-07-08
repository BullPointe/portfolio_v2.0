import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import "../css/experience.css"


const ExperiencePage = () => (
  <Layout>

    <div className="flex grid grid-flow-col grid-rows-1 grid-cols-6 gap-4 font-mono"> 

        <div className="row-start-1 row-end-1 col-start-1 col-span-full mt-4 text-center">
            <h1 className="text-3xl sm:text-5xl text-custom-sienna text-center">Experience</h1>
            <p className="text-blue-500 mt-4 col-start-1">full-time & projects</p>
        </div>
    </div>

      <div className="mt-4 mx-4 font-mono text-custom-back-white flex-row overflow-x-scroll whitespace-nowrap">
        {/* <div className="overflow-x-auto"> */}
          <div className="block w-3/4 flex justify-around">
            <Link id="expbutton" className="w-1/4" to="#CME">CME Group<br/>2019</Link>
            
            <Link id="expbutton" className="w-1/4" to="#ATT">AT&T<br/>2020</Link>
            <Link id="expbutton" className="w-1/4" to="#L3Harris">L3Harris<br/>2021</Link>
          </div>
          
          <div className="block mt-2 pb-4">
                <Link id="expbutton" className="inline-block w-3/4" to="#PurdueBS">Purdue University<br/>BS Computer Engineering<br/>2018-2021</Link>
                <Link id="expbutton" className="inline-block w-3/4" to="#PurdueMS">Purdue University<br/>MS Computer Engineering<br/>2022</Link>
                      
          </div>
          

        {/* </div> */}
      </div>
    
    <section id="L3Harris" className="font-mono">
        <div className="mt-4 mx-4 border-t-4 border-gray-100">
            <h1 className="m-4 text-3xl sm:text-3xl text-custom-back-white font-semibold">L3Harris Technologies</h1>
            <p className="mx-4 text-xs text-blue-500 mt-4">Embedded Software Engineering Intern</p>
        </div>
    </section>

    <section id="ATT" className="font-mono">
        <div className="mt-4 mx-4 border-t-4 border-gray-100">
            <h1 className="m-4 text-3xl sm:text-3xl text-custom-back-white font-semibold">AT&T</h1>
            <p className="mx-4 text-xs text-blue-500 mt-4 col-start-1">Software Engineering Intern</p>
        </div>
    </section>

    <section id="CME" className="font-mono">
        <div className="mt-4 mx-4 border-t-4 border-gray-100">
            <h1 className="m-4 text-3xl sm:text-3xl text-custom-back-white font-semibold">CME Group</h1>
            <p className="mx-4 text-xs text-blue-500 mt-4 col-start-1">Software Engineering Intern</p>
        </div>
    </section>

  </Layout>
)

export default ExperiencePage
