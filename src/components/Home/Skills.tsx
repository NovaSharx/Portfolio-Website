import { FC, ReactElement } from 'react';

const Skills: FC = (): ReactElement => {
    return (
        <div id='skills' className='main-section'>
            <div className='main-section-title'>
                <h2>SKILLS</h2>
            </div>

            <div className='main-section-content'>
                <div id='skills-container'>
                    <div className='skills-category'>
                        <h4>Frontend</h4>

                        <div>
                            React, Sass
                        </div>
                    </div>

                    <div className='skills-category'>
                        <h4>Backend</h4>

                        <div>
                            Express.js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;