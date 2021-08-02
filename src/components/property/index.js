import React from 'react'

export default function Property() {
    return (
        <div className="property">
                <img src="./images/property.jpg" alt="" className="property__img" />
            <div className="property__container">
                <div className="property__title">
                    Luxury Villa
                </div>
                <div className="property__location">
                    <svg className="property__icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"/></svg>
                    <div className="property__locationText">Vancouver, 21 Jump Street</div>
                </div>
                <div className="property__caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor ex necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, impedit, tempora odit asperiores nam sed porro nobis eveniet neque incidunt quas quo, perspiciatis dicta. Harum dolor ipsa ea eum perspiciatis.
                </div>
                <button className="property__button">enquire</button>
            </div>
        </div>
    )
}
