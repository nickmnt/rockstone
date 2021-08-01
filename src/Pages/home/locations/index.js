import React from 'react'
import Card from './card'

export default function Locations() {
    return (
        <section className="locations">
            <div className="locations__top">
                <img src="./images/Canada_flag_map.svg" alt="" className="locations__img" />
                <div className="locations__header">
                    <span className="locations__bold">
                    No.1</span> Quality Of Life
                </div>
            </div>
            <div className="locations__cities">
                <Card city="Vancouver"/>
                <Card city="Montréal"/>
                <Card city="Toronto"/>
            </div>
        </section>
    )
}
