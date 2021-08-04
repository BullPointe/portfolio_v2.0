import React,{Component} from "react"

import "../../css/projects.css"
import ProjectDisplayTemplate from "./projectDisplayTemplate";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.projects = this.data[0].projects;
    this.projectsPro = this.projects.professional;
    this.projectsPers= this.projects.personal;
    this.colors = this.data[0].colors;

    this.proButton = React.createRef();
    this.persButton = React.createRef();

    this.proDisplay = React.createRef();
    this.persDisplay = React.createRef();

    this.proButtonClick = this.proButtonClick.bind(this);
    this.persButtonClick = this.persButtonClick.bind(this);


  }

  componentDidMount() {
    // console.log(this.colors);
  }

  proButtonClick() {
    this.proButton.current.id = "button-clicked"
    this.persButton.current.id = "button-regular"

    this.persDisplay.current.style.display = "none"
    this.proDisplay.current.style.display = "block"



  }

  persButtonClick() {
    this.proButton.current.id = "button-regular"
    this.persButton.current.id = "button-clicked"

    this.persDisplay.current.style.display = "block"
    this.proDisplay.current.style.display = "none"

  }


  render() {
    return (
      <>
        <div className="font-mono text-white ">

          <h1 className="text-4xl sm:text-5xl text-custom-sienna text-center mt-5">Projects</h1>
          <p className="text-blue-500 text-center mt-1">stuff i've worked on</p>
          <div className="flex text-center mt-4 justify-center mx-4">
            <button id="button-clicked" ref={this.proButton} onClick={this.proButtonClick}>professional</button>
            <button id="button-regular" ref={this.persButton}onClick={this.persButtonClick}>personal</button>
          </div>


          {/* PROFESSIONAL MAP */}
          <div ref={this.proDisplay} id="projDisplay">
            <div  className="mt-4 mx-2 grid grid-cols-1 sm:grid-cols-2">
                {this.projectsPro.map((node,i) => (
                    <React.Fragment key={"dispOne"+i}>
                    <ProjectDisplayTemplate key="chciken" node={node} colors={this.colors} index={"1_"+i}></ProjectDisplayTemplate>
                    </React.Fragment>
                ))}
            </div>
          </div>

          {/* PERSONAL MAP */}
          <div ref={this.persDisplay} id="projDisplay" className="hidden">
            <div className="mt-4 mx-2 grid grid-cols-1 sm:grid-cols-2">
                {this.projectsPers.map((node,i)=> (
                  <React.Fragment key={"dispTwo"+i}>
                  <ProjectDisplayTemplate key ="chicke" node={node} colors={this.colors} index={"2_"+i}></ProjectDisplayTemplate>
                  </React.Fragment>
                ))}
            </div>
          </div>

          
        </div>
            
            
      </>



    );
  }
}

export default ProjectsPage;