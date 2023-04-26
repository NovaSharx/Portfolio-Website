import { FC, ReactElement } from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

const Home: FC = (): ReactElement => {
    return (
        <div id='home'>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home;