import './AboutMe.css'
import React from 'react'

// import React, { useContext } from 'react'
// import { InfoContext } from '../../InfoProvider'

export const AboutMe = () => {
    // const {
    //     state: {
    //     }
    // } = useContext(InfoContext);
    return (
        <div id="page-aboutme" title="aboutme">
            <div id="block-cards-aboutme">
                <a href="https://flash-app-80d14.web.app/">
                    <div className="card-aboutme">
                        <div id="flashcards-image" className="card-aboutme-photo"></div>
                        <p className="card-aboutme-title">Flashcards Forever</p>
                    </div>
                </a>
                <a href="https://github.com/Josephine-Ann">
                    <div className="card-aboutme">
                        <div id="github-image" className="card-aboutme-photo"></div>
                        <p className="card-aboutme-title">HackerRank Algorithms</p>
                    </div>
                </a>
                <a href="https://infallible-dubinsky-dbbfe7.netlify.app/">
                    <div className="card-aboutme">
                        <div id="css-practice-image" className="card-aboutme-photo"></div>
                        <p className="card-aboutme-title">CSS Practice</p>
                    </div>
                </a>
            </div>
        </div>

    )
}


export default AboutMe