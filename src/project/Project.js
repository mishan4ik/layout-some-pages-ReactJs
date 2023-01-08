import React from "react";
import "./Project.css"
import Navbar from "./Navbar/Navbar.js"
import Home from "./Home/Home.js"
import About from "./About/About.js"
import Contact from "./Contact/Contact.js"
import {BrowserRouter, Route, Routes} from "react-router-dom";

let Project = () => {

    return(

        <div>

            <div className="block__site">
                 <div className="block__imgSite">
                    
                    <img src="./Image/Image.jpg" alt=""/>

                    </div>   

                <div className="block__reverse">
                    <BrowserRouter>
                    <Navbar/>

                    <Routes>
				<Route path="/home" element = {<Home text = "Hello All" img = "./Image/avatar.jpg" title ="home"/>}/>
				<Route path="/about" element = {<About text = "About me"  img = "./Image/avatar.jpg" title = "about"/>}/>
                <Route path="/contact" element = {<Contact adress = "Your adress" phone = "Your phone" img = "./Image/avatar.jpg" title = "contact" />}/>
			</Routes>
            </BrowserRouter>

                </div>
                
               

            </div>

        </div>

    )




}
export default Project;