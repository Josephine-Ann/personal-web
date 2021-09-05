import './SlidingWindow.css'
import React from 'react'
import { StageOneCows } from '../StageOneCows/StageOneCows';
import { StageTwoCows } from '../StageTwoCows/StageTwoCows';
import { StageThree } from '../StageThree/StageThree';

export const SlidingWindow = () => {
    return (
        <div>
            <StageOneCows />
            <StageTwoCows />
            <StageThree />
        </div>
    )
}


export default SlidingWindow