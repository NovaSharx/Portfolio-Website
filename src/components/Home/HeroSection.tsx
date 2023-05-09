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

    return (
        <div id='hero-section-container'>

            <div id='hero-section-content'>
                <h1>Hello, my name is<span id='greeting'>&nbsp;Davin Jones</span></h1>
                <h6 id='intro'>I create functional web applications in the pursuit of exceptional user experience, convenience and productivity.</h6>
            </div>

            <div id='grid'>
                {renderCells()}

                <div id='base-layer'>
                    <div id='mask-layer'></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;