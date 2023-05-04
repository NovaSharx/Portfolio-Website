import { FC, ReactElement } from 'react';

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
                    icon: '/trivinova_stacks/react.svg'
                },
                {
                    name: 'Material UI',
                    icon: '/trivinova_stacks/material-ui.svg'
                },
                {
                    name: 'NodeJS',
                    icon: '/trivinova_stacks/node-js.svg'
                },
                {
                    name: 'SQL',
                    icon: '/trivinova_stacks/sql.png'
                },
                {
                    name: 'JSON Web Tokens',
                    icon: '/trivinova_stacks/json-web-token.svg'
                },
            ]
        }
    ]



    return (
        <div id='projects' className='main-section'>
            <div className='main-section-title'>
                <h2>Projects</h2>
                <div className='main-section-content'>
                    {projectsArray.map((project, key) => {
                        return (
                            <div key={key} className='project-container'>
                                <div className='project-content'>

                                    <div className='project-image'>
                                        <div className='laptop-image' style={{ backgroundImage: `url('/laptop_transparent.png')` }}>
                                            <div className='desktop-image' style={{ backgroundImage: `url(${project.image})` }} />
                                        </div>
                                    </div>

                                    <div className='project-info'>

                                        <h4 className='project-name'>{project.name}</h4>

                                        <p className='project-description'>{project.description}</p>

                                        <div className='project-tech-stack'>
                                            {project.techStack.map((tech, index) => {
                                                return (
                                                    <div key={index} className='tech-stack-item' style={{ backgroundImage: `url(${tech.icon})` }} />
                                                )
                                            })}
                                        </div>

                                        <div className='project-button-prompts'>
                                            <div className='contained-button'>Live Preview</div>
                                            <div className='contained-button'>Source Code</div>
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