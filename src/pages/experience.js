import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import "../css/experience.css"

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
  p:{
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }

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

        <div className="mt-6 mx-4 font-mono text-custom-back-white flex-row overflow-x-scroll whitespace-nowrap">
            <div className="block w-3/4 sm:w-1/2 flex justify-evenly font-medium">
              <Link id="expbutton" className="sm:w-1/8 my-auto text-sm  sm:text-base whitespace-normal bg-custom-logo-cme-back text-black" to="#CME">CME Group<br/>2019</Link>
              
              <Link id="expbutton" className="sm:w-1/8 my-auto text-sm  sm:text-base text-center bg-custom-logo-att-back text-black" to="#ATT">AT&T<br/>2020</Link>
              <Link id="expbutton" className="sm:w-1/8 my-auto text-sm sm:text-base whitespace-normal bg-custom-logo-l3harris-back text-custom-logo-l3harris-front" to="#L3Harris">L3 Harris<br/>2021</Link>
            </div>
            
            <div className="block mt-2 pb-4">
                  <Link id="expbutton" className="inline-block w-3/4 sm:w-1/2 bg-custom-logo-purdue-back text-custom-logo-purdue-front" to="#PurdueBS">Purdue University<br/>BS Computer Engineering<br/>2018-2021</Link>
                  <Link id="expbutton" className="inline-block w-3/4 sm:w-1/2 bg-custom-logo-purdue-back text-custom-logo-purdue-front" to="#PurdueMS">Purdue University<br/>MS Computer Engineering<br/>2021-2022</Link>
                        
            </div>
        </div>

        <div className="mx-4 text-custom-back-white font-mono">
            <Timeline align="left">
            <TimelineItem >
                <TimelineSeparator>
                  <TimelineDot id="purduecolordot"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="border-b-4 pb-4">
                    <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>Purdue University</Typography>
                    <div className="mt-2 mx-1 text-blue-500">
                      <Typography variant="p" component="p" classes={{p:classes.p}}>Student</Typography>
                    </div> 
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="l3harriscolordot"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="border-b-4 pb-4">
                    <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>L3Harris Technologies</Typography>
                    <div className="mt-2 mx-1 text-blue-500">
                      <Typography variant="p" component="p" classes={{p:classes.p}}>Embedded Software Engineering Intern</Typography>
                    </div> 
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="attcolordot" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="border-b-4 pb-4">
                    <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>AT&T</Typography>
                    <div className="mt-2 mx-1 text-blue-500">
                      <Typography variant="p" component="p" classes={{p:classes.p}}>Software Engineering Intern</Typography>
                    </div> 
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot id="cmecolordot" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="border-b-0 pb-4">
                    <Typography variant="h1" component="h1" classes={{h1:classes.h1}}>CME Group</Typography>
                    <div className="mt-2 mx-1 text-blue-500">
                      <Typography variant="p" component="p" classes={{p:classes.p}}>Software Engineering Intern</Typography>
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
