import React from "react";
import "./About.css"

let About = (props) => {


    
    return(

        <div>

<div className="block_About">
<div className="title">

<h2>{props.title}</h2>

</div>

<div className="block_comment block_comment_About">

                        <div className="avatar">

                        <img src={props.img} alt="" />

                        </div>
                        <div className="comment">


                        <p>{props.text}</p>

                        </div>
                        


                    </div>
                    
                    </div>
        </div>

    )



}
export default About;