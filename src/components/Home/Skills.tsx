import { FC, ReactElement } from 'react';

const Skills: FC = (): ReactElement => {

    const skillsCategories = [
        {
            name: 'FRONTEND',
            stacks: [
                {
                    name: 'HTML5',
                    icon: '/tech_stack_icons/html5.svg'
                },
                {
                    name: 'CSS3',
                    icon: '/tech_stack_icons/css3.svg'
                }
                ,
                {
                    name: 'React',
                    icon: '/tech_stack_icons/react.svg'
                }
                ,
                {
                    name: 'Bootstrap',
                    icon: '/tech_stack_icons/bootstrap.svg'
                }
                ,
                {
                    name: 'Material UI',
                    icon: '/tech_stack_icons/material-ui.svg'
                }
                ,
                {
                    name: 'Sass',
                    icon: '/tech_stack_icons/sass.svg'
                }
            ]
        },
        {
            name: 'BACKEND',
            stacks: [
                {
                    name: 'Node.js',
                    icon: '/tech_stack_icons/node-js.svg'
                }
                ,
                {
                    name: 'Express',
                    icon: '/tech_stack_icons/express.png'
                }
                ,
                {
                    name: 'MongoDB',
                    icon: '/tech_stack_icons/mongodb.svg'
                }
                ,
                {
                    name: 'SQL',
                    icon: '/tech_stack_icons/sql.png'
                }
            ]
        },
        {
            name: 'EXPOSURE',
            stacks: [
                {
                    name: 'jQuery',
                    icon: '/tech_stack_icons/jquery.png'
                }
                ,
                {
                    name: 'Flask',
                    icon: '/tech_stack_icons/flask.svg'
                }
                ,
                {
                    name: 'Jest',
                    icon: '/tech_stack_icons/jest.png'
                }
                ,
                {
                    name: 'Tailwind UI',
                    icon: '/tech_stack_icons/tailwind.svg'
                }
                ,
                {
                    name: 'Unity',
                    icon: '/tech_stack_icons/unity.svg'
                }

            ]
        }
    ]

    return (
        <div className='main-section-container'>
            <div id='skills' className='main-section'>
                <div className='main-section-title'>
                    <h2>SKILLS</h2>
                </div>

                <div className='main-section-content'>
                    <div id='skills-section'>

                        <div id='skills-description'>
                            <p>
                                I've found that I <b>thrive</b> in this ever evolving coding environment by my sheer <b>love of learning</b> new technologies and I seek to explore <b>new inovative</b> ways of getting the job done.
                            </p>

                            <p>
                                Here are some of relevant skills I've attained along my journey as a web developer.
                            </p>
                        </div>

                        <div id='skills-categories'>
                            {skillsCategories.map((category, index) => {
                                return (
                                    <div key={index} className='skills-category'>
                                        <h3>{category.name}</h3>

                                        <div className='skills-grid'>
                                            {category.stacks.map((stack, idx) => {
                                                return (
                                                    <div className='skill-cell' key={idx}>
                                                        <span className='skill-chip'>
                                                            <span className='skill-icon' style={{ backgroundImage: `url(${stack.icon})` }}></span>
                                                            <span className='skill-name'>{stack.name}</span>
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;