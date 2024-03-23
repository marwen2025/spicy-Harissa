import React from 'react'
import logo from "./../../Images/hrissa.png";
import {Link} from 'react-scroll';
const NavBar = () => {
    return (
        <div>
            <nav id="header" class="fixed w-full z-30 top-0 backdrop-blur-lg text-white">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-5">
                <div class="pl-4 flex items-center">
                    <a class="toggleColour text-white inline-flex no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        <img width="60x" class="z-50" src={logo}></img>
                        SpicyHarissa
                    </a>
                </div>

                <div class=" flex items-center w-auto   mt-0 bg-transparent text-black  p-0 z-20" id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center hidden xs:visible">
                        <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"><Link to="home" smooth={true} duration={500}>Home</Link></a>
                        <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"><Link to="aboutus" smooth={true} duration={500}>About Us</Link></a>
                        <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"><Link to="services" smooth={true} duration={500}>Services</Link></a>
                        <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"><Link to="team" smooth={true} duration={500}>Our Team</Link></a>
                        
                        <button
                            id="navAction"
                            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                           <Link to="contactus" smooth={true} duration={500}>Contact Us</Link> 
                        </button>
                    </ul>

                </div>
            </div>
            <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        </div>
    )
}

export default NavBar