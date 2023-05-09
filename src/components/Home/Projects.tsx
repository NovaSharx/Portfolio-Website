import { FC, ReactElement } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';

const Projects: FC = (): ReactElement => {

    const projectsArray = [
        {
            name: 'TRIVINOVA',
            description: `Educational trivia web application for users to test their knowledge on a variety of different topics.`,
            image: '/trivinova_image.jpg',
            techStack: [
                {
                    name: 'React',
                    icon: '/tech_stack_icons/react.svg'
                },
                {
                    name: 'Material UI',
                    icon: '/tech_stack_icons/material-ui.svg'
                },
                {
                    name: 'NodeJS',
                    icon: '/tech_stack_icons/node-js.svg'
                },
                {
                    name: 'SQL',
                    icon: '/tech_stack_icons/sql.png'
                },
                {
                    name: 'JSON Web Tokens',
                    icon: '/tech_stack_icons/json-web-token.svg'
                }
            ],
            livePreview: 'https://trivinova-9jqfd.ondigitalocean.app/',
            sourceCode: 'https://github.com/NovaSharx/Trivinova.git'
        },
        {
            name: 'NOVABRATO',
            description: `A guitar music theory learning web application designed to aid beginner guitar players through interactive exercises.`,
            image: '/novabrato_image.jpg',
            techStack: [
                {
                    name: 'React',
                    icon: '/tech_stack_icons/react.svg'
                },
                {
                    name: 'Material UI',
                    icon: '/tech_stack_icons/material-ui.svg'
                },
                {
                    name: 'Figma',
                    icon: '/tech_stack_icons/figma.svg'
                },
                {
                    name: 'NodeJS',
                    icon: '/tech_stack_icons/node-js.svg'
                },
                {
                    name: 'SQL',
                    icon: '/tech_stack_icons/sql.png'
                },
                {
                    name: 'JSON Web Tokens',
                    icon: '/tech_stack_icons/json-web-token.svg'
                }
            ],
            livePreview: 'https://novabrato-bh8y6.ondigitalocean.app/',
            sourceCode: 'https://github.com/NovaSharx/Novabrato.git'
        },
        {
            name: 'SUPERNOVA',
            description: `A web based game application designed to challenge a user’s hand-eye coordination.`,
            image: '/supernova_image.jpg',
            techStack: [
                {
                    name: 'HMTL 5',
                    icon: '/tech_stack_icons/html5.svg'
                },
                {
                    name: 'CSS 3',
                    icon: '/tech_stack_icons/css3.svg'
                },
                {
                    name: 'JavaScript',
                    icon: '/tech_stack_icons/javascript.svg'
                }
            ],
            livePreview: 'https://supernova-9xeo8.ondigitalocean.app/',
            sourceCode: 'https://github.com/NovaSharx/Supernova.git'
        }
    ]

    function openInNewTab(url: string) {
        window.open(url, '_blank')
    }

    return (
        <div id='projects' className='main-section'>
            <div className='main-section-title'>
                <h2>PROJECTS</h2>
                <div className='main-section-content'>
                    <div id='project-container'>
                        {projectsArray.map((project, index) => {

                            return (
                                <div key={index} className='project-content' style={{ flexDirection: index % 2 ? 'row' : 'row-reverse' }}>

                                    <div className='project-image'>
                                        <div className='laptop-image' style={{ backgroundImage: `url('/laptop_transparent.png')` }}>
                                            <div className='desktop-image' style={{ backgroundImage: `url(${project.image})` }} />
                                        </div>
                                    </div>

                                    <div className='project-info'>

                                        <h4 className='project-name'>{project.name}</h4>

                                        <p className='project-description'>{project.description}</p>

                                        <div className='project-tech-stack'>
                                            {project.techStack.map((tech, idx) => {
                                                return (
                                                    <div key={idx} className='tech-stack-item' style={{ backgroundImage: `url(${tech.icon})` }}>
                                                        <div className='tech-stack-popup'>{tech.name}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className='project-button-prompts'>
                                            <div className='contained-button' onClick={(): void => openInNewTab(project.livePreview)}>
                                                <div>
                                                    LIVE DEMO
                                                    <OpenInNewIcon sx={{ fontSize: '20px', ml: 1 }} />
                                                </div>
                                            </div>
                                            <div className='contained-button' onClick={(): void => openInNewTab(project.sourceCode)}>
                                                <div>
                                                    SOURCE CODE
                                                    <CodeIcon sx={{ fontSize: '20px', ml: 1 }} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;