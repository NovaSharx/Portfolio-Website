import { FC, ReactElement } from 'react';
import Switch from '@mui/material/Switch';

const Navigation: FC = (): ReactElement => {

    function solidifyNavigation(): void {
        const navigation = document.getElementById('navigation');

        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            navigation!.style.paddingTop = '0px';
            navigation!.style.borderWidth = '3px';
            navigation!.style.boxShadow = '0px 15px 25px 0px rgba(0, 0, 0, 0.1)';
        } else {
            navigation!.style.paddingTop = '20px';
            navigation!.style.borderWidth = '0px';
            navigation!.style.boxShadow = 'none';
        }
    }

    window.onscroll = function () {
        solidifyNavigation();
    }

    return (
        <div id='navigation'>

            <div id='nav-logo'>
                <a href='/' id='nav-logo-link'>DJ</a>
            </div>

            <div id='nav-links'>
                <ul>
                    <li>
                        <a href='#hero-section-container' id='nav-home'>HOME</a>
                    </li>
                    <li>
                        <a href='#about' id='nav-about'>ABOUT</a>
                    </li>
                    <li>
                        <a href='#skills' id='nav-skills'>SKILLS</a>
                    </li>
                    <li>
                        <a href='#projects' id='nav-projects'>PROJECTS</a>
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