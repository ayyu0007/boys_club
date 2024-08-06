import React from "react";

const Faq = () => {
  return (


    <div className="bg-black text-white ">
      <div className="flex xl:flex-col xl:gap-5 justify-around items-center font-MonumentExtendedUltrabold py-20">
        <div className=" text-[80px] md:text-2xl uppercase">Pulsechain</div>
        <div><img src="./assets/Pulsechain.png" alt="Pulsechain" srcSet className="size-24" /></div>
        <div className="flex items-center gap-5 font-NeueMachinaregular uppercase"><a href="https://x.com/boysclubpls" target="_blank" className="text-black bg-[#cff600] rounded-[30px] py-3 px-10 gradient-btn cursor-pointer">X.com</a><a href="https://t.me/boysclubpulse" target="_blank" className="text-black bg-[#cff600] rounded-[30px] py-3 px-10 gradient-btn cursor-pointer">Telegram</a></div>
      </div>
    </div>


  );
};

export default Faq;
