import './StageTwoCows.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { CowOne } from '../CowOne/CowOne'
import { CowTwo } from '../CowTwo/CowTwo'
import { CowThree } from '../CowThree/CowThree'
import { CowFour } from '../CowFour/CowFour'

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
            singleWeightFour,
            minus,
            plus,
            maxWeight,
            stageTwoLine,
            weightsOfThree,
            minusValue,
            plusValue
        },
        redirectSlidingWindow
    } = useContext(InfoContext);

    return (
        <div className={(!(cowStages === 2) && "two-hidden")}>
            <div id="texts-about-cows">
                <p id={(cowStages === 2) && stageTwoLine} className="small-writing">{stageTwoLineOne}{totalWeight}{stageTwoLineTwo}</p>
                <p className={singleWeightOne !== "1040kg" ? "small-writing" : "two-hidden"} id={minus}>We subtract the weight of the 1rst cow {minusValue}</p>
                <p className={singleWeightOne !== "1040kg" ? "small-writing" : "two-hidden"} id={plus}>We add the weight of the new cow {plusValue}</p>
            </div>
            <div id="cow-rectangle">
                <div id="cow-1" class="cow-position-test">
                    {singleWeightOne}
                    <CowOne />
                </div>
                <div id="cow-2" class="cow-position-test">
                    {singleWeightTwo}
                    <CowTwo />
                </div>
                <div id="cow-3" class="cow-position-test">
                    {singleWeightThree}
                    <CowThree />
                </div>
                <div id="cow-4" class="cow-position-test">
                    {singleWeightFour}
                    <CowFour />
                </div>
            </div>
            <button id="next-button" onClick={() => redirectSlidingWindow(cowStages + 1)} className={(parseInt(maxWeight.slice(0, 4), 10) < 3170) && "two-hidden"}>Okay, I get it, let's continue</button>
        </div>
    )
}


export default StageTwoCows