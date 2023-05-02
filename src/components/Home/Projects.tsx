import { FC, ReactElement } from 'react';

const Projects: FC = (): ReactElement => {

    const projectsArray = [
        {
            name: 'Trivinova',
            description: <p>Trivinova description</p>,
            picture: '',
            stack: ''
        }
    ]



    return (
        <div id='projects' className='main-section'>
            <div className='main-section-title'>
                <h2>Projects</h2>
                <div>
                    {projectsArray.map((project, key) => {
                        return (
                            <div key={key} className='project-container'>
                                {key}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;