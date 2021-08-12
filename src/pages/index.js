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
                'Software Development',
                'Design Optimization',
                'Distributed Architecture',
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
{/*        
        my love of beautiful websites made me curious 
          about how they were made. after lots of googling, 
          i discovered web development which led to my interest 
          in frontend development. since then, i've been honing my skills and building projects to apply what i've learnt.
         */}
        <p id="indexpagep">currently a <span className="text-green-600">senior </span>
          on track to complete my<span className="text-green-600 "> masters degree </span> 
          at <span className="text-yellow-500"> purdue university </span>
          by <span className="text-green-600 ">fall 2022</span>.
        </p> 
        <p id="indexpagep">
          my curiousity of <span className="text-blue-400">complex system architecture</span> and <span className="text-blue-400">critical applications</span> has made me
          interested working and honing my skills on <span className="text-blue-400">software/hardware</span> applications, focusing  
          on <span className="text-red-400">design optimization</span> and <span className="text-red-400">advanced implementations</span>.
        </p>   

        <p id="indexpagep">
          i'm always interested and love the opportunities to work on 
          <span className="text-custom-darkpurple"> embedded systems</span>, 
          <span className="text-custom-darkpurple"> distributed systems</span>, 
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
  file(name: {eq: "Sahil_Jaganmohan_Resume_2021"}) {
    publicURL
  }
}

`