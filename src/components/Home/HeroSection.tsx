import { FC, ReactElement } from 'react';

const HeroSection: FC = (): ReactElement => {

    function renderCells() {
        let cellArray: any = []
        for (let i = 0; i < 400; i++) {
            cellArray.push('')
        }
        return cellArray.map((cell: string, index: number) => {
            return (
                <div key={index} className='cell'></div>
            )
        })
    }

    function openInNewTab(url: string) {
        window.open(url, '_blank')
    }

    return (
        <div id='hero-section' className='main-section-container'>

            <div id='hero-section-content'>
                <h1 id='greeting'>Hello, my name is
                    <br />
                    <span id='name'>Davin Jones</span>
                </h1>
                <h3 id='intro'>I build functional web applications in order to create exceptional user experience, convenience and productivity.</h3>
                <div id='call-to-action'>
                    <span className='call-to-action-button' onClick={(): void => openInNewTab('https://docs.google.com/document/d/1RcIVHV-dAAyiSzs0fhLJ5zLtfAZ-nw0VpKtgFeve2dU/edit?usp=sharing')}>My Resume</span>
                    <span className='call-to-action-button' onClick={(): void => openInNewTab('https://github.com/NovaSharx?tab=overview&from=2023-05-01&to=2023-05-17')}>Github</span>
                </div>
            </div>

            <div id='grid'>
                {renderCells()}

                <div id='art-layer'>
                    <div id='origin-layer'>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection;