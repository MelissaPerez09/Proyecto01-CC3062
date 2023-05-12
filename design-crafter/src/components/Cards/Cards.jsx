import React from 'react'
import './Cards.css'

function Cards(){
    return(
        <div className="cards">
            <div className="card">
                <h1 className="Hc">Two ways we can work together</h1>
            </div>
            <div className="card">
                <img className="imageC" alt="xd" src="../src/assets/image05.png"/>
                <h1 className="Hc">Flesh out your product idea</h1>
                <p className="pc">Bring your software idea to life in two weeks, giving you the opportunity to validate and gain momentum in your business faster.</p>
            </div>
            <div className="card">
                <img className="imageC" alt="xd" src="../src/assets/image03.png"/>
                <h1 className="Hc">Improve user retention</h1>
                <p className="pc">Improve the onboarding and core features to ensure that your new users have a smooth first experience and make your product a part of their daily work.</p>
            </div>
        </div>
    )
}

export default Cards