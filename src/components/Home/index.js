import {Component} from "react"
import React from 'react';
import Header from "../Header"
import "./index.css"
class Home extends Component {
    render() {
    return (
        <div className = "home">
           <Header/>
           <h1 className = "heading">PATCO PRODUCTIONS</h1>
           <iframe className="video"
                width="500"
                height="280"
                src={`https://www.youtube.com/embed/pEBQ07DzLxk?si=TrWbhf6IomrBthzU`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}
}

export default Home