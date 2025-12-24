// import { useState } from 'react'
import './Hero.css'
import { Components, videos } from '../../../Constants';

const Hero = (params) => {

    const TrackerLinkStyles = () => {
        return (
            'z-10 absolute bottom-20 right-20 py-1.5 pr-1.5 pl-2  bg-white text-pink-500 font-bold backdrop-blur-[10px] rounded-md hover:text-white hover:bg-transparent transition-all hover:border-[1px] hover:border-white capitalize'
        )
    }

    // let heroDisplays = [videos.hero_1, videos.hero_2, videos.hero_3, videos.hero_4];

    // let heroDisplays = [
    //     videos.heroClip1Main,
    //     videos.heroClip2ferile
    // ];

    // let [index, setIndex] = useState(0);

    // if (index === 3) {
    //     setIndex(-1);
    // }

    // if (index === 1) {
    //     setIndex(-1);
    // }

    // let changeDisplay = () => {
    //     if (index === 1) {
    //         setIndex(0)
    //     } else if (index === 0) {
    //         setIndex(1)
    //     }
    // };

    return (
        <section className="hero-section relative w-full h-screen">
            <div className="hero-video relative w-full h-full">
                <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    className='hero-v w-full h-full object-cover'
                >
                    {/* <source src={heroDisplays[index]} type='video/mp4' /> */}
                    <source src={videos.heroClip1Main} type='video/mp4' />
                </video>
                <div className="hero-info z-50 absolute top-20 left-12.5">
                    <h1 className='text-white opacity-30'>{params.heroStatA}</h1>
                    {/* <p>{params.infoP}</p> */}
                    {/* <button>Watch Trailer</button> */}
                </div>
                <Components.TrackerLink styles={TrackerLinkStyles()} />
                {/* <h1 className="gaming-text">Gaming</h1> */}
                {/* <div onClick={setIndex(!index)} className="next-btn">NEXT</div> */}
                {/* <div onClick={changeDisplay()} className="next-btn">NEXT</div> */}
                {/* <div onClick={console.log("Text")} className="next-btn">NEXT</div> */}
            </div>
        </section>
    )
}

export default Hero