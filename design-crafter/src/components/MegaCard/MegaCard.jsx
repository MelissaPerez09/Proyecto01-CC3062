import React from 'react'
import './MegaCard.css'

function MegaCard(){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
          }}>
        <div className="Mega">
            <div className="space1">
                <img className="image04" alt="xd" src="../src/assets/image04.png"/>
                <h1 className="one-one">1-on-1 design collaboration for product visionaries</h1>
            </div>

            <div className="space">
                <p>This is for</p>
                <ul className="yes">
                    <li>Founders or empowered product leads</li>
                    <li>Creating products for professionals</li>
                    <li>Designing solutions</li>
                </ul>

                <p>This is not for</p>
                <ul className="no">
                    <li>Teams or middle managers</li>
                    <li>Creating casual consumer products</li>
                    <li>Small design tasks</li>
                </ul>

            </div>
        </div>
        </div>
    )
}

export default MegaCard