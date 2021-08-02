import React from 'react'

export default function Card({city}) {
    return (
        <div className={`card card__${city} fade-in`}>
            <div className="card__container">
                <div className="card__header">{city}</div>
                <div className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat debitis quam inventore quod pariatur asperiores deleniti saepe quas alias. Error voluptatum nihil rerum voluptatem magnam veritatis, ipsam sint debitis!</div>
            </div>
        </div>
    )
}
