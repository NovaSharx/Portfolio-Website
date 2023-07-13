import { FC, ReactElement } from 'react';
import PaletteIcon from '@mui/icons-material/Palette';
import TerminalIcon from '@mui/icons-material/Terminal';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const About: FC = (): ReactElement => {
    return (
        <div className='main-section-container'>
            <div id='about' className='main-section'>
                <div className='main-section-title'>
                    <h2>ABOUT</h2>
                </div>

                <div className='main-section-content'>

                    <div id='about-section'>

                        <div id='about-description'>
                            <p>
                                I have a deep love for <b>creating</b> media whether that is <b>drawing</b>, <b>painting</b>, <b>3D modeling</b>, <b>music</b>, or <b>developing interactive websites</b> with the goal of leaving <b>positive</b>, <b>lasting</b>, and <b>memorable</b> experiences for others. As a result, I have developed a passion for fostering <b>new skills</b> and sharpening my current ones.
                            </p>
                        </div>

                        <div id='about-image' />

                        <div id='about-content'>


                            <div className='about-content-column'>
                                <span className='about-column-symbol'>
                                    <PaletteIcon />
                                </span>
                                <p className='about-column-text'>
                                    I have been drawing for my entire life, collecting tons of A4 paper as well as any tool I can get my hands on be it pencils, pens and even chalk to draw during my break and lunch time. Yes, I was that kid.
                                </p>
                            </div>


                            <div className='about-content-column'>
                                <span className='about-column-symbol'>
                                    <TerminalIcon />
                                </span>
                                <p className='about-column-text'>
                                    My love for coding came about as a result of a 2D computer fighting game called M.U.G.E.N which my brother and I would play. M.U.G.E.N allowed players to download and use community created characters
                                </p>
                            </div>

                            <div className='about-content-column'>
                                <span className='about-column-symbol'>
                                    <MusicNoteIcon />
                                </span>
                                <p className='about-column-text'>
                                    I picked up the guitar after my brother brought home an acoustic guitar home and from then I had no chance, I was hooked! I would sit for hours playing nostalgic guitar riffs, reliving the nostalgia of my favorite bands.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;