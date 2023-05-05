import { FC, ReactElement } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';

const Projects: FC = (): ReactElement => {

    const projectsArray = [
        {
            name: 'TRIVINOVA',
            description: `Educational trivia web application for users to test their knowledge on a variety of different topics.`,
            image: '/trivinova_image.jpg',
            imageAlt: '',
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
            ]
        },
        {
            name: 'NOVABRATO',
            description: `A guitar music theory learning web application designed to aid beginner guitar players through interactive exercises.`,
            image: '/novabrato_image.jpg',
            imageAlt: '',
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
            ]
        },
        {
            name: 'SUPERNOVA',
            description: `A web based game application designed to challenge a user’s hand-eye coordination.`,
            image: '/supernova_image.jpg',
            imageAlt: '',
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
            ]
        }
    ]



    return (
        <div id='projects' className='main-section'>
            <div className='main-section-title'>
                <h2>PROJECTS</h2>
                <div className='main-section-content'>
                    {projectsArray.map((project, index) => {

                        return (
                            <div key={index} className='project-container'>
                                <div className='project-content' style={{ flexDirection: index % 2 ? 'row' : 'row-reverse' }}>

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
                                                    <div key={idx} className='tech-stack-item' style={{ backgroundImage: `url(${tech.icon})` }} />
                                                )
                                            })}
                                        </div>

                                        <div className='project-button-prompts'>
                                            <div className='contained-button'>
                                                <div>
                                                    Live Demo
                                                    <OpenInNewIcon sx={{ fontSize: '20px', ml: 1 }} />
                                                </div>
                                            </div>
                                            <div className='contained-button'>
                                                <div>
                                                    Source Code
                                                    <CodeIcon sx={{ fontSize: '20px', ml: 1 }} />
                                                </div>
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
    )
}

export default Projects;