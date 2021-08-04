import React,{Component} from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"


class ProjectDisplayTemplate extends Component {
    constructor(props){
        super(props);
        this.node = props.node;
        this.colors = props.colors;
        this.index = props.index;
    }

  render() 
  {
    return (
    <>
    <div className="mb-4 mx-3 sm:mt-0">
        <div className="max-w-full rounded-xl bg-gray-500 overflow-hidden shadow-lg">
            {/* <GatsbyImage image={this.node.image == null ? getImage(this.node.image) : this.node.image} alt={this.node.alt} className="border-b-2"></GatsbyImage> */}
            {this.node.image != null ? <GatsbyImage image={getImage(this.node.image)} alt={this.node.alt} className="border-b-2"></GatsbyImage> : <></>}
            <div  className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{this.node.title}</div>
                <p className="text-custom-back-black text-base h-32 sm:h-40 overflow-y-auto">
                    {this.node.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            {this.node.tags.map((tag) => (
                <span key={tag+this.index} id="tags" className={this.colors[tag]}>#{tag}</span>
            ))}
            </div>
        </div>
    </div>

    </>
    )
 }
}

export default ProjectDisplayTemplate