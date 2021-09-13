import React from 'react'
import SlidingWindowState from './SlidingWindowState.json';
import DivideAndConquerState from './DivideAndConquerState.json';

export const InfoContext = React.createContext();

var slidingStateSingle = SlidingWindowState[0]
var weightsOfThree = SlidingWindowState[1]
var stageTwoLineArray = SlidingWindowState[2]
var cowArray = SlidingWindowState[3]
var singleWeights = SlidingWindowState[4]
var firstCowArray = SlidingWindowState[5]
var secondCowArray = SlidingWindowState[6]
var thirdCowArray = SlidingWindowState[7]
var individualCows = SlidingWindowState[8]
var firstCowArrayGalaxy = SlidingWindowState[9]
var secondCowArrayGalaxy = SlidingWindowState[10]
var thirdCowArrayGalaxy = SlidingWindowState[11]
var newClassesGalaxy = SlidingWindowState[12]
var newClasses = SlidingWindowState[13]
var firstCowArrayIphoneMax = SlidingWindowState[14]
var secondCowArrayIphoneMax = SlidingWindowState[15]
var thirdCowArrayIphoneMax = SlidingWindowState[16]
var newClassesIphoneMax = SlidingWindowState[17]
var textExplanation = SlidingWindowState[18]
var codeNaive = SlidingWindowState[19]
var codeRefactor = SlidingWindowState[20]

var cardNoWritingArray = DivideAndConquerState[1]
var divideAndConquerSingle = DivideAndConquerState[0]
var textArray = DivideAndConquerState[2]
var liftFixedArray = DivideAndConquerState[3]
var animationBackgroundArray = DivideAndConquerState[4]
var layoutArray = DivideAndConquerState[5]
var manArray = DivideAndConquerState[6]
var arrowUpArray = DivideAndConquerState[7]
var arrowDownArray = DivideAndConquerState[8]
var explanationText = DivideAndConquerState[10]
var explanationTextNaive = DivideAndConquerState[11]
var explanationTextRefactor = DivideAndConquerState[12]

var textAnimationDivideAndConquer = DivideAndConquerState[9]

