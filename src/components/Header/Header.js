import './Header.css'
// import React from 'react'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';
import { usePath } from 'hookrouter';


export function Header() {
    const {
        state: {
            leaf,
            links,
            language
        },
        cancelAnimations,
        changeLanguage
    } = useContext(InfoContext);
    const path = usePath();

    return (
        <div className="header">
            <div><FontAwesomeIcon id={leaf} icon={faFeatherAlt} /></div>
            <div id={links}>
                <div id="languages">
                    <FontAwesomeIcon icon={faGlobeEurope} />
                    <a id={(language === "English") && "link-bold"} href="/aboutme" onClick={() => changeLanguage("English")} className="link">En</a>
                    <a id={(language === "Spanish") && "link-bold"} href="/aboutme" onClick={() => changeLanguage("Spanish")} className="link">Sp</a>
                </div>
                <A href="/aboutme" onClick={() => cancelAnimations(path)} className="link">About Me</A>
                <A href="/animations" onClick={() => cancelAnimations(path)} className="link">Animations</A>
                <A href="/" onClick={() => cancelAnimations(path)} className="link">Home</A>
            </div>
        </div>
    );
}
