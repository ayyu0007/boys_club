import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";


const Technomices = () => {
    const [tab, setTab] = useState('')
    return (
        <div className='bg-black text-white'>
            <div class="relative rounded-[50px] mx-auto w-full z-10 max-w-7xl pt-10 pb-10 uppercase">
                <img src="./assets/rightcircle.png" alt="Ellipse" srcset="" class="  absolute right-0 top-20 object-contain object-right h-full w-full -z-10" />
                <img src="./assets/leftcircle.png" alt="Ellipse" srcset="" class="absolute left-0 top-0 object-left object-cover h-full w-full -z-10" />
                <div class="mt-2" >
                    <button
                        class="flex w-full  justify-between items-center  px-6 text-left text-sm  "
                        onClick={() => setTab('pepe')}
                        type="button"
                    >

                        <div className={`flex justify-between bg-[#4c4d48] w-full ${tab == "pepe" ? "rounded-t-[30px]" : "rounded-[30px]"} p-5 items-center`}>
                            <span class="text-2xl  uppercase"> PEPE </span>
                            <IoIosAdd fontSize={34} />

                        </div>
                    </button>
                    {
                        tab == 'pepe' && (

                            <div className='bg-[#4c4d48] rounded-b-[30px]  mx-6'>
                                <div class=" rounded-b-[30px] px-4 pb-2 pt-4 text-base text-white gradiant-bg">
                                    <div class=" flex gap-3 flex-wrap justify-center items-center">
                                        <div class="hover:underline text-primary  py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://dexscreener.com/pulsechain/0x11659a752ac07452b9f139b897c917338e2dfb16" target="_blank">DexScreener</a></div>
                                        <div class="hover:underline text-primary py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933" target="_blank">PluseX</a></div>
                                    </div>
                                    <h1 class="mt-4 md:break-words text-center bg-[#C2C2C2]/10 rounded-[30px] p-5 mb-5">
                                        CA:
                                        <h1 class="hover:underline text-center  !rounded-[50px] bg-[#8A9454]/20 w-full mx-auto p-3 mt-3">0x6982508145454Ce325dDbE47a25d4ec3d2311933</h1>
                                    </h1>
                                </div>
                            </div>

                        )
                    }
                </div>
                <div class="mt-2" >
                    <button
                        class="flex w-full  justify-between items-center  px-6 text-left text-sm  "
                        onClick={() => setTab('brett')}
                        type="button"
                    >

                        <div className={`flex justify-between bg-[#4c4d48] w-full ${tab == "brett" ? "rounded-t-[30px]" : "rounded-[30px]"} p-5 items-center`}>
                            <span class="text-2xl  uppercase"> BRETT </span>
                            <IoIosAdd fontSize={34} />

                        </div>
                    </button>
                    {
                        tab == 'brett' && (

                            <div className='bg-[#4c4d48] rounded-b-[30px]  mx-6'>
                                <div class=" rounded-b-[30px] px-4 pb-2 pt-4 text-base text-white gradiant-bg">
                                    <div class=" flex gap-3 flex-wrap justify-center items-center">
                                        <div class="hover:underline text-primary  py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://dexscreener.com/pulsechain/0x11659a752ac07452b9f139b897c917338e2dfb16" target="_blank">DexScreener</a></div>
                                        <div class="hover:underline text-primary py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933" target="_blank">PluseX</a></div>
                                    </div>
                                    <h1 class="mt-4 md:break-words text-center bg-[#C2C2C2]/10 rounded-[30px] p-5 mb-5">
                                        CA:
                                        <h1 class="hover:underline text-center  !rounded-[50px] bg-[#8A9454]/20 w-full mx-auto p-3 mt-3">0x6982508145454Ce325dDbE47a25d4ec3d2311933</h1>
                                    </h1>
                                </div>
                            </div>

                        )
                    }
                </div>
                <div class="mt-2" >
                    <button
                        class="flex w-full  justify-between items-center  px-6 text-left text-sm  "
                        onClick={() => setTab('andy')}
                        type="button"
                    >

                        <div className={`flex justify-between bg-[#4c4d48] w-full ${tab == "andy" ? "rounded-t-[30px]" : "rounded-[30px]"} p-5 items-center`}>
                            <span class="text-2xl  uppercase"> ANDY </span>
                            <IoIosAdd fontSize={34} />

                        </div>
                    </button>
                    {
                        tab == 'andy' && (

                            <div className='bg-[#4c4d48] rounded-b-[30px]  mx-6'>
                                <div class=" rounded-b-[30px] px-4 pb-2 pt-4 text-base text-white gradiant-bg">
                                    <div class=" flex gap-3 flex-wrap justify-center items-center">
                                        <div class="hover:underline text-primary  py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://dexscreener.com/pulsechain/0x11659a752ac07452b9f139b897c917338e2dfb16" target="_blank">DexScreener</a></div>
                                        <div class="hover:underline text-primary py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933" target="_blank">PluseX</a></div>
                                    </div>
                                    <h1 class="mt-4 md:break-words text-center bg-[#C2C2C2]/10 rounded-[30px] p-5 mb-5">
                                        CA:
                                        <h1 class="hover:underline text-center  !rounded-[50px] bg-[#8A9454]/20 w-full mx-auto p-3 mt-3">0x6982508145454Ce325dDbE47a25d4ec3d2311933</h1>
                                    </h1>
                                </div>
                            </div>

                        )
                    }
                </div>
                <div class="mt-2" >
                    <button
                        class="flex w-full  justify-between items-center  px-6 text-left text-sm  "
                        onClick={() => setTab('landwolf')}
                        type="button"
                    >

                        <div className={`flex justify-between bg-[#4c4d48] w-full ${tab == "landwolf" ? "rounded-t-[30px]" : "rounded-[30px]"} p-5 items-center`}>
                            <span class="text-2xl  uppercase"> LANDWOLF </span>
                            <IoIosAdd fontSize={34} />

                        </div>
                    </button>
                    {
                        tab == 'landwolf' && (

                            <div className='bg-[#4c4d48] rounded-b-[30px]  mx-6'>
                                <div class=" rounded-b-[30px] px-4 pb-2 pt-4 text-base text-white gradiant-bg">
                                    <div class=" flex gap-3 flex-wrap justify-center items-center">
                                        <div class="hover:underline text-primary  py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://dexscreener.com/pulsechain/0x11659a752ac07452b9f139b897c917338e2dfb16" target="_blank">DexScreener</a></div>
                                        <div class="hover:underline text-primary py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933" target="_blank">PluseX</a></div>
                                    </div>
                                    <h1 class="mt-4 md:break-words text-center bg-[#C2C2C2]/10 rounded-[30px] p-5 mb-5">
                                        CA:
                                        <h1 class="hover:underline text-center  !rounded-[50px] bg-[#8A9454]/20 w-full mx-auto p-3 mt-3">0x6982508145454Ce325dDbE47a25d4ec3d2311933</h1>
                                    </h1>
                                </div>
                            </div>

                        )
                    }
                </div>
                <div class="mt-2" >
                    <button
                        class="flex w-full  justify-between items-center  px-6 text-left text-sm  "
                        onClick={() => setTab('bird')}
                        type="button"
                    >

                        <div className={`flex justify-between bg-[#4c4d48] w-full ${tab == "bird" ? "rounded-t-[30px]" : "rounded-[30px]"} p-5 items-center`}>
                            <span class="text-2xl  uppercase"> BIRD DOG </span>
                            <IoIosAdd fontSize={34} />

                        </div>
                    </button>
                    {
                        tab == 'bird' && (

                            <div className='bg-[#4c4d48] rounded-b-[30px]  mx-6'>
                                <div class=" rounded-b-[30px] px-4 pb-2 pt-4 text-base text-white gradiant-bg">
                                    <div class=" flex gap-3 flex-wrap justify-center items-center">
                                        <div class="hover:underline text-primary  py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://dexscreener.com/pulsechain/0x11659a752ac07452b9f139b897c917338e2dfb16" target="_blank">DexScreener</a></div>
                                        <div class="hover:underline text-primary py-3 px-10 gradient-btn2 cursor-pointer"><a href="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933" target="_blank">PluseX</a></div>
                                    </div>
                                    <h1 class="mt-4 md:break-words text-center bg-[#C2C2C2]/10 rounded-[30px] p-5 mb-5">
                                        CA:
                                        <h1 class="hover:underline text-center  !rounded-[50px] bg-[#8A9454]/20 w-full mx-auto p-3 mt-3">0x6982508145454Ce325dDbE47a25d4ec3d2311933</h1>
                                    </h1>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Technomices
