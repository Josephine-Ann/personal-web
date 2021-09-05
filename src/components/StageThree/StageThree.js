import './StageThree.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { FirstCow } from './FirstCow';
import { SecondCow } from './SecondCow';
import { ThirdCow } from './ThirdCow';
import Highlight from 'react-highlight'

export const StageThree = () => {
    const {
        state: {
            cowStages,
            singleWeights,
            codeSW,
            textSw,
            indexSWexplanation,
            cowsArrayForm,
            textCowArray,
            codeSlidingWindow,
            textSlidingWindow,
            paraTextSlidingWindow,
            buttonNextSlidingWindow,
            buttonNextSlidingWindowFrozen,
            buttonNextSlidingWindow2,
            buttonNextSlidingWindowFrozen2,
        },
        explanationSWText
    } = useContext(InfoContext);
    return (
        <div className={(!(cowStages === 3) && "two-hidden")}>
            <div className={cowsArrayForm}>
                <div>
                    <FirstCow />
                    <p className={textCowArray}>{"[ " + singleWeights[0] + ","}</p>
                </div>
                <div>
                    <SecondCow />
                    <p className={textCowArray}>{singleWeights[1] + ","}</p>
                </div>
                <div>
                    <ThirdCow />
                    <p className={textCowArray}>{singleWeights[2] + ","}</p>
                </div>
                <div>
                    <FirstCow />
                    <p className={textCowArray}>{singleWeights[3] + ","}</p>
                </div>
                <div>
                    <SecondCow />
                    <p className={textCowArray}>{singleWeights[4] + ","}</p>
                </div>
                <div>
                    <ThirdCow />
                    <p className={textCowArray}>{singleWeights[5] + ","}</p>
                </div>
                <div>
                    <FirstCow />
                    <p className={textCowArray}>{singleWeights[6] + ","}</p>
                </div>
                <div>
                    <SecondCow />
                    <p className={textCowArray}>{singleWeights[7] + ","}</p>
                </div>
                <div>
                    <ThirdCow />
                    <p className={textCowArray}>{singleWeights[8] + ","}</p>
                </div>
                <div>
                    <FirstCow />
                    <p className={textCowArray}>{singleWeights[9] + ","}</p>
                </div>
                <div>
                    <SecondCow />
                    <p className={textCowArray}>{singleWeights[10] + ","}</p>
                </div>
                <div>
                    <ThirdCow />
                    <p className={textCowArray}>{singleWeights[11] + ","}</p>
                </div>
                <div>
                    <FirstCow />
                    <p className={textCowArray}>{singleWeights[12] + ","}</p>
                </div>
                <div>
                    <SecondCow />
                    <p className={textCowArray}>{singleWeights[13] + ","}</p>
                </div>
                <div>
                    <ThirdCow />
                    <p className={textCowArray}>{singleWeights[14] + ","}</p>
                </div>
                <div>
                    <FirstCow />
                    <p className={textCowArray}>{singleWeights[15] + ","}</p>
                </div>
                <div>
                    <SecondCow />
                    <p className={textCowArray}>{singleWeights[16] + ","}</p>
                </div>
                <div>
                    <ThirdCow />
                    <p className={textCowArray}>{singleWeights[17] + ","}</p>
                </div>
                <div>
                    <FirstCow />
                    <p className={textCowArray}>{singleWeights[18] + ","}</p>
                </div>
                <div>
                    <SecondCow />
                    <p className={textCowArray}>{singleWeights[19] + " ]"}</p>
                </div>
            </div>
            <div id="text-and-code">
                <div id={textSlidingWindow}>
                    <p id={paraTextSlidingWindow}>{textSw}</p>
                    <div id="button-area-galaxy-iphonemax">
                        <button disabled={indexSWexplanation === 0 ? true : false} className={indexSWexplanation !== 0 ? buttonNextSlidingWindow : buttonNextSlidingWindowFrozen} onClick={() => explanationSWText(-1)}>Previous</button>
                        <button disabled={indexSWexplanation === 1 ? true : false} className={indexSWexplanation !== 1 ? buttonNextSlidingWindow2 : buttonNextSlidingWindowFrozen2} onClick={() => explanationSWText(+1)}>Next</button>
                    </div>
                </div>
                <div id={codeSlidingWindow}>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[0]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[1]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[2]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[3]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[4]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[5]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[6]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[7]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[8]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[9]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[10]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[11]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[12]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[13]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[14]}
                    </Highlight>
                    <Highlight className="snippet-sw" language="javascript">
                        {codeSW[15]}
                    </Highlight>
                </div>
            </div>
        </div>
    )
}

export default StageThree

