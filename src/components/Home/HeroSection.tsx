import { FC, ReactElement, useState } from 'react';

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
                    <h1 id='greeting'>Hello, my name is
                        <br />
                        <span id='name'>Davin Jones</span>
                    </h1>
                    <p id='intro'>I build functional web applications in order to create exceptional user experience, convenience and productivity.</p>
                    <div id='call-to-action'>
                        <a className='call-to-action-button' href='https://docs.google.com/document/d/1RcIVHV-dAAyiSzs0fhLJ5zLtfAZ-nw0VpKtgFeve2dU/edit?usp=sharing' target='_blank'>My Resume</a>
                        <a className='call-to-action-button' href='https://github.com/NovaSharx?tab=overview&from=2023-05-01&to=2023-05-17' target='_blank'>Github</a>
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