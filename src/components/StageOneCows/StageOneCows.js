import './StageOneCows.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { A } from 'hookrouter';
import { IndividualCowOne } from '../IndividualCows/IndividualCowOne';
import { IndividualCowTwo } from '../IndividualCows/IndividualCowTwo';
import { IndividualCowThree } from '../IndividualCows/IndividualCowThree';

export const StageOneCows = () => {
    const {
        cowAppear,
        redirectSlidingWindow,
        state: {
            cowStages,
            stageOne,
            stageTwo,
            stageThree,
            individualCows,
            textCowsBefore1,
            textCowsBefore2,
            textCowsAfter1,
            textCowsAfter2,
            panelText,
            panelTextAnimated,
            pText,
            slidingButton,
        }
    } = useContext(InfoContext);
    return (
        <div id={cowStages > 1 ? "hidden" : "background"}>
            <div id={(stageOne && panelText) || (stageTwo && panelTextAnimated) || (stageThree && "panel-text-hidden")}>
                <p className={pText}>{stageOne ? textCowsBefore1 : textCowsAfter1}</p>
                <p className={pText}>{stageOne ? textCowsBefore2 : textCowsAfter2}</p>
                <button onClick={() => redirectSlidingWindow(cowStages + 1)} id={slidingButton}>Continue</button>
            </div>
            <div className="cow-rows">
                <IndividualCowOne number={individualCows["1"]} />
                <IndividualCowTwo number={individualCows["2"]} />
                <IndividualCowThree number={individualCows["3"]} />
                <IndividualCowOne number={individualCows["4"]} />
                <IndividualCowTwo number={individualCows["5"]} />
                <IndividualCowThree number={individualCows["6"]} />
                <IndividualCowOne number={individualCows["7"]} />
                <IndividualCowTwo number={individualCows["8"]} />
                <IndividualCowThree number={individualCows["9"]} />
                <IndividualCowOne number={individualCows["10"]} />
                <IndividualCowTwo number={individualCows["11"]} />
                <IndividualCowThree number={individualCows["12"]} />
                <IndividualCowOne number={individualCows["13"]} />
                <IndividualCowTwo number={individualCows["14"]} />
                <IndividualCowThree number={individualCows["15"]} />
                <IndividualCowOne number={individualCows["16"]} />
                <IndividualCowTwo number={individualCows["17"]} />
                <IndividualCowThree number={individualCows["18"]} />
                <IndividualCowOne number={individualCows["18"]} />
                <IndividualCowTwo number={individualCows["19"]} />
                <IndividualCowThree number={individualCows["20"]} />
                <IndividualCowOne number={individualCows["21"]} />
                <IndividualCowTwo number={individualCows["22"]} />
                <IndividualCowThree number={individualCows["23"]} />
                <IndividualCowOne number={individualCows["24"]} />
                <IndividualCowTwo number={individualCows["25"]} />
                <IndividualCowThree number={individualCows["26"]} />
                <IndividualCowOne number={individualCows["27"]} />
                <IndividualCowTwo number={individualCows["28"]} />
                <IndividualCowThree number={individualCows["29"]} />
                <IndividualCowOne number={individualCows["30"]} />
                <IndividualCowTwo number={individualCows["31"]} />
                <IndividualCowThree number={individualCows["32"]} />
                <IndividualCowOne number={individualCows["33"]} />
                <IndividualCowTwo number={individualCows["34"]} />
                <IndividualCowThree number={individualCows["35"]} />
                <IndividualCowOne number={individualCows["36"]} />
                <IndividualCowTwo number={individualCows["37"]} />
                <IndividualCowThree number={individualCows["38"]} />
                <IndividualCowOne number={individualCows["39"]} />
                <IndividualCowTwo number={individualCows["40"]} />
                <IndividualCowThree number={individualCows["41"]} />
                <IndividualCowOne number={individualCows["41"]} />
                <IndividualCowTwo number={individualCows["42"]} />
                <IndividualCowThree number={individualCows["43"]} />
                <IndividualCowOne number={individualCows["44"]} />
                <IndividualCowTwo number={individualCows["45"]} />
                <IndividualCowThree number={individualCows["46"]} />
                <IndividualCowOne number={individualCows["47"]} />
                <IndividualCowTwo number={individualCows["48"]} />
                <IndividualCowThree number={individualCows["49"]} />
                <IndividualCowOne number={individualCows["50"]} />
                <IndividualCowTwo number={individualCows["51"]} />
                <IndividualCowThree number={individualCows["52"]} />
                <IndividualCowOne number={individualCows["53"]} />
                <IndividualCowTwo number={individualCows["54"]} />
                <IndividualCowThree number={individualCows["55"]} />
                <IndividualCowOne number={individualCows["56"]} />
                <IndividualCowTwo number={individualCows["57"]} />
                <IndividualCowThree number={individualCows["58"]} />
                <IndividualCowOne number={individualCows["59"]} />
                <IndividualCowTwo number={individualCows["60"]} />
                <IndividualCowThree number={individualCows["61"]} />
                <IndividualCowOne number={individualCows["62"]} />
                <IndividualCowTwo number={individualCows["63"]} />
                <IndividualCowThree number={individualCows["64"]} />
                <IndividualCowOne number={individualCows["65"]} />
                <IndividualCowTwo number={individualCows["66"]} />
                <IndividualCowThree number={individualCows["67"]} />
                <IndividualCowOne number={individualCows["68"]} />
                <IndividualCowTwo number={individualCows["69"]} />
                <IndividualCowThree number={individualCows["70"]} />
            </div>
        </div>
    )
}


export default StageOneCows