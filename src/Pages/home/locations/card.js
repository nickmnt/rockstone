import React from 'react'

export default function Card() {
    return (
        <div className="card">
            <div className="card__container">
                <img src="./images/montreal.jfif" alt="Montreal" className="card__img" />
                <div className="card__info">
                    <div className="card__header">Montreal</div>
                    <div className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repellat debitis quam inventore quod pariatur asperiores deleniti saepe quas alias. Error voluptatum nihil rerum voluptatem magnam veritatis, ipsam sint debitis!</div>
                </div>
            </div>
        </div>
    )
}
