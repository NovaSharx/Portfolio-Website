import { FC, ReactElement } from 'react';
import HeroSection from './HeroSection';

const Home: FC = (): ReactElement => {
    return (
        <div id='home'>
            <HeroSection />
            Home
        </div>
    )
}

export default Home;