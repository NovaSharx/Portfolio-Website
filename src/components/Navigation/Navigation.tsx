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

    // function highlightScrollPosition() {
    //     const home: HTMLElement = document.getElementById('home')!;
    //     const about: HTMLElement = document.getElementById('about')!;
    //     const skills: HTMLElement = document.getElementById('skills')!;
    //     const projects: HTMLElement = document.getElementById('projects')!;
    //     const navHome: HTMLElement = document.getElementById('nav-home')!;
    //     const navAbout: HTMLElement = document.getElementById('nav-about')!;
    //     const navSkills: HTMLElement = document.getElementById('nav-skills')!;
    //     const navProjects: HTMLElement = document.getElementById('nav-projects')!;

    //     // navHome.style.color = 'black';
    //     // navAbout.style.color = 'black';
    //     // navSkills.style.color = 'black';
    //     // navProjects.style.color = 'black';

    //     if (projects.getBoundingClientRect().top < 0) {
    //         // navProjects.style.color = 'orange';
    //         console.log('projects')
    //     } else if (skills.getBoundingClientRect().top < 0) {
    //         // navSkills.style.color = 'orange';
    //         console.log('skills')
    //     } else if (about.getBoundingClientRect().top < 0) {
    //         // navAbout.style.color = 'orange';
    //         console.log('about')
    //     } else {
    //         // navHome.style.color = 'orange';
    //         console.log('home')
    //     }
    // }

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