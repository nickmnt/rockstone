import React from 'react'

export default function Navigation() {
    return (
        <>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__lbl">
                <svg className="navigation__burger" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
            </label>
            <div className="navigation__background">
                
            </div>
            <div className="navigation__container">
                <div className="navigation__links">
                    <div className="navigation__link">
                        communities
                    </div>
                    <div className="navigation__link">
                        projects
                    </div>
                    <div className="navigation__link navigation__enquire">
                        enquire
                    </div>
                    <div className="navigation__link">
                        offers
                    </div>
                    <div className="navigation__link">
                        why rockstone
                    </div>
                </div>
            </div>
        </>
    )
}
