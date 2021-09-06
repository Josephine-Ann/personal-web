import './StageTwoCows.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { CowOne } from '../CowOne/CowOne'
import { CowTwo } from '../CowTwo/CowTwo'
import { CowThree } from '../CowThree/CowThree'

export const StageTwoCows = () => {
    const {
        state: {
            stageTwoLineOne,
            stageTwoLineTwo,
            cowStages,
            totalWeight,
            singleWeightOne,
            singleWeightTwo,
            singleWeightThree,
            cowToDisplayP1,
            cowToDisplayP2,
            cowToDisplayP3,
            firstCow,
            secondCow,
            thirdCow,
            minus,
            plus,
            cowInMotion,
            stageTwoLine
        },
        redirectSlidingWindow
    } = useContext(InfoContext);

    return (
        <div className={(!(cowStages === 2) && "two-hidden")}>
            <div id="texts-about-cows">
                <p id={(cowStages === 2) && stageTwoLine} className="small-writing">{stageTwoLineOne}{totalWeight}{stageTwoLineTwo}</p>
                <p className="small-writing" id={minus}>{(firstCow.includes("first-cow")) && ("-" + singleWeightOne)}</p>
                <p className="small-writing" id={plus}>{(thirdCow.includes("hidden-three")) && ("+" + singleWeightThree)}</p>
            </div>
            <div id="cows">
                <div className="cow-row">
                    <div className={firstCow}>
                        <p className="small-writing">{singleWeightOne}</p>
                        {cowToDisplayP1 === "1" && <CowOne />}
                        {cowToDisplayP1 === "2" && <CowTwo />}
                        {cowToDisplayP1 === "3" && <CowThree />}
                    </div>
                    <div className={secondCow}>
                        <p className="small-writing">{singleWeightTwo}</p>
                        {cowToDisplayP2 === "1" && <CowOne />}
                        {cowToDisplayP2 === "2" && <CowTwo />}
                        {cowToDisplayP2 === "3" && <CowThree />}
                    </div>
                    <div className={thirdCow}>
                        <p className="small-writing">{singleWeightThree}</p>
                        {cowToDisplayP3 === "1" && <CowOne />}
                        {cowToDisplayP3 === "2" && <CowTwo />}
                        {cowToDisplayP3 === "3" && <CowThree />}
                    </div>
                </div>
                <div className={((!((parseInt((totalWeight.slice(0, 4)), 10) > 3170))) && "two-hidden") || "button-container"}>
                    <button className="button-stop" onClick={() => redirectSlidingWindow(cowStages + 1)}>Continue</button>
                </div>
            </div>
        </div >
    )
}


export default StageTwoCows