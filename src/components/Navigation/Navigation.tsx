import { FC, ReactElement } from 'react';

const Navigation: FC = (): ReactElement => {
    return (
        <div id='navigation'>

            <div id='nav-logo'>
                <h6>DJ</h6>
            </div>

            <div id='nav-links'>
                <ul>
                    <li>
                        <a href='/'>HOME</a>
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

            <div id='light-mode-switch'>
                <h6>Light Mode</h6>
            </div>
        </div>
    )
}

export default Navigation;