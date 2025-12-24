import React from 'react'
import './FavFilms.css'
import { data } from '../../../Constants'

const FavFilms = () => {

    document.addEventListener("click", ((e) => {

        if (e.target.classList[0] === "slide") {
            const slides = document.querySelectorAll(".slide")

            slides.forEach((slide) => {
                removeCurrentActives();
                e.target.classList.add("active");
            });

            function removeCurrentActives() {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                });
            }
        }

    }))


    return (
        <div className="fav-films">
            <h2 className='text-pink-700 font-bold text-3xl text-center m-2.5'>Top 5 Favourite Films</h2>
            <div className="flex w-[99%]">
                <div className="slide bg-image image-1 active">
                    <h3>Solo Leveling</h3>
                </div>
                <div className="slide bg-image image-2">
                    <h3>Arifureta</h3>
                </div>
                <div className="slide bg-image image-3 ">
                    <h3>Dan Da Dan</h3>
                </div>
                <div className="slide bg-image image-4">
                    <h3>Demon Slayer</h3>
                </div>
                <div className="slide bg-image image-5">
                    <h3>Scissor Seven</h3>
                </div>
            </div>
        </div>
    )
}

export default FavFilms

/*

<div className="slide bg-image image-1 active">
                    <h3>Solo Leveling</h3>
                </div>
                <div className="slide bg-image image-2">
                    <h3>Arifureta</h3>
                </div>
                <div className="slide bg-image image-3">
                    <h3>Dan Da Dan</h3>
                </div>
                <div className="slide bg-image image-4">
                    <h3>Demon Slayer</h3>
                </div>
                <div className="slide bg-image image-5">
                    <h3>Scissor Seven</h3>
                </div>

*/