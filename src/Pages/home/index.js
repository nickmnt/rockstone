import React from 'react';
import Intro from './intro';
import Locations from './locations';

export default function Home() {
    return (
        <div className="home">
            <Intro />
            <Locations />
        </div>
    )
}
