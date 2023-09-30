import React from 'react';
import Header from "../Header"
import "./index.css"
const Work = () => {
    return (
        <div className="work">
            <Header/>
            <h1 className = "head">Our creative video production process</h1>
            <div className = "total-contaier">
                <div className = "contaier">
                    <h3 className="container-head">Scripting and <br/>Story boarding:</h3>
                    <p>Crafting compelling scripts and detailed
                    storyboards that breathe life into your
                    vision. With our Transforming ideas into
                    captivating stories through expert
                    scripting and meticulous storyboarding.
                    Every word and frame is carefully
                    crafted to captivate and engage your
                    audience. Trust us to bring your vision to
                    life with precision and creativity. Elevate
                    your project with our comprehensive
                    scripting and storyboarding services.</p>
                </div>
                <div className = "contaier">
                    <h3 className="container-head">Pre-production <br/>and Shoot:</h3>
                    <p>We focus on key elements to ensure a
                    seamless shoot or video production. Our
                    experienced team conducts thorough
                    location scouting to find captivating
                    settings that align with your creative
                    vision. With a team of skilled
                    professionals and state of the art
                    equipment, we ensure a seamless and
                    high-quality production experience.
                    During production, we meticulously
                    execute the plans and creative concepts
                    developed during pre production.</p>
                </div>
                <div className = "contaier">
                    <h3 className="container-head">Post production:</h3>
                    <p>In the post production phase, we bring
                    together all the elements to polish and
                    enhance your video, ensuring a
                    seamless and captivating final product.
                    Our skilled team utilises advanced
                    editing, color grading, animation, and
                    sound integration techniques to elevate
                    your footage. We strive for excellence,
                    continuously refining and polishing your
                    video until it reaches its full potential. Let
                    us transform your raw footage into a
                    polished masterpiece.</p>
                </div>
            </div>
        </div>
    )
}

export default Work