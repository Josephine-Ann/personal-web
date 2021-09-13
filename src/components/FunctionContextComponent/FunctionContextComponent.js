import React, { Suspense } from 'react'
import { SlidingWindow } from '../SlidingWindow/SlidingWindow';
import { Header } from '../Header/Header';
import { useRoutes } from 'hookrouter';
import { Animations } from '../Animations/Animations';
import { AboutMe } from '../AboutMe/AboutMe';
import { DivideAndConquer } from '../DivideAndConquer/DivideAndConquer';
// const AboutMe = React.lazy(() => import('../AboutMe/AboutMe'));
import { LandingPage } from '../LandingPage/LandingPage';
// const LandingPage = React.lazy(() => import('../LandingPage/LandingPage'));


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
            <Suspense fallback={<div>Loading...</div>}>
                {routeResult}
            </Suspense>
        </div>
    );

}
