import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { IoMdClose } from "react-icons/io";



const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className="bg-black font-MonumentExtended text-white uppercase sticky top-0 z-50">
            <div className="max-w-7xl mx-auto py-7  flex justify-around items-center  xl:px-4 ">
                <a href="/"><img src="./assets/BoysClub_01-1 1.png" alt="BoysClub_01" srcSet className="md:w-1/2 cursor-pointer" /></a>
                <div className="flex items-center gap-10 md:hidden ml-auto text-[20px]"><a href="/contact" className="cursor-pointer">Contact</a></div>
                <div className="hidden md:flex ml-auto ">


                    <button onClick={toggleDrawer}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" fontSize={25} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
                        </svg>
                    </button>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                    // className='bla bla bla'

                    >
                         <IoMdClose className='w-[450px] text-[30px]' onClick={toggleDrawer}/>

                        <div className="px-5 py-10 text-lg space-y-10 mt-5 o">
                            <div className="text-white"><a href="/contact" className="cursor-pointer">Contact</a></div>
                        </div>
                        <nav role="navigation" id="EZDrawer__containerdrd4q" className="EZDrawer__container bla bla bla relative xl:hidden xxl:hidden lg:hidden" style={{ zIndex: 101, transitionDuration: '500ms', top: 0, left: 0, transform: 'translate3d(-100%, 0px, 0px)', width: 250, height: '100vh' }}>
                            <div className="absolute text-white right-4 top-5">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" fontSize={28} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                </svg>
                            </div>

                        </nav>
                        {/* <label htmlFor="EZDrawer__checkboxdrd4q" id="EZDrawer__overlaydrd4q" className="EZDrawer__overlay " style={{ backgroundColor: 'rgb(0, 0, 0)', opacity: '0.4', zIndex: 100 }} /> */}
                    </Drawer>


                </div>

                <div id="EZDrawerdrd4q" className="EZDrawer">





                </div>

            </div>

        </div>



    )
}

export default Header
