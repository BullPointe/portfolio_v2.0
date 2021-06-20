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
        
        <div className="flex h-screen justify-center items-center ">
      
          <div className="absolute top-0">
                  <button id ="closebttn" onClick={this.closeNav}>
                                <GiCrossedSabres></GiCrossedSabres>
                  </button>
          </div>

          <div className="text-center">
                {/* <div className="p-10 bg-gray-500 rounded-lg"> */}
                  <Link id="menu-links" to="/">About </Link>
                  <Link id="menu-links" to="/">Experience </Link>
                  <Link id="menu-links" to="/">Projects </Link>
                  <Link id="menu-links" to="/">Portfolio </Link>
                {/* </div> */}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-6 gap-4" >
          <button id ="menubttn" onClick={this.openNav}>
                      <FaBars></FaBars>
          </button>
      </div>


    </>
      
    );
  }
}

export default Header
