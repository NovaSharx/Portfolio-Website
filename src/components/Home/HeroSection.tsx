import { FC, ReactElement } from 'react';

const HeroSection: FC = (): ReactElement => {
    return (
        <div id='hero-section'>
            Hello there, I'm <span id='davin-jones'>&nbsp;Davin Jones</span>
        </div>
    )
}

export default HeroSection;