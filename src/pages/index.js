import * as React from "react"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
  <main id="indexpagemain">
        <p id="indexpagep">Hey! <span role="img" aria-label="wave">👋 </span> i'm</p>
        <h1 className="px-3 text-5xl mt-4 text-left text-custom-sienna font-bold sm:text-31xl">
          Sahil Jaganmohan 
        </h1>
        <p id="indexpagep">
          i'm a <span className="text-custom-orange">frontend developer</span> <span className="text-custom-gray">from nigeria.</span></p>
        <p id="indexpagep">
          my love of beautiful websites made me curious about how they were made. after lots of googling, i discovered web development which led to my interest in frontend development. since then, i've been honing my skills and building projects to apply what i've learnt.
        </p> 
        <p id="indexpagep">
          my technical skills includes
          <span className="text-custom-purple"> html & css, javascript, react, gatsby, eleventy, git, graphql
          </span>
        </p>   
        <p id="indexpagep">
            i've built a few other cool stuffs too,<span className="text-custom-green"> checkout my github</span>
        </p>     
        <p id="indexpagep">
            take a look at ,<span className="text-custom-green"> my resume</span>
        </p>        
      

        <p id="indexpagep">
          Start your Gatsby and Tailwind CSS project easily with this Gatsby
          Starter
        </p>         
  </main>
  </Layout>
)

export default IndexPage
