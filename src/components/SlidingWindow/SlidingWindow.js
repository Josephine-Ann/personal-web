import './SlidingWindow.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { StageOneCows } from '../StageOneCows/StageOneCows';
import { StageTwoCows } from '../StageTwoCows/StageTwoCows';
import { StageThree } from '../StageThree/StageThree';

export const SlidingWindow = () => {
    const {
        state: {

        }
    } = useContext(InfoContext);
    return (
        <div>
            <StageOneCows />
            <StageTwoCows />
            <StageThree />
        </div>
    )
}


export default SlidingWindow