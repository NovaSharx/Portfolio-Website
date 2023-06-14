import { FC, ReactElement } from 'react';

import FolderSharedIcon from '@mui/icons-material/FolderShared';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: FC = (): ReactElement => {

    const navMenuList: JSX.Element = (
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

    return (
        <div id='footer'>

            <div id='footer-content'>

                <div id='footer-name'>
                    DAVIN JONES
                </div>

                <div id='footer-nav'>
                    {navMenuList}
                </div>

                <div id='footer-social-links'>
                    <ul>
                        <li>
                            <a href='https://docs.google.com/document/d/1RcIVHV-dAAyiSzs0fhLJ5zLtfAZ-nw0VpKtgFeve2dU/edit?usp=sharing' target='_blank' rel='noreferrer'>
                                <FolderSharedIcon /> Resume
                            </a>
                        </li>

                        <li>
                            <a href='mailto:davin-dj@hotmail.com' target='_blank' rel='noreferrer'>
                                <EmailIcon /> Email
                            </a>
                        </li>

                        <li>
                            <a href='https://www.linkedin.com/in/davinjones/' target='_blank' rel='noreferrer'>
                                <LinkedInIcon /> LinkedIn
                            </a>
                        </li>

                        <li>
                            <a href='https://github.com/NovaSharx?tab=overview&from=2023-05-01&to=2023-05-17' target='_blank' rel='noreferrer'>
                                <GitHubIcon /> Github
                            </a>
                        </li>
                    </ul>
                </div>

                <div id='footer-attributions'>
                    Tech stack icons by <a href='https://icons8.com/' target='_blank' rel='noreferrer'>Icons8</a>
                </div>

                <div id='footer-bottom'>
                    <span>
                        © Copyright 2023 | Davin Jones
                    </span>
                </div>
            </div>


        </div>
    )
}

export default Footer;