import React from 'react'

const Club = () => {
  return (
    <div className="clubbg bg-black flex min-h-screen bg-center bg-cover text-white">
      <div className="max-w-7xl mx-auto flex lg:flex-col items-center xl:px-4">
        <div className="w-[65%] lg:w-full">
          <h1 className="font-MonumentExtendedUltrabold lg:text-center uppercase text-[80px] md:text-2xl xl:mb-10">welcome to BOYS CLUB</h1>
          <img src="./assets/club.png" alt="ezgif" srcSet className="size-[50%] bg-contain bg-center lg:mx-auto lg:mt-0 mx-auto xl:my-10 z-10 relative flex justify-center" />
        </div>
        <div className="relative w-[35%] lg:w-full self-center ">
          <div className="p-10 gradiant-club-box rounded-[30px] font-NeueMachinaregular self-center ">
            <p className="text-center leading-10 ">Ah, Boy's Club, where to begin with this cultural phenomenon? Created by the illustrious Matt Furie, Boy's Club is the comic series that gave us Pepe the Frog, a character who went from comic relief to internet meme to a symbol of... well, let's just say his journey was more complicated than a soap opera plotline. Born from Furie's pen in the wild, lawless lands of the mid-2000s, this series is a deep dive into the lives of four roommates: Andy, Brett, Landwolf, and the infamous Pepe.</p>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Club
