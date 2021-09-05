import './StageThree.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { FirstCow } from './FirstCow';
import { SecondCow } from './SecondCow';
import { ThirdCow } from './ThirdCow';

export const StageThree = () => {
    const {
        state: {
            cowStages,
            singleWeights
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
        </div>
    )
}

export default StageThree

