import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen hero bg-center bg-cover md:pt-20 relative">
      <img src="./assets/heroboy.png" alt="heroboy poster" srcSet className="mx-auto relative size-1/2 z-10" />
      <div className="flex md:flex-col -mt-10 xl:mt-0  items-center mx-auto justify-center gap-5 font-NeueMachinaregular uppercase">
        <div className="text-black relative z-10 py-3 px-10 md:px-5 md:py-2 bg-[#78c135] cursor-pointer rounded-[20px]">BUY</div>
        <div className="text-black relative z-10 py-3 px-10 md:px-5 md:py-2 bg-[#78c135] cursor-pointer rounded-[20px]">CHART</div>
      </div>
    </div>

  )
}

export default Hero
