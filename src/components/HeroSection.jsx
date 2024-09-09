import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <>
    

        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Virutal Rbuild tools <span className='bg-gradient-to-t from-orange-500 to-red-800 text-transparent bg-clip-text'>for Developers</span></h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl bg-red-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa maxime odit quaerat. Laboriosam quas culpa reiciendis doloribus non nostrum. Itaque earum illum nobis eos delectus atque error perferendis rem?</p>
            <div className="flex justify-center my-20">
                <a href="#" className='bg-gradient-to-t from-orange-500 to-orange-800 rounded px-4 py-3 shadow'> Download </a>
            </div>

            <div className="flex mt-10 justify-center">
                <video  autoPlay loop muted className='rounded-lg w-1/2 border border-orange-600 shadow-orange-400 mx-2 my-4'>
                <source src={video1} />
                Browser not supported
                </video>
                <video  autoPlay loop muted className='rounded-lg w-1/2 border border-orange-600 shadow-orange-400 mx-2 my-4'>
                <source src={video2} />
                Browser not supported
                </video>
            </div>
        </div>


    
    </>
  )
}

export default HeroSection