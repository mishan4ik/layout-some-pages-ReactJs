import React from "react"
import "./Home.css"

let Home = (props) => {


    return(

        <div>
                <div className="block_Home">


                <div className="title">

<h2>{props.title}</h2>

</div>

                    <div className="block_comment block_comment_Home">

                    

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

export default Home;