import React,{Component} from "react"
import { Link } from "gatsby"
import {FaBars} from "react-icons/fa"
import {GiCrossedSabres} from "react-icons/gi"
import "./headerstyle.css"

class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
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
                  <Link id="menu-links" to="/" onClick={this.closeNav}>Home </Link>
                  <Link id="menu-links" to="/experience" onClick={this.closeNav}>Experience </Link>
                  <Link id="menu-links" to="/about" onClick={this.closeNav}>About </Link>
                  <Link id="menu-links" to="/" onClick={this.closeNav}>Projects </Link>
                  <Link id="menu-links" to="/" onClick={this.closeNav}>Portfolio </Link>
                  {/* https://paulund.co.uk/css-animation-link-underline */}
                {/* </div> */}
          </div>
        </div>

      </div>

      <header>
      <div className="grid grid-cols-13 md:grid-cols-10 gap-4" >
          <h5 className="m-2 mt-auto mb-auto col-start-1 text-custom-back-white align-middle text-center">LOGO</h5>
          <button id ="menubttn" onClick={this.openNav}>
                      <FaBars></FaBars>
          </button>
      </div>
      </header>


    </>
      
    );
  }
}

export default Header
