import { FC, ReactElement } from 'react';

const Navigation: FC = (): ReactElement => {
    return (
        <div id='navigation'>
            <ul id='nav-links'>
                <li>
                    <a href='/home'>HOME</a>
                </li>
                <li>
                    <a href='/about'>ABOUT</a>
                </li>
                <li>
                    <a href='/skills'>SKILLS</a>
                </li>
                <li>
                    <a href='/projects'>PROJECTS</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;