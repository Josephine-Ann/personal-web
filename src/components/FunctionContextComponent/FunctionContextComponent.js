import React, { lazy, Suspense } from 'react'
// import { LandingPage } from '../LandingPage/LandingPage';
// import { Animations } from '../Animations/Animations';
// import { AboutMe } from '../AboutMe/AboutMe';
import { DivideAndConquer } from '../DivideAndConquer/DivideAndConquer';
import { SlidingWindow } from '../SlidingWindow/SlidingWindow';
import { NotFound } from '../NotFound/NotFound';
import { Header } from '../Header/Header';
import { useRoutes } from 'hookrouter';

const LandingPage = lazy(() => import('../LandingPage/LandingPage'))
const AboutMe = lazy(() => import('../AboutMe/AboutMe'))
const Animations = lazy(() => import('../Animations/Animations'))
// const SlidingWindow = lazy(() => import('../SlidingWindow/SlidingWindow'))
// const DivideAndConquer = lazy(() => import('../DivideAndConquer/DivideAndConquer'))
// const NotFound
// import { DivideAndConquer } from '../DivideAndConquer/DivideAndConquer';

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
            <Suspense fallback={<NotFound />}>{routeResult}</Suspense>
        </div>
    );

}
