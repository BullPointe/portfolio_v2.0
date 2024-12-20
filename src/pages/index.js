import * as React from "react"
import {Link,graphql} from "gatsby"
import Typewriter from "typewriter-effect";

import Layout from "../components/layout"

import "../css/index.css"

const IndexPage = ({data}) => (
  <Layout>
  <main id="indexpagemain">
        <p className="px-4 mt-3 text-lg sm:text-sm text-custom-back-white">Hey! <span role="img" aria-label="wave" className="wave">👋🏼</span> i'm</p>
        <h1 className="italic px-3 text-5xl sm:text-5xl mt-4 text-left text-custom-sienna font-bold">
          Sahil Jaganmohan 
        </h1>

       
        <div id="indexpagep">
          i'm a <span className="text-custom-vscode-blue">computer engineer </span> 
          <span>specializing in </span> 


          <span className="text-red-500 inline-block">
           <Typewriter 
            options={{
              strings: [
                'Embedded Systems',
                'Edge Computing',
                'Design Optimization',
                'Robotic Automation',
                'Software Engineering',
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 80,
              pauseFor: 2000,
            }}
           />

          </span>.
        </div>
        <p id="indexpagep">currently an <span className="text-green-600">Embedded Software Engineer </span>
          at <Link to="/experience"><span className="text-yellow-500 underline">Apple</span></Link> since
          <span className="text-green-600 "> Jan 2023</span>.
        </p> 
        <p id="indexpagep">
          my curiosity of <span className="text-blue-400">complex system architecture</span> and <span className="text-blue-400">critical applications</span> has encouraged me to delve into <span className="text-blue-400">software/hardware</span> applications, focusing  
          on <span className="text-red-400">design optimization</span> and <span className="text-red-400">advanced algorithms</span>.
        </p>   

        <p id="indexpagep">
          i'm always interested in opportunities related to
          <span className="text-custom-darkpurple"> embedded systems</span>, 
          <span className="text-custom-darkpurple"> real-time/critical systems</span>, 
          <span className="text-custom-darkpurple"> algorithm design</span>, 
          and 
          <span className="text-custom-darkpurple"> SW/HW optimization</span>.


        </p>
        <p id="indexpagep">
            i've built some cool stuff too: <Link to="/projects"><span className="underline text-indigo-400">projects</span></Link> and <a href="https://github.com/bullpointe"><span className="underline text-custom-green">my github</span></a>.
        </p>     
        <p id="indexpagep">
            take a look at <a href={data.file.publicURL} target="_blank" rel="noopener noreferrer"><span className="underline text-pink-500">my resume</span></a>.
        </p>        
             
  </main>
  </Layout>
)

export default IndexPage

export const query = graphql`
query resumeQuery {
  file(name: {eq: "Sahil_Jaganmohan_Resume_2025"}) {
    publicURL
  }
}

`