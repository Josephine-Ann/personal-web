import './Header.css'
// import React from 'react'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';
import { usePath } from 'hookrouter';


export function Header() {
    const {
        state: {
            leaf,
            links,
            computer,
            galaxyFold,
            iPhoneMax
        },
        cancelAnimations
    } = useContext(InfoContext);
    const path = usePath();

    return (
        <div className="header">
            <div><FontAwesomeIcon id={leaf} icon={faFeatherAlt} /></div>
            <div id={links}>
                <A href="/aboutme" onClick={() => cancelAnimations(path)} className="link">About Me</A>
                <A href="/animations" onClick={() => cancelAnimations(path)} className="link">Animations</A>
                <A href="/" onClick={() => cancelAnimations(path)} className="link">Home</A>
            </div>
        </div>
    );
}
