import React from "react"
import "./Contact.css"

let Contact = (props) => {

    return(

        <div>

            <div className="block_Contact">

<div className="title">

<h2>{props.title}</h2>

</div>



<div className="block_comment block_comment_Contact">


                        <div className="avatar">

                        <img src={props.img} alt="" />

                        </div>
                        <div className="comment">


                        <p>{props.adress}</p>
                        <p>{props.phone}</p>

                        </div>
                        


                    </div>

                    </div>


        </div>

    )


}
export default Contact;