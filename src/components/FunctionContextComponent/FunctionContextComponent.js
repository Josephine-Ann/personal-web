import React from 'react'
import { LandingPage } from '../LandingPage/LandingPage';
import { Animations } from '../Animations/Animations';
import { AboutMe } from '../AboutMe/AboutMe';
import { DivideAndConquer } from '../DivideAndConquer/DivideAndConquer';
import { SlidingWindow } from '../SlidingWindow/SlidingWindow';
import { Header } from '../Header/Header';
import { useRoutes } from 'hookrouter';

export const FunctionContextComponent = () => {

    const routes = {
        '/': () => <LandingPage />,
        '/animations': () => <Animations />,
        '/aboutme': () => <AboutMe />,
        '/animations/divideandconquer': () => <DivideAndConquer />,
        '/animations/slidingwindow': () => <SlidingWindow />

    };
    const routeResult = useRoutes(routes);

    return (
        <div>
            <Header />
            {routeResult}
        </div>
    );

}
