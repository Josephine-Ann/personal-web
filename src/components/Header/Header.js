import './Header.css'
// import React from 'react'
import React, { useContext } from 'react'
import { InfoContext } from '../../InfoProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';


export function Header() {
    const {
        state: {
            leaf,
            links,
            computer,
            galaxyFold,
            iPhoneMax
        }
    } = useContext(InfoContext);

    return (
        <div className="header">
            <div><FontAwesomeIcon id={leaf} icon={faFeatherAlt} /></div>
            <div id={links}>
                <A href="/aboutme" className="link">About Me</A>
                <A href="/animations" className="link">Animations</A>
                <A href="/" className="link">Home</A>
            </div>
        </div>
    );
}
