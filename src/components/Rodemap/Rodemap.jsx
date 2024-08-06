import React from 'react'

const Rodemap = () => {
  return (
   <div className="relative bg-black text-white">
  <img src="./assets/rightbg.png" alt="rightbg" srcSet className="absolute right-0 object-contain  h-full top-0  -z-10" /><img src="./assets/leftbg.png" alt="rightbg" srcSet className="absolute left-0 top-0 inset-0 h-full -z-10" />
  <div className="max-w-7xl mx-auto xl:px-4 ">
    <div className="font-MonumentExtendedUltrabold text-[80px] md:text-2xl text-center uppercase xl:pt-20">Roadmap</div>
    <div className="  flex md:flex-col items-start md:items-center md:justify-center pt-20">
      <div className="w-1/2 md:w-full ">
        <h1 className="uppercase font-MonumentExtended text-[64px] md:text-xl md:mb-10 mb-10 ">Phase One</h1>
        <ul className="list-disc list-inside font-NeueMachinabold text-[20px] md:text-base space-y-4 uppercase">
          <li>nft launch</li>
          <li>link all tokens with thick liquidity</li>
        </ul>
      </div>
      <div className="w-1/2 md:w-full h-full "><img src="./assets/Line 9.png" alt="Line" srcSet className="pt-5 md:mx-auto" /></div>
    </div>
    <div className="flex justify-between items-center md:flex-col  pt-20 md:pt-0">
      <div className=" md:w-full"><img src="./assets/ezgif-5.gif" alt="wolf" srcSet className="pt-5 md:mx-auto md:size-1/2" /></div>
      <div className=" md:w-full"><img src="./assets/Line10.png" alt="Line10" srcSet className="-pt-20 md:mx-auto md:pt-0 " /></div>
      <div className=" md:w-full ">
        <h1 className="uppercase font-MonumentExtended text-nowrap ms-3 text-[64px] md:text-xl  md:pt-4 mb-10">Phase two</h1>
        <ul className="list-disc list-inside font-NeueMachinabold text-[20px] md:text-base space-y-4 uppercase ">
          <li>web3 game (currently in development)</li>
          <li>MEME HARDER</li>
        </ul>
      </div>
    </div>
  </div>
</div>



  )
}

export default Rodemap
