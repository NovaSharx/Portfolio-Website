import { FC, ReactElement } from 'react';

const HeroSection: FC = (): ReactElement => {

    function renderCells() {
        let cellArray: any = []
        for (let i = 0; i < 400; i++) {
            cellArray.push('')
        }
        return cellArray.map((cell: string, index: number) => {
            return (
                <div key={index} className='cell' onClick={swapLayerImage}></div>
            )
        })
    }

    function swapLayerImage(): void {
        const topLayer = document.getElementById('top-layer')!;
        const bottomLayer = document.getElementById('bottom-layer')!;

        [topLayer.style.background, bottomLayer.style.background] = [window.getComputedStyle(bottomLayer).background, window.getComputedStyle(topLayer).background];

        topLayer.style.backgroundPosition = 'center 75%';
        bottomLayer.style.backgroundPosition = 'center 75%';
    }

    return (
        <div className='main-section-container'>
            <div id='hero-section' className='main-section'>

                <div id='hero-section-content'>

                    <h1 id='greeting'>Hi there, my name is
                        <br />
                        <span id='name'>Davin Jones</span>
                    </h1>

                    <h2 id='role'> &lt; Web Developer &gt; </h2>

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