export class InfoProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNoWritingArray: cardNoWritingArray,
            text: divideAndConquerSingle.text,
            textArray: textArray,
            liftFixed: divideAndConquerSingle.liftFixed,
            liftFixedArray: liftFixedArray,
            animationBackground: divideAndConquerSingle.animationBackground,
            animationBackgroundArray: animationBackgroundArray,
            layout: divideAndConquerSingle.layout,
            layoutArray: layoutArray,
            man: divideAndConquerSingle.man,
            manArray: manArray,
            arrowUp: divideAndConquerSingle.arrowUp,
            arrowUpArray: arrowUpArray,
            arrowDown: divideAndConquerSingle.arrowDown,
            arrowDownArray: arrowDownArray,
            textDC: divideAndConquerSingle.textDC,
            textAnimationDivideAndConquer: textAnimationDivideAndConquer,
            weightsOfThree: weightsOfThree,
            singleWeights: singleWeights,
            firstCow: slidingStateSingle.firstCow,
            secondCow: slidingStateSingle.secondCow,
            thirdCow: slidingStateSingle.thirdCow,
            firstCowArray: [],
            secondCowArray: [],
            thirdCowArray: [],
            // firstCowArrayGalaxy: firstCowArrayGalaxy,
            // secondCowArrayGalaxy: secondCowArrayGalaxy,
            // thirdCowArrayGalaxy: thirdCowArrayGalaxy,
            singleWeightOne: slidingStateSingle.singleWeightOne,
            singleWeightTwo: slidingStateSingle.singleWeightTwo,
            singleWeightThree: slidingStateSingle.singleWeightThree,
            totalWeight: slidingStateSingle.totalWeight,
            stageTwoLineOne: slidingStateSingle.stageTwoLineOne,
            stageTwoLineTwo: slidingStateSingle.stageTwoLineTwo,
            stageTwoLineArray: stageTwoLineArray,
            cowStages: slidingStateSingle.cowStages,
            stageOne: slidingStateSingle.stageOne,
            stageTwo: slidingStateSingle.stageTwo,
            stageThree: slidingStateSingle.stageThree,
            textCowsBefore1: slidingStateSingle.textCowsBefore1,
            textCowsBefore2: slidingStateSingle.textCowsBefore2,
            textCowsAfter1: slidingStateSingle.textCowsAfter1,
            textCowsAfter2: slidingStateSingle.textCowsBefore2,
            cowToDisplayP1: slidingStateSingle.cowToDisplayP1,
            cowToDisplayP2: slidingStateSingle.cowToDisplayP2,
            cowToDisplayP3: slidingStateSingle.cowToDisplayP3,
            cow: slidingStateSingle.cow,
            individualCows: individualCows,
            buttonPause: slidingStateSingle.buttonPause,
            textInMotion: slidingStateSingle.textInMotion,
            cardNoWriting: slidingStateSingle.cardNoWriting,
            cowArray: cowArray,
            maxWeight: slidingStateSingle.maxWeight,
            width: 0,
            height: 0,
            galaxyFold: false,
            iPhoneMax: false,
            computer: false,
            landingImage: "",
            blueStructure: "",
            yellowStructure: "",
            yellowStructureMedium: "",
            blueStructureMedium: "",
            leaf: "",
            links: "",
            animationLink: "",
            animationLinkImage: "",
            firstAnimationLinkImage: "",
            animationPage: "",
            panelText: "",
            panelTextAnimated: "",
            pText: "",
            slidingButton: "",
            minus: "",
            plus: "",
            hiddenThree: "",
            distanceTwo: "",
            distanceThree: "",
            distanceOne: "",
            newClassesGalaxy: newClassesGalaxy,
            newClasses: newClasses,
            newClassesIphoneMax: newClassesIphoneMax,
            linksContact: "",
            cowInMotion: false,
            divideAndConquer: "",
            code: explanationTextNaive["0"],
            explanationDC: "",
            SWExplanation: textExplanation[0],
            codeSW: codeNaive,
            SWExplanationSpace: "",
            SWExplanationButtonSpace: "",
            SWCodeSpace: "",
            SWExplanationBottomPanel: "",
            explanationText: explanationText["0"],
            stageTwoLine: "stageTwoLine"
        };
    }

    componentDidMount = async () => {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        var width = Math.min(window.innerWidth, window.screen.width)
        var height = Math.min(window.innerHeight, window.screen.height)
        var isWidthComputer = !!(width > 818)
        var isWidthGalaxy = !!(width < 550)
        var isWidthIphone = !!((width <= 818) && (width >= 550))
        if (width < 1280 || height < 800) this.textBack()
        var newClasses;
        if (isWidthComputer) {
            newClasses = this.state.newClasses
        } else if (isWidthGalaxy) {
            newClasses = this.state.newClassesGalaxy
        } else if (isWidthIphone) {
            newClasses = this.state.newClassesIphoneMax
        }
        this.setState({
            SWExplanationBottomPanel: newClasses.SWExplanationBottomPanel,
            SWExplanationButtonSpace: newClasses.SWExplanationButtonSpace,
            SWExplanationSpace: newClasses.SWExplanationSpace,
            width: width,
            height: height,
            computer: isWidthComputer,
            galaxyFold: isWidthGalaxy,
            iPhoneMax: isWidthIphone,
            leaf: newClasses.leaf,
            landingImage: newClasses.landingImage,
            blueStructure: newClasses.blueStructure,
            yellowStructure: newClasses.yellowStructure,
            blueStructureMedium: newClasses.blueStructureMedium,
            yellowStructureMedium: newClasses.yellowStructureMedium,
            links: newClasses.links,
            animationLink: newClasses.animationLink,
            animationLinkImage: newClasses.animationLinkImage,
            firstAnimationLinkImage: newClasses.firstAnimationLinkImage,
            animationPage: newClasses.animationPage,
            panelText: newClasses.panelText,
            panelTextAnimated: newClasses.panelTextAnimated,
            pText: newClasses.pText,
            slidingButton: newClasses.slidingButton,
            minus: newClasses.minus,
            plus: newClasses.plus,
            firstCow: newClasses.firstCow,
            secondCow: newClasses.secondCow,
            thirdCow: newClasses.thirdCow,
            hiddenThree: newClasses.hiddenThree,
            distanceTwo: newClasses.distanceTwo,
            distanceThree: newClasses.distanceThree,
            distanceOne: newClasses.distanceOne,
            linksContact: newClasses.linksContact,
            SWCodeSpace: newClasses.SWCodeSpace
        });
    };

    SWNext = (val) => {

        if (val === 1) {
            this.setState({
                codeSW: codeRefactor,
                SWExplanation: textExplanation[1]
            })
        } else if (val === -1) {
            this.setState({
                codeSW: codeNaive,
                SWExplanation: textExplanation[0]
            })
        }
    }

    delay = (n) => {
        return new Promise(function (resolve) {
            setTimeout(resolve, n * 1000);
        });
    }

    sizeCows = async () => {
        if (this.state.width < 414) {
            this.setState({
                firstCowArray: firstCowArrayGalaxy,
                secondCowArray: secondCowArrayGalaxy,
                thirdCowArray: thirdCowArrayGalaxy,
                cowInMotion: true
            })
        } else if (this.state.width > 414 && this.state.width < 818) {
            this.setState({
                firstCowArray: firstCowArrayIphoneMax,
                secondCowArray: secondCowArrayIphoneMax,
                thirdCowArray: thirdCowArrayIphoneMax,
                cowInMotion: true
            })
        } else {
            this.setState({
                firstCowArray: firstCowArray,
                secondCowArray: secondCowArray,
                thirdCowArray: thirdCowArray,
                cowInMotion: true
            })
        }
        return 'done'
    }

    textBack = async () => {
        this.setState({
            arrowUp: this.state.arrowUpArray[0],
            arrowDown: this.state.arrowDownArray[0],
            liftFixed: this.state.liftFixedArray[0],
            textInMotion: false,
            man: this.state.manArray[0],
            cardNoWriting: this.state.cardNoWritingArray[1],
            animationBackground: this.state.animationBackgroundArray[0],
            layout: this.state.layoutArray[0],
            buttonPause: true
        })
        await this.delay(3.95);
        this.setState({
            textDC: this.state.textAnimationDivideAndConquer[19],
            buttonPause: false,
            divideAndConquer: ""
        })
    }

    changeTextInMotion = () => {
        if (this.state.textInMotion) {
            this.setState({
                textInMotion: false
            })
        } else {
            this.setState({
                textInMotion: true
            })
        }
    }

    changeText = async () => {
        await this.changeTextInMotion()

        if (this.state.textInMotion) {
            this.setState({
                cardNoWriting: this.state.cardNoWritingArray[0],
                animationBackground: this.state.animationBackgroundArray[1],
            })
        }
        var texts = this.state.textAnimationDivideAndConquer
        for (var i = 0; i < 4; i++) {
            if (this.state.textInMotion) {
                await this.delay(3.95);
                this.setState({
                    textDC: texts[i]
                })
            } else {
                break;
            }
        }
        if (this.state.textInMotion) {
            this.setState({
                liftFixed: this.state.liftFixedArray[1],
                animationBackground: this.state.animationBackgroundArray[1],
                layout: this.state.layoutArray[1],
                man: this.state.manArray[1]
            })
        } else {
            return;
        }
        for (i = 4; i < 12; i++) {
            if (this.state.textInMotion) {
                await this.delay(3.95);
                this.setState({
                    textDC: texts[i]
                })
            } else {
                break;
            }
        }
        if (this.state.textInMotion) {
            this.setState({
                arrowUp: this.state.arrowUpArray[1],
                arrowDown: this.state.arrowDownArray[1]
            })
        } else {
            return;
        }
        for (i = 12; i < 19; i++) {
            if (this.state.textInMotion) {
                await this.delay(3.95);
                this.setState({
                    textDC: texts[i]
                })
            } else {
                break;
            }
        }
        if (this.state.textInMotion) {
            await this.delay(3.95);
        } else {
            return;
        }
        this.setState({
            divideAndConquer: "two-hidden"
        })
    }

    redirectSlidingWindow = async (stage) => {
        this.setState({
            cowStages: this.state.cowStages + 1
        })
        if (stage === 1) {
            this.cowAppear()
        } else if (stage === 2) {
            this.stageTwo()
        } else if (stage === 3) {
            this.stageThree()
        }
        return "window"
    }

    cowsStop = async () => {
        for (const property in individualCows) {
            individualCows[property] = false
        }
        var isWidthComputer = !!(window.innerWidth > 818)
        var isWidthGalaxy = !!(window.innerWidth < 550)
        var isWidthIphone = !!((window.innerWidth <= 818) && (window.innerWidth >= 550))
        var newClasses;
        if (isWidthComputer) {
            newClasses = this.state.newClasses
        } else if (isWidthGalaxy) {
            newClasses = this.state.newClassesGalaxy
        } else if (isWidthIphone) {
            newClasses = this.state.newClassesIphoneMax
        }
        this.setState({
            cowStages: slidingStateSingle.cowStages,
            stageOne: slidingStateSingle.stageOne,
            stageTwo: slidingStateSingle.stageTwo,
            stageThree: slidingStateSingle.stageThree,
            panelText: newClasses.panelText,
            panelTextAnimated: newClasses.panelTextAnimated,
            pText: newClasses.pText,
            individualCows: individualCows
        })
        await this.delay(7);
        this.setState({
            maxWeight: slidingStateSingle.maxWeight,
            weightsOfThree: weightsOfThree,
            singleWeights: singleWeights,
            cowToDisplayP1: slidingStateSingle.cowToDisplayP1,
            cowToDisplayP2: slidingStateSingle.cowToDisplayP2,
            cowToDisplayP3: slidingStateSingle.cowToDisplayP3,
            cowInMotion: false,
            slidingButton: newClasses.slidingButton,
            minus: newClasses.minus,
            plus: newClasses.plus,
            hiddenThree: newClasses.hiddenThree,
            distanceTwo: newClasses.distanceTwo,
            distanceThree: newClasses.distanceThree,
            distanceOne: newClasses.distanceOne,
            firstCow: slidingStateSingle.firstCow,
            secondCow: slidingStateSingle.secondCow,
            thirdCow: slidingStateSingle.thirdCow,
            stageTwoLineOne: slidingStateSingle.stageTwoLineOne,
            stageTwoLineTwo: slidingStateSingle.stageTwoLineTwo,
            singleWeightOne: slidingStateSingle.singleWeightOne,
            singleWeightTwo: slidingStateSingle.singleWeightTwo,
            singleWeightThree: slidingStateSingle.singleWeightThree,
            totalWeight: slidingStateSingle.totalWeight
        })
    }

    cowMovements = async (cowToDisplayP1, cowToDisplayP2, cowToDisplayP3, totalWeight, singleWeightOne, singleWeightTwo, singleWeightThree) => {
        if (this.state.cowInMotion) {
            await this.delay(6)
        }
        if (this.state.cowInMotion) {
            this.setState({
                firstCow: this.state.firstCowArray["1"],
                secondCow: this.state.secondCowArray["1"],
                thirdCow: this.state.thirdCowArray["1"]
            })
        }
        if (this.state.cowInMotion) {
            await this.delay(6)

        }
        if (this.state.cowInMotion) {
            this.setState({
                firstCow: this.state.firstCowArray["0"],
                secondCow: this.state.secondCowArray["0"],
                thirdCow: this.state.thirdCowArray["2"],
                cowToDisplayP1: cowToDisplayP1,
                cowToDisplayP2: cowToDisplayP2,
                cowToDisplayP3: cowToDisplayP3,
                singleWeightOne: this.state.singleWeights[singleWeightOne],
                singleWeightTwo: this.state.singleWeights[singleWeightTwo],
                singleWeightThree: this.state.singleWeights[singleWeightThree],
            })
        }
        if (this.state.cowInMotion) {
            if (totalWeight !== "18") {
                this.setState({
                    stageTwoLine: "stageTwoLine-change"
                })
            }
        }
        if (this.state.cowInMotion) {
            await this.delay(6)

        }
        if (this.state.cowInMotion) {
            this.setState({
                thirdCow: this.state.thirdCowArray["0"],
                totalWeight: this.state.weightsOfThree[totalWeight]
            })
        }
        if (this.state.cowInMotion) {
            if (this.state.totalWeight === "3425kg") {
                this.setState({
                    totalWeight: this.state.maxWeight,
                    stageTwoLineOne: stageTwoLineArray["6"],
                    stageTwoLineTwo: stageTwoLineArray["1"],
                })
            } else if (this.state.maxWeight < this.state.totalWeight) {
                this.setState({
                    maxWeight: this.state.totalWeight,
                    stageTwoLineOne: stageTwoLineArray["2"],
                    stageTwoLineTwo: stageTwoLineArray["3"]
                })
            } else if (this.state.maxWeight > this.state.totalWeight) {
                this.setState({
                    stageTwoLineOne: stageTwoLineArray["4"],
                    stageTwoLineTwo: stageTwoLineArray["5"]
                })
            }
        }
        if (this.state.cowInMotion) {
            this.setState({
                stageTwoLine: "stageTwoLine"
            })
        }
    }

    stageTwo = async () => {
        await this.sizeCows()
        var cowInMotion = this.state.cowInMotion
        this.setState({
            firstCow: this.state.firstCowArray["0"],
            secondCow: this.state.secondCowArray["0"],
            thirdCow: this.state.thirdCowArray["2"],
        })
        let a = 2
        let b = 3
        let c = 1
        let copy
        for (var x = 1; x < 18 && cowInMotion; x++) {
            await this.cowMovements(a.toString(), b.toString(), c.toString(), x.toString(), x.toString(), (x + 1).toString(), (x + 2).toString())
            copy = a
            a = b
            b = c
            c = copy
        }
        this.setState({
            firstCow: this.state.firstCowArray["0"],
            secondCow: this.state.secondCowArray["0"],
            thirdCow: this.state.thirdCowArray["0"],
            cowInMotion: false,
        })
        await this.delay(6)
        this.setState({
            stageTwoLineOne: "",
            stageTwoLineTwo: "",
            totalWeight: ""

        })
    }

    stageThree = async (val) => {
        if (val === 1) {
            this.setState({
                explanationText: explanationText["1"],
                code: explanationTextRefactor["0"]
            })
        } else if (val === -1) {
            this.setState({
                explanationText: explanationText["0"],
                code: explanationTextNaive["0"]
            })
        }
    }


    cowAppear = async () => {
        var cows = individualCows
        cows["1"] = true
        this.setState({
            individualCows: cows,
            stageOne: false,
            stageTwo: true
        })
        for (let i = 2; i < 71; i++) {
            cows[i.toString()] = true
            await this.delay(0.03)
            this.setState({
                individualCows: cows,
            })
        }
    }

    cancelAnimations = async (path) => {
        if (path.includes("slidingwindow")) {
            this.setState({
                cowInMotion: false
            })
            this.cowsStop()
        } else if (path.includes("divide")) {
            this.textBack()
        }
    }


    render() {
        return (
            <InfoContext.Provider
                value={{
                    state: this.state,
                    cancelAnimations: this.cancelAnimations,
                    cowAppear: this.cowAppear,
                    path: this.path,
                    changeText: this.changeText,
                    textBack: this.textBack,
                    changeTextInMotion: this.changeTextInMotion,
                    redirectSlidingWindow: this.redirectSlidingWindow,
                    cowsStop: this.cowsStop,
                    explanationDCtext: this.explanationDCtext,
                    stageThree: this.stageThree,
                    SWNext: this.SWNext
                }}>
                {!this.state.loading ? this.props.children : "Loading List..."}
            </InfoContext.Provider>
        );
    }
}

export default InfoContext;
