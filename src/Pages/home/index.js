import React, { useEffect } from 'react';
import Intro from './intro';
import Locations from './locations';
import Category from './categories';
import Footer from '../../components/footer';

export default function Home() {

    useEffect(()=> {
        const faders = document.querySelectorAll(".fade-in");

        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -50px 0px"
          };

        const appearOnScroll = new IntersectionObserver(function(
            entries,
            appearOnScroll
          ) {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                return;
              } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
              }
            });
          },
          appearOptions);
          
          faders.forEach(fader => {
            appearOnScroll.observe(fader);
          });
          
    },[]);



    return (
        <div className="home">
            <Intro />
            <Locations />
            <Category />
            <Footer />
        </div>
    )
}
