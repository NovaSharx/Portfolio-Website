import { FC, ReactElement } from 'react';

const Projects: FC = (): ReactElement => {

    const projectsArray = [
        {
            name: 'Trivinova',
            description: '',
            picture: '',
            stack: ''
        }
    ]



    return (
        <div id='projects' className='section'>
            <div className='section-title'>
                <h2>Projects</h2>
            </div>
        </div>
    )
}

export default Projects;