import { FC, ReactElement } from 'react';

const HeroSection: FC = (): ReactElement => {
    return (
        <div id='hero-section'>
            <div id='hero-section-content'>
                Hello there, I'm<span id='davin-jones'>&nbsp;Davin Jones</span>
            </div>
            <div id='spotlight-layer'></div>
        </div>
    )
}

export default HeroSection;