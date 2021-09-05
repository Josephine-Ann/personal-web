import './PopUpMonitorSize.css'
// import React from 'react'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'

export const PopUpMonitorSize = () => {
    const {
        state: {
            width,
            height
        }
    } = useContext(InfoContext);
    return (
        <div id={(!(width < 1280 || height < 800) && "two-hidden")} class="pop-up-card">
            <div id="card-pop-up">
                <div id="text-pop-up">
                    <h1>Please watch me on a bigger screen.</h1>
                    <p>This animation was designed to be seen on a bigger screen.</p>
                    <p>Please take a look at Sliding Window, which is suitable for all screen sizes.</p>
                    <p>If you are on a laptop and you have a screen larger than 1280 X 800, please maximize your browser</p>
                </div>
            </div>
        </div>
    )
}

export default PopUpMonitorSize