import { FC, ReactElement } from 'react';

const About: FC = (): ReactElement => {
    return (
        <div id='about' className='main-section'>
            <div className='main-section-title'>
                <h2>ABOUT</h2>
            </div>

            <div className='main-section-content'>

                <p>
                    I have a deep love for creating media whether that is drawing, painting, 3D modeling, music, or developing interactive websites with the goal of leaving positive, lasting, and memorable experiences for others. As a result, I have developed a passion for fostering new skills and sharpening my current ones.
                </p>

                <p>
                    I have been drawing for my entire life, collecting tons of A4 paper as well as any tool I can get my hands on be it pencils, pens and even chalk to draw during my break and lunch time. Yes, I was that kid.
                </p>

                <p>
                    I picked up the guitar after my brother brought home an acoustic guitar home and from then I had no chance, I was hooked! I would sit for hours playing nostalgic guitar riffs, reliving the nostalgia of my favorite bands.
                </p>

                <p>
                    My love for coding came about as a result of a 2D computer fighting game called M.U.G.E.N which my brother and I would play. M.U.G.E.N allowed players to download and use community created characters
                </p>

            </div>
        </div>
    )
}

export default About;