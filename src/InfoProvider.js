import React from 'react'
import SlidingWindowState from './SlidingWindowState.json';
import DivideAndConquerState from './DivideAndConquerState.json';

export const InfoContext = React.createContext();

var slidingStateSingle = SlidingWindowState[0]
var weightsOfThree = SlidingWindowState[1]
var stageTwoLineArray = SlidingWindowState[2]
var cowArray = SlidingWindowState[3]
var singleWeights = SlidingWindowState[4]
var individualCows = SlidingWindowState[5]
var newClassesGalaxy = SlidingWindowState[6]
var newClasses = SlidingWindowState[7]
var newClassesIphoneMax = SlidingWindowState[8]
var textExplanation = SlidingWindowState[9]
var codeNaive = SlidingWindowState[10]
var codeRefactor = SlidingWindowState[11]

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
            singleWeightOne: slidingStateSingle.singleWeightOne,
            singleWeightTwo: slidingStateSingle.singleWeightTwo,
            singleWeightThree: slidingStateSingle.singleWeightThree,
            singleWeightFour: slidingStateSingle.singleWeightFour,
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
            minusValue: "900kg",
            plusValue: "1050kg",
            plus: "",
            hiddenThree: "",
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
            stageTwoLine: "stageTwoLine",
            cancellingSW: false
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
            hiddenThree: newClasses.hiddenThree,
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
                cowInMotion: true
            })
        } else if (this.state.width > 414 && this.state.width < 818) {
            this.setState({
                cowInMotion: true
            })
        } else {
            this.setState({
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
        var indCows = this.state.individualCows
        this.setState({ cancellingSW: true })
        for (const property in indCows) {
            indCows[property] = false
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
            individualCows: indCows
        })
        await this.delay(11);
        this.setState({
            individualCows: indCows,
            minusValue: slidingStateSingle.minusValue,
            plusValue: slidingStateSingle.plusValue,
            maxWeight: slidingStateSingle.maxWeight,
            weightsOfThree: weightsOfThree,
            singleWeights: singleWeights,
            cowInMotion: false,
            slidingButton: newClasses.slidingButton,
            minus: newClasses.minus,
            plus: newClasses.plus,
            hiddenThree: newClasses.hiddenThree,
            stageTwoLineOne: slidingStateSingle.stageTwoLineOne,
            stageTwoLineTwo: slidingStateSingle.stageTwoLineTwo,
            singleWeightOne: slidingStateSingle.singleWeightOne,
            singleWeightTwo: slidingStateSingle.singleWeightTwo,
            singleWeightThree: slidingStateSingle.singleWeightThree,
            singleWeightFour: slidingStateSingle.singleWeightFour,
            totalWeight: slidingStateSingle.totalWeight
        })
        await this.delay(11);
        if (!this.state.individualCows[this.state.individualCows.length]) {
            this.setState({
                cancellingSW: false
            })
        }
    }

    cowMovements = async (totalWeight, weights, minVal, plusVal) => {
        if (this.state.cowInMotion) {
            this.setState({
                minusValue: singleWeights[minVal],
                plusValue: singleWeights[plusVal]
            })
            if (this.state.weightsOfThree[totalWeight] === "3425kg") {
                this.setState({
                    totalWeight: "",
                    stageTwoLineOne: stageTwoLineArray["6"],
                    stageTwoLineTwo: ""
                })
            } else if ((parseInt(totalWeight, 10)) % 2 !== 0) {
                this.setState({
                    totalWeight: this.state.weightsOfThree[totalWeight],
                    maxWeight: this.state.weightsOfThree[totalWeight],
                    stageTwoLineOne: stageTwoLineArray["2"],
                    stageTwoLineTwo: stageTwoLineArray["3"]
                })
            } else if ((parseInt(totalWeight, 10)) % 2 === 0) {
                this.setState({
                    totalWeight: this.state.weightsOfThree[totalWeight],
                    stageTwoLineOne: stageTwoLineArray["4"],
                    stageTwoLineTwo: stageTwoLineArray["5"]
                })
            }
        }
    }

    stageTwo = async () => {
        await this.sizeCows()
        var cowInMotion = this.state.cowInMotion
        var weights = {
            "1": [10, "4"],
            "2": [1, "4"],
            "3": [2, "5"],
            "4": [3, "6"],
            "5": [4, "7"],
            "6": [1, "8"],
            "7": [2, "9"],
            "8": [3, "10"],
            "9": [4, "11"],
            "10": [1, "12"],
            "11": [2, "13"],
            "12": [3, "14"],
            "13": [4, "15"],
            "14": [1, "16"],
            "15": [2, "17"],
            "16": [3, "18"],
            "17": [3, "18"],
            "18": [3, "18"]
        }
        for (var x = 1; x < 18 && cowInMotion; x++) {
            if (weights[x][0] === 1) {
                this.setState({
                    singleWeightOne: singleWeights[weights[x][1]]
                })
            } else if (weights[x][0] === 2) {
                this.setState({
                    singleWeightTwo: singleWeights[weights[x][1]]
                })
            } else if (weights[x][0] === 3) {
                this.setState({
                    singleWeightThree: singleWeights[weights[x][1]]
                })
            } else if (weights[x][0] === 4) {
                this.setState({
                    singleWeightFour: singleWeights[weights[x][1]]
                })
            }
            await this.delay(5)
            await this.cowMovements(x.toString(), weights[x], x.toString(), ((parseInt(x, 10)) + 3).toString())
            await this.delay(6)
            if (this.state.cowInMotion === false) {
                break
            }
        }
        if (this.state.cowInMotion) {
            this.setState({
                stageTwoLineOne: "",
                stageTwoLineTwo: "",
                totalWeight: ""
            })
        }
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
