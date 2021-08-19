import React,{Component} from "react"
import { Link } from "gatsby"
import {FaBars} from "react-icons/fa"
import {GiCrossedSabres} from "react-icons/gi"
import "./headerstyle.css"
import logo from "./bitmoji.webp"

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
    // this.clickLink = this.clickLink.bind(this);

    this.homeLinkRef = React.createRef();
    this.experienceLinkRef = React.createRef();
    this.aboutLinkRef = React.createRef();
    this.projectsLinkRef = React.createRef();
    //TODO: PROP IMAGE STATIC QUERY
  }

  componentDidMount() {
    var path = window.location.pathname;
    var temp = null;
    if(path === "/") {
      temp = this.homeLinkRef;
    }
    else if(path.includes("/experience")) {
      temp = this.experienceLinkRef;
    }
    else if(path.includes("/about")) {
      temp = this.aboutLinkRef;
    }
    else if(path.includes("/projects")) {
      temp = this.projectsLinkRef;
    }

   
    temp.current.id = "menu-link-selected";
  }

  openNav() {
    this.myRef.current.style.height = "100%";
  }

  closeNav() {
    this.myRef.current.style.height = "0%";
  }

  render(){
    return (
      <>
      <div id="myNav" ref={this.myRef}>
        
        <div className="flex min-h-screen justify-center items-center">
      
          {/* <div className="absolute top-0"> */}
                  
          {/* </div> */}

          <div className="text-center">
                  <button id ="closebttn" onClick={this.closeNav}>
                                <GiCrossedSabres></GiCrossedSabres>
                  </button>
                {/* <div className="p-10 bg-gray-500 rounded-lg"> */}
                  <Link id="menu-links" ref={this.homeLinkRef} to="/"  onClick={this.closeNav}>Home </Link>
                  <Link id="menu-links" ref={this.aboutLinkRef} to="/about" onClick={this.closeNav}>About </Link>
                  <Link id="menu-links" ref={this.experienceLinkRef} to="/experience"  onClick={this.closeNav}>Experience </Link>
                  <Link id="menu-links" ref={this.projectsLinkRef} to="/projects" onClick={this.closeNav}>Projects </Link>
                  {/* <Link id="menu-links" to="/" onClick={this.closeNav}>Portfolio </Link> */}
                  {/* https://paulund.co.uk/css-animation-link-underline */}
                {/* </div> */}
          </div>
        </div>

      </div>

      <header>
      <div className="grid grid-cols-13 md:grid-cols-10 gap-4" >
          {/* <h1 className="mt-auto mb-auto col-start-1 col-end-5 text-custom-back-white font-bold">Sahil Jaganmohan</h1> */}
          <div id ="headericon">
            <Link to="/"><img src={logo} alt="bitmoji" width="46" height="56"></img></Link>
          </div>
          
          <button id ="menubttn" onClick={this.openNav}>
                      <FaBars className="w-14 h-14 p-3 rounded-full"></FaBars>
          </button>
          
      </div>
      </header>


    </>
      
    );
  }
}

export default Header;



