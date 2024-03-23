import React, {useState}  from 'react'
import logo from "./../../Images/hrissa.png";
import {Link} from 'react-scroll';
import {FaBars,FaTimes} from 'react-icons/fa';
const NavBar = () => {
    const [nav, setNav]=useState(false)
    const handleclick=()=>setNav(!nav)
    return (
        <div>
            <nav id="header" class="fixed w-full z-30 top-0 backdrop-blur-lg text-white">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-5">
                <div class="pl-4 flex ">
                    <a class="toggleColour items-center text-white inline-flex no-underline hover:no-underline font-bold text-3xl lg:text-4xl z-50" href="#">
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
                    <div onClick={handleclick} className='md:hidden z-10 hover:cursor-pointer' style={{width:'50px'}}>
        {!nav ? <FaBars size={30}/>:<FaTimes size={30}/>}
      </div>
      <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-red-400 to-red-500 flex flex-col justify-center items-center'}>
        <li className='py-5 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='py-5 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="aboutus" smooth={true} duration={500}>About Us</Link></li>
        <li className='py-5 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="services" smooth={true} duration={500}>Services</Link></li>
        <li className='py-5 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="team" smooth={true} duration={500}>Our Team</Link></li>
        <li className='py-5 text-4xl hover: cursor-pointer'><Link onClick={handleclick} to="contactus" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>

                </div>
            </div>
            <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        </div>
    )
}

export default NavBar