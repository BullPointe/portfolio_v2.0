import * as React from "react"

import Layout from "../components/layout"
import "../css/experience.css"
// import { Link} from "react-scroll";

import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  
} from "@material-ui/lab";
import {withStyles,makeStyles} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const TimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none"
    }
  }
})(MuiTimelineItem);

const useStyles = makeStyles({
  h1: {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    // fontWeight: "600",
    fontFamily: "inherit",
  },
  h6:{
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontFamily: "inherit",
  },

});



const ExperiencePage = () => {
  const classes = useStyles();
  return (
    <Layout>

      <div className="flex grid grid-flow-col grid-rows-1 grid-cols-6 gap-4 font-mono"> 

          <div className="row-start-1 row-end-1 col-start-1 col-span-full mt-4 text-center">
              <h1 className="text-4xl sm:text-5xl text-custom-sienna text-center">Experience</h1>
              <p className="text-blue-500 mt-2 col-start-1">full-time & education</p>
          </div>
      </div>

        {/* COOL HEADER OFF EXPERIENCES */}


        {/* TIMELINE CONTENT */}

        <div className="mx-4 text-custom-back-white font-mono">
            <Timeline align="left">
            <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="applecolordot"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div id="Apple">
                    <div className="border-b-4 pb-4">

                      <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>Apple Inc.</Typography>
                      <div id="locationColor">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Cupertino, CA</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-blue-500">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Embedded Software Engineer</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-green-500">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Jan 2023 - Present</Typography>
                      </div> 

                      <div id="bulletDiv">
                       
                        <ul id="bulletP">
                          <li>Silicon Engineering Group <span id="boldApple">(SEG)</span></li>
                          <li>Directed the design and development of an embedded application which <span id="boldApple">dynamically predicts latencies</span> of critical HW IP blocks in real-time,
                              detecting <span id="boldApple">bandwidth starvation, surges, and idling</span>. Enabled for critical workflows, providing detailed HW insights and potential
                              optimizations on <span id="boldApple">data access, caching patterns and bandwidth bottlenecks</span>.</li>
                          <li>Ultimately resulted in a <span id="boldApple">15% caching improvement</span> for key end-user use-cases. Analyzed and eased various <span id="boldApple">bandwidth bottlenecks by 20% </span>
                              through<span id="boldApple"> software pre-fetching algorithms</span> and <span id="boldApple">proposed HW design changes</span>.</li>
                          <li>Designed and implemented a <span id="boldApple">live on-device dashboard</span>, broadcasting <span id="boldApple">performance metrics</span> on multiple HW IPs simultaneously. Allowed for a
                          <span id="boldApple"> comprehensive view </span>and <span id="boldApple">replay capabilities</span> for SoC debugs.</li>
                          <li>Spearheaded the <span id="boldApple">HW bring-up</span> of multiple IP Blocks across a range of SoCs as the <span id="boldApple">Organization’s Subject Matter Expert</span>. Collaborated and
                              iterated with <span id="boldApple">hardware architecture and CoreOS </span> for production use-cases.</li>
                          <li>Led the team in architecting and accelerating a <span id="boldApple">custom large-scale data engineering platform</span>. Improved <span id="boldApple">performance and visualizations speeds by 500%</span>, and <span id="boldApple">memory usage up to 4000%</span>. 
                              Introduced <span id="boldApple">distributed caching schemes</span> and <span id="boldApple">parallel data processing</span> for additional performance gains. Platform speeds and memory profiling surpassed Apache Spark for many of the department's use-cases. </li>
                          <li>Technologies: C/C++, RTOS, ARM, Python, Rust, Distributed System Design.</li>                        
                        </ul>
                       
                      </div> 

                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
              {/* PURDUE */}
            <TimelineItem >
                <TimelineSeparator>
                  <TimelineDot id="purduecolordot"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div id="Purdue">
                    <div className="border-b-4 pb-4">
                      <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>Purdue University</Typography>
                      <div id="locationColor">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>West Lafayette, IN</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-blue-500">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Student</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-green-500">
                        <p className="py-1 font-bold text-xs sm:text-sm">MS Computer Engineering - Fall 2022</p>
                        <p className="font-bold text-xs sm:text-sm">BS Computer Engineering - Fall 2021</p>

                        </div> 
                      <div className="mt-2 mx-1">
                      <p className="text-yellow-400">Teaching Assistant</p>
                      <ul className="pl-4 text-xs text-custom-back-white">
                        <li>ECE 469 GTA - Operating Systems</li>
                        <li>ECE 368 GTA - Data Structures and Algorithms</li>
                        <li>ECE 264 - Advanced C Programming</li>
                        <li>CS 159 - C Programming</li>
                      </ul>
                      </div> 
                      <div className="mt-2 mx-1">
                        <p className="text-yellow-400">Relevant Courses</p>
                        <ul className="pl-4 text-xs text-custom-back-white">
                          <li>ECE 595AA - Applied Algorithms</li>
                          <li>ECE 563 - Programming Parallel Machines</li>
                          <li>ECE 595QC - Quantum Computing</li>
                          <li>ECE 469 - Operating Systems</li>
                          <li>ECE 568 - Embedded Systems</li>
                          <li>ECE 565 - Computer Architecture</li>
                        </ul>
                      </div> 
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
              {/* APPLE */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="applecolordot"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div id="Apple">
                    <div className="border-b-4 pb-4">

                      <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>Apple Inc.</Typography>
                      <div id="locationColor">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Cupertino, CA</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-blue-500">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Embedded Software Engineering Intern</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-green-500">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>May 2022 - Aug 2022</Typography>
                      </div> 

                      <div id="bulletDiv">
                       
                        <ul id="bulletP">
                          <li>On the Silicon Engineering Group <span id="boldApple">(SEG)</span></li>
                          <li>Developed <span id="boldApple"> embedded solutions</span> for analyzing and optimizing performance on Apple <span id="boldApple">SOCs</span>.</li>
                          <li>Worked on an in-house <span id="boldApple">RTOS</span>; Designed features to interface and interact with <span id="boldApple">hardware architecture</span>, primarily to identify/resolve <span id="boldApple">memory bandwidth bottlenecks</span>.</li>
                        </ul>
                       
                      </div> 

                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
              {/* L3 Harris */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="l3harriscolordot"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div id="L3Harris">
                    <div className="border-b-4 pb-4">

                      <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>L3Harris Technologies</Typography>
                      <div id="locationColor">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Melbourne, FL</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-blue-500">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Embedded Software Engineering Intern</Typography>
                      </div> 
                      <div className="mt-2 mx-1 text-green-500">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>May 2021 - Aug 2021</Typography>
                      </div> 

                      <div id="bulletDiv">
                       
                        <ul id="bulletP">
                          <li>Developed <span id="boldL3">embedded solutions</span> on an <span id="boldL3">ARM Controller</span> for upcoming product releases, focusing on <span id="boldL3">optimizing features</span> for better product performance.</li>
                          <li>Worked throughly to integrate custom <span id="boldL3">FPGA hardware</span> with <span id="boldL3">embdeded software</span>.</li>
                          <li>Produced several <span id="boldL3">design reviews</span> and <span id="boldL3">conducted code reviews</span>.</li>
                          <li>In-depth details are confidential as per US Title-18.</li>
                        </ul>
                       
                      </div> 

                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
              {/* AT&T */}
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="attcolordot" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                  <div id="ATT">
                  <div className="border-b-4 pb-4">
                    <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>AT&T</Typography>
                    <div id="locationColor">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Seattle, WA</Typography>
                      </div> 
                    <div className="mt-2 mx-1 text-blue-500">
                      <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Software Engineering Intern</Typography>
                    </div> 
                    <div className="mt-2 mx-1 text-green-500">
                      <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>May 2020 - Aug 2020</Typography>
                    </div>

                    <div id="bulletDiv">
                    
                      <ul id="bulletP">
                        <li>Worked on AMP, internal metadata search engine for applications, reports, and data. Using <span id="boldAtt">predictive analysis </span> and <span id="boldAtt">machine learning models </span> to classify users under personas to improve “relevancy” for search results.</li>
                        <li>Developed an <span id="boldAtt">NLP model</span> to identify abstract “topics” from searches to <span id="boldAtt">improve user experience and search efficiency</span>.</li>
                      </ul>
                 
                    </div> 

                  </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="cmecolordot" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div id="CME">
                  <div className="border-b-0 pb-4">
                    <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>CME Group</Typography>
                    <div id="locationColor">
                        <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Chicago, IL</Typography>
                      </div> 
                    <div className="mt-2 mx-1 text-blue-500">
                      <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>Software Engineering Intern</Typography>
                    </div> 
                    <div className="mt-2 mx-1 text-green-500">
                      <Typography variant="h6" component="h6" classes={{h6:classes.h6}}>May 2019 - Aug 2019</Typography>
                    </div>

                    <div id="bulletDiv">
        
                      <ul id="bulletP">
                        <li>Worked with Order Entry division of the GLOBEX platform. Developed a wrapper and implemented <span id="boldCme">fault tolerance</span> across Market Segment Gateway (MSGW) instances with FT daemons.</li>
                        <li>Implemented a <span id="boldCme">dynamic state sync</span> across all connected distributed systems: <span id="boldCme">client systems</span>,<span id="boldCme"> order entry systems</span>, and <span id="boldCme">matching engine</span>. Improved team’s SDLC by over <span id="boldCme">30% </span>with FT implementation.</li>
                        <li>Developed programs to reduce regression report runtime on <span id="boldCme">AWS EC2</span>.</li>
                        <li>Experienced in <span id="boldCme">SDLC Agile</span> environment working with <span id="boldCme">distributed system architecture</span>.</li>
                        <li>2019 CME CodeUp - Won <span id="boldCme">3rd Place developing an efficient trading algorithm</span> on derivative markets.</li>
                      </ul>

                    </div> 




   
                  </div>   
                  </div>           
                </TimelineContent>
              </TimelineItem>
            
            </Timeline>
        </div> 

    

    </Layout>
  )
}

export default ExperiencePage
