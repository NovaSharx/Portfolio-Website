import { FC, ReactElement } from 'react';
import Switch from '@mui/material/Switch';

const Navigation: FC = (): ReactElement => {

    function solidifyNavigation(): void {
        const navigation = document.getElementById('navigation')

        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            navigation!.style.boxShadow = '0px 5px 5px 0px rgba(0, 0, 0, 0.1)'
        } else {
            navigation!.style.boxShadow = 'none'
        }
    }

    window.onscroll = function () { solidifyNavigation() }

    return (
        <div id='navigation'>

            <div id='nav-logo'>
                DJ
            </div>

            <div id='nav-links'>
                <ul>
                    <li>
                        <a href='#hero-section-container'>HOME</a>
                    </li>
                    <li>
                        <a href='#about'>ABOUT</a>
                    </li>
                    <li>
                        <a href='#skills'>SKILLS</a>
                    </li>
                    <li>
                        <a href='#projects'>PROJECTS</a>
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