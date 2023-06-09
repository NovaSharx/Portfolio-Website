import { FC, ReactElement } from 'react';

const HeroSection: FC = (): ReactElement => {

    function renderCells(): JSX.Element[] {
        let cellArray: string[] = []
        for (let i: number = 0; i < 400; i++) {
            cellArray.push('')
        }
        return cellArray.map((cell: string, index: number) => {
            return (
                <div key={index} className='cell' onClick={swapLayerImage}></div>
            )
        })
    }

    function swapLayerImage(): void {
        const topLayer: HTMLElement = document.getElementById('top-layer')!;
        const bottomLayer: HTMLElement = document.getElementById('bottom-layer')!;

        [topLayer.style.background, bottomLayer.style.background] = [window.getComputedStyle(bottomLayer).background, window.getComputedStyle(topLayer).background];

        topLayer.style.backgroundPosition = 'center center';
        bottomLayer.style.backgroundPosition = 'center center';
    }

    return (
        <div className='main-section-container' id='hero-section-container'>
            <div id='hero-section' className='main-section'>

                <div id='hero-section-content'>

                    <div id='greeting'>Hi, my name is
                        <br />
                        <h1 id='name'>Davin Jones</h1>
                    </div>

                    <h2 id='role'>
                        and I am a <br />
                        <span id='role-title'>
                            <span>&lt; </span>
                            Web Developer
                            <span> &gt;</span>
                        </span>
                    </h2>

                    <p id='intro'>I build functional web applications in order to create exceptional user experience, convenience and productivity.</p>

                    <div id='call-to-action'>
                        <span>

                        </span>
                        <a id='call-to-action-button' href='#projects'>
                            <span className='button-content'>
                                View My Projects
                            </span>
                        </a>
                    </div>
                </div>

                <div id='grid'>
                    {renderCells()}

                    <div id='top-layer'>
                        <div id='bottom-layer'>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection;