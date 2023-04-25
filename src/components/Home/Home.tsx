import { FC, ReactElement } from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Projects from './Projects';

const Home: FC = (): ReactElement => {
    return (
        <div id='home'>
            <HeroSection />
            <About />
            <Projects />
        </div>
    )
}

export default Home;