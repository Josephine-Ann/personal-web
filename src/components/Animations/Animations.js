import './Animations.css'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { A } from 'hookrouter';

export const Animations = () => {
    const {
        state: {
            animationLink,
            animationLinkImage,
            firstAnimationLinkImage,
            animationPage,
            width,
            cancellingSW
        }
    } = useContext(InfoContext);
    return (
        <div id="animation-page-all" title="animations">
            <div id={animationPage}>
                <A href="animations/divideandconquer" id={(width < 414) && "first"} className={animationLink}>
                    <div id="second-animation-link-image" className={animationLinkImage}></div>
                    <p className="animation-link-title">Divide and Conquer</p>
                </A>
                <A href="animations/slidingwindow" className={cancellingSW ? (animationLink + " disabled") : animationLink}>
                    <div id={firstAnimationLinkImage} className={animationLinkImage}></div>
                    <p className="animation-link-title">Sliding Window</p>
                </A>
            </div>
        </div>
    )
}


export default Animations