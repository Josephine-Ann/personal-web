import './LandingPage.css'
// import React from 'react'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { BlueStructure } from '../StructuresLandingPage/BlueStructure/BlueStructure';
import { BlueStructureMedium } from '../StructuresLandingPage/BlueStructureMedium/BlueStructureMedium';
import { YellowStructure } from '../StructuresLandingPage/YellowStructure/YellowStructure';
import { YellowStructureMedium } from '../StructuresLandingPage/YellowStructureMedium/YellowStructureMedium';
import PinkStructure from '../StructuresLandingPage/PinkStructure/PinkStructure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)


export const LandingPage = () => {
    const {
        state: {
            landingImage,
            blueStructure,
            blueStructureMedium,
            yellowStructure,
            yellowStructureMedium,
            linksContact
        }
    } = useContext(InfoContext);
    return (
        <div id="all-landing-page" title="">
            <div id="landing-page">
                <div id={landingImage}>
                    <div id={blueStructure}>
                        <BlueStructure />
                    </div>
                    <div id={yellowStructure}>
                        <YellowStructure />
                    </div>
                    <div id={blueStructureMedium}>
                        <BlueStructureMedium />
                    </div>
                    <div id={yellowStructureMedium}>
                        <YellowStructureMedium />
                    </div>
                    <div id="pink-structure">
                        <PinkStructure />
                    </div>
                </div>
            </div>
            <div id={linksContact}>
                <a href="mailto:josephineanngeoghegan@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://github.com/Josephine-Ann" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/josephine-geoghegan-920699b5/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div>
    )
}


export default LandingPage