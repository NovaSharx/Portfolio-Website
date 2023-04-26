import { FC, ReactElement } from 'react';

const HeroSection: FC = (): ReactElement => {

    function renderCells() {
        let cellArray: any = []
        for (let i = 0; i < 400; i++) {
            cellArray.push('')
        }
        return cellArray.map((cell: string, index: number) => {
            return (
                <div key={index} className='cell'>{index + 1}</div>
            )
        })
    }

    return (
        <div id='hero-section'>
            <div id='grid'>
                {renderCells()}

                <div id='dark-layer'>
                    <div id='light-layer'></div>
                </div>
            </div>

            <div id='hero-section-content'>
                Hello there, I'm<span id='davin-jones'>&nbsp;Davin Jones</span>
            </div>
        </div>
    )
}

export default HeroSection;