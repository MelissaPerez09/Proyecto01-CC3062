import React from 'react'
import './SelectedWork.css'
import '/src/components/display.css'

function SelectedWork(){
    return(
        <div className="root" >
            <div className="SelectedWork">
                <div>
                    <h1 className="title">Selected work</h1>
                    <img className="slide01" alt="xd" src="../src/assets/slideshow01.jpg"/>
                </div>

                <div className='textsWork'>
                    <h2 className="L20">L20 Aid delivery in the hardest-to-reach communities</h2>
                    <h4 className="UI">UI/UX, fintech, web, android</h4>
                    <p className="design">Design ecosystem of apps for web and Android helping NGOs, donors and field teams deliver humanitarian aid to the hardest-to-reach communities. Creating solutions that require minimal training and working in offline environments without extra hardware.</p>
                    <h2 className="K">10K+</h2>
                    <h3 className="people">People reach in first pilot programmes</h3>
                </div>
            </div>
        </div>

    )
}

export default SelectedWork