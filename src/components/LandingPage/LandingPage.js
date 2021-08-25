import './LandingPage.css'
// import React from 'react'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { BlueStructure } from '../StructuresLandingPage/BlueStructure/BlueStructure';
import { BlueStructureMedium } from '../StructuresLandingPage/BlueStructureMedium/BlueStructureMedium';
import { YellowStructure } from '../StructuresLandingPage/YellowStructure/YellowStructure';
import { YellowStructureMedium } from '../StructuresLandingPage/YellowStructureMedium/YellowStructureMedium';
import PinkStructure from '../StructuresLandingPage/PinkStructure/PinkStructure';


export const LandingPage = () => {
    const {
        state: {
            landingImage,
            blueStructure,
            blueStructureMedium,
            yellowStructure,
            yellowStructureMedium
        }
    } = useContext(InfoContext);
    return (
        <div id="landing-page" title="">
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
    )
}


export default LandingPage