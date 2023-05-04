import { FC, ReactElement } from 'react';
import Switch from '@mui/material/Switch';

const Navigation: FC = (): ReactElement => {
    return (
        <div id='navigation'>

            <div id='nav-logo'>
                DJ
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
                <Switch />
            </div>
        </div>
    )
}

export default Navigation;