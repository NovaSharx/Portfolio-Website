import { FC, ReactElement, useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FolderSharedIcon from '@mui/icons-material/FolderShared';

const Navigation: FC = (): ReactElement => {

    const [navMenuOpen, setNavMenuOpen] = useState(false)

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

    const navSocialLinks = (
        <ul>
            <li>
                <a href='https://www.linkedin.com/in/davinjones/' target='_blank' rel='noreferrer'>
                    <span className='social-icon'>
                        <LinkedInIcon />
                    </span>
                </a>
            </li>
            <li>
                <a href='https://github.com/NovaSharx?tab=overview&from=2023-05-01&to=2023-05-17' target='_blank' rel='noreferrer'>
                    <span className='social-icon'>
                        <GitHubIcon />
                    </span>
                </a>
            </li>
            <li>
                <a href='https://docs.google.com/document/d/1RcIVHV-dAAyiSzs0fhLJ5zLtfAZ-nw0VpKtgFeve2dU/edit?usp=sharing' target='_blank' rel='noreferrer'>
                    <span className='social-icon'>
                        <FolderSharedIcon />
                    </span>
                </a>
            </li>
        </ul>
    )

    function updateNavigationState(): void {
        const navigation = document.getElementById('navigation')!;

        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            navigation.style.paddingTop = '0rem';
            navigation.style.borderWidth = '0.0rem';
            navigation.style.boxShadow = '0rem 0.9rem 1.6rem 0rem rgba(0, 0, 0, 0.15)';
            navigation.style.backdropFilter = 'blur(100px)';
        } else {
            navigation.style.paddingTop = '1.25rem';
            navigation.style.borderWidth = '';
            navigation.style.boxShadow = '';
            navigation.style.backdropFilter = '';
        }
    }

    function toggleNavMenu(): void {
        const navMenu = document.getElementById('nav-dropdown-menu')!;
        const hamburgerTop = document.getElementById('hamburger-top')!;
        const hamburgerMiddle = document.getElementById('hamburger-middle')!;
        const hamburgerBottom = document.getElementById('hamburger-bottom')!;

        if (!navMenuOpen) {
            navMenu.style.height = '15rem';
            navMenu.style.opacity = '1';
            hamburgerTop.style.animationName = 'top';
            hamburgerMiddle.style.animationName = 'middle';
            hamburgerBottom.style.animationName = 'bottom';
            setNavMenuOpen(true)
        } else {
            navMenu.style.height = '0rem';
            navMenu.style.opacity = '0';
            hamburgerTop.style.animationName = '';
            hamburgerMiddle.style.animationName = '';
            hamburgerBottom.style.animationName = '';
            setNavMenuOpen(false)
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

                <div id='nav-menu-links'>
                    {navMenuList}
                </div>

                <div id='nav-social-links'>
                    {navSocialLinks}
                </div>

                <div id='nav-hamburger'>
                    <div id='hamburger-button' onClick={toggleNavMenu}>
                        <span id='hamburger-top'></span>
                        <span id='hamburger-middle'></span>
                        <span id='hamburger-bottom'></span>
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