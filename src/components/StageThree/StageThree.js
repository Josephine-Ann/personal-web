import './StageThree.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { FirstCow } from './FirstCow';
import { SecondCow } from './SecondCow';
import { ThirdCow } from './ThirdCow';
import Highlight from "react-highlight";


export const StageThree = () => {
    const {
        SWNext,
        state: {
            codeSW,
            cowStages,
            singleWeights,
            SWExplanation,
            SWExplanationSpace,
            SWExplanationButtonSpace,
            SWExplanationBottomPanel,
            SWCodeSpace
        },
    } = useContext(InfoContext);

    return (
        <div className={(!(cowStages === 3) && "two-hidden") || "cows-array-form"}>
            <div>
                <FirstCow />
                <p className="text-cow-array">{"[ " + singleWeights[0] + ","}</p>
            </div>
            <div>
                <SecondCow />
                <p className="text-cow-array">{singleWeights[1] + ","}</p>
            </div>
            <div>
                <ThirdCow />
                <p className="text-cow-array">{singleWeights[2] + ","}</p>
            </div>
            <div>
                <FirstCow />
                <p className="text-cow-array">{singleWeights[3] + ","}</p>
            </div>
            <div>
                <SecondCow />
                <p className="text-cow-array">{singleWeights[4] + ","}</p>
            </div>
            <div>
                <ThirdCow />
                <p className="text-cow-array">{singleWeights[5] + ","}</p>
            </div>
            <div>
                <FirstCow />
                <p className="text-cow-array">{singleWeights[6] + ","}</p>
            </div>
            <div>
                <SecondCow />
                <p className="text-cow-array">{singleWeights[7] + ","}</p>
            </div>
            <div>
                <ThirdCow />
                <p className="text-cow-array">{singleWeights[8] + ","}</p>
            </div>
            <div>
                <FirstCow />
                <p className="text-cow-array">{singleWeights[9] + ","}</p>
            </div>
            <div>
                <SecondCow />
                <p className="text-cow-array">{singleWeights[10] + ","}</p>
            </div>
            <div>
                <ThirdCow />
                <p className="text-cow-array">{singleWeights[11] + ","}</p>
            </div>
            <div>
                <FirstCow />
                <p className="text-cow-array">{singleWeights[12] + ","}</p>
            </div>
            <div>
                <SecondCow />
                <p className="text-cow-array">{singleWeights[13] + ","}</p>
            </div>
            <div>
                <ThirdCow />
                <p className="text-cow-array">{singleWeights[14] + ","}</p>
            </div>
            <div>
                <FirstCow />
                <p className="text-cow-array">{singleWeights[15] + ","}</p>
            </div>
            <div>
                <SecondCow />
                <p className="text-cow-array">{singleWeights[16] + ","}</p>
            </div>
            <div>
                <ThirdCow />
                <p className="text-cow-array">{singleWeights[17] + ","}</p>
            </div>
            <div>
                <FirstCow />
                <p className="text-cow-array">{singleWeights[18] + ","}</p>
            </div>
            <div>
                <SecondCow />
                <p className="text-cow-array">{singleWeights[19] + " ]"}</p>
            </div>
            <div id={SWExplanationBottomPanel}>
                <div id={SWExplanationSpace}>
                    <p>{SWExplanation}</p>
                    <div id={SWExplanationButtonSpace}>
                        <button id={(SWExplanation.includes("Colt")) && "button-fade-out"} onClick={() => SWNext(-1)}>Previous</button>
                        <button id={!(SWExplanation.includes("Colt")) && "button-fade-out"} onClick={() => SWNext(+1)}>Next</button>
                    </div>
                </div>
                <div id={SWCodeSpace}>
                    <Highlight language="javascript">
                        {codeSW[0]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[1]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[2]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[3]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[4]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[5]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[6]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[7]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[8]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[9]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[10]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[11]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[12]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[13]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[14]}
                    </Highlight>
                    <Highlight language="javascript">
                        {codeSW[15]}
                    </Highlight>
                </div>
            </div>
        </div>
    )
}

export default StageThree

