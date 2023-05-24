import { FC, ReactElement, useState } from 'react';
import Switch from '@mui/material/Switch';

const Navigation: FC = (): ReactElement => {

    const [navMenuOpen, setavMenuOpen] = useState(false)

    const navMenuList = (
        <ul>
            <li>
                <a href='#hero-section' id='nav-home'>HOME</a>
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
    )

    function updateNavigationState(): void {
        const navigation = document.getElementById('navigation')!;

        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            navigation.style.paddingTop = '0rem';
            navigation.style.borderWidth = '0.0rem';
            navigation.style.boxShadow = '0rem 0.9rem 1.6rem 0rem rgba(0, 0, 0, 0.15)';
        } else {
            navigation.style.paddingTop = '1.25rem';
            navigation.style.borderWidth = '0rem';
            navigation.style.boxShadow = 'none';
        }
    }

    function toggleNavMenu(): void {
        const navMenu = document.getElementById('nav-dropdown-menu')!;

        if (!navMenuOpen) {
            navMenu.style.height = '15rem';
            navMenu.style.opacity = '1';
            setavMenuOpen(true)
        } else {
            navMenu.style.height = '0rem';
            navMenu.style.opacity = '0';
            setavMenuOpen(false)
        }

    }

    window.onscroll = function () {
        updateNavigationState();
    }

    return (
        <div id='navigation'>
            <div id='nav-items-container'>
                <div id='nav-logo'>
                    <a href='/' id='nav-logo-link' text-attr='DJ'>
                        DJ
                    </a>
                </div>

                <div id='nav-links'>
                    {navMenuList}
                </div>

                <div id='light-mode-switch'>
                    <Switch />
                </div>

                <div id='nav-hamburger'>
                    <div id='hamburger-button' onClick={toggleNavMenu}>
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>

            <div id='nav-dropdown-menu'>
                {navMenuList}
            </div>
        </div>
    )
}

export default Navigation;