import React from 'react'

export default function Intro() {
    return (
        <section className="intro">
            <img src="./images/intro.jpg" alt="Intro" className="intro__img" />
            <div className="intro__info">
                <div className="intro__infoLeft">
                    Need more capital?
                </div>
                <div className="intro__infoRight">
                    Move in today and pay over 10 years
                    <a href="#" className="intro__button">See Offer</a>
                </div>
            </div>
        </section>
    )
}
