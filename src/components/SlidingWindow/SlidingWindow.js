import './SlidingWindow.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { StageOneCows } from '../StageOneCows/StageOneCows';
import { StageTwoCows } from '../StageTwoCows/StageTwoCows';
// import 
export const SlidingWindow = () => {
    const {
        state: {
            cowStages
        }
    } = useContext(InfoContext);
    return (
        <div>
            <StageOneCows />
            <StageTwoCows />
        </div>
    )
}


export default SlidingWindow