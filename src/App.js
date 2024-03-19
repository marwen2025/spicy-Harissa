import logo from './logo.svg';
import './App.css';
import Image1 from "./Images/landingPageImage1.png";
import image2 from "./Images/image1.jpg"
import image3 from "./Images/image2.jpg"
import arImage from "./Images/vrImage.png"
import gameImage from "./Images/2d3dImage.png"
import aiImage from "./Images/aiImage.png"

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-red-900 ">
        <nav id="header" class="fixed w-full z-30 top-0 backdrop-blur-lg text-white">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-5">
            <div class="pl-4 flex items-center">
              <a class="toggleColour text-white inline-flex no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                {/* lenna nzidou taswira (logo) */}
                SpicyHarissa
              </a>
            </div>

            <div class=" flex items-center w-auto   mt-0 bg-transparent text-black  p-0 z-20" id="nav-content">
              <ul class="list-reset lg:flex justify-end flex-1 items-center hidden xs:visible">
                <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Home</a>
                <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Services</a>
                <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Projects</a>
                <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Our Team</a>
                <a href="#" class="text-gray-300 hover:bg-red-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">About Us</a>
                <button
                  id="navAction"
                  class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Contact Us
                </button>
              </ul>

            </div>
          </div>
          <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>

        <div class="pt-24 ">
          <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

            <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p class="uppercase tracking-loose w-full"></p>
              <h1 class="my-4 text-5xl font-bold leading-tight">
                Welcome to Spicy Harissa Gaming!
              </h1>
              <p class="leading-normal text-2xl mb-8">
                Dare to innovate and stand out from the competition! Advanced solutions in Augmented Reality (AR), Virtual Reality (VR), and 2D/3D games to differentiate you and make your business successful.
              </p>

              <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Explore our services
              </button>

            </div>

            <div class="w-full md:w-3/5 py-6 text-center">
              <img class="w-full md:w-5/5 z-50" src={Image1} />
            </div>
          </div>
        </div>
        <div class="relative -mt-12 lg:-mt-18">

          <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path
                  d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <section class="bg-white py-8">
        <div class="container max-w-6xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            About Us
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6 mt-20 ">
              <h3 class="text-4xl text-gray-800 font-bold leading-none mb-3">
                Who are we?
              </h3>
              <p class="text-gray-600 mb-8 text-xl">
                Welcome to Spicy Harissa, a vibrant new player in the gaming industry. As a company, we are as unique and exciting as our namesake, the fiery Tunisian chili pepper paste known as Harissa.

                Our mission is to bring the heat of this beloved spice to the world of gaming. We are not just another gaming company; we are a community of passionate, creative, and technologically adept professionals dedicated to creating innovative gaming experiences.</p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <img src={image2}></img>
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <img src={image3}></img>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-4xl text-gray-800 font-bold leading-none mb-3 pt-8">
                  Our Vision
                </h3>
                <p class="text-gray-600 mb-8 text-xl">
                  At Spicy Harissa, we believe in the power of technology and creativity to transform the gaming landscape. Our team is composed of seasoned professionals who bring a wealth of experience from various sectors of the tech industry. Together, we strive to push the boundaries of what is possible in gaming. We are more than just a company - we are a movement. A movement to bring the spice of Harissa to the gaming world. Join us as we embark on this exciting journey.
                  <br />

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-gradient-to-b from-white to-red-400  py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Our Services
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-5/6 sm:w-1/2 p-6 pt-12">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                AR/VR Development
              </h3>
              <p class="text-gray-600 mb-8">
                Embrace the future with our state-of-the-art AR/VR services. We at Spicy Harissa are at the forefront of the AR/VR revolution, creating immersive experiences that captivate and engage users in unprecedented ways. Our solutions are not just about playing games; they are about creating a whole new reality where users can interact with your brand on a deeper, more personal level.

                Our team of experts leverages the latest technology to design and develop AR/VR experiences that are visually stunning, intuitively interactive, and uniquely tailored to meet the specific needs of your brand. From conceptualization to execution, we work closely with you to ensure that the final product aligns perfectly with your vision and objectives.



              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <img src={arImage}></img>
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <img src={gameImage}></img>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  2D and 3D Game Development
                </h3>
                <p class="text-gray-600 mb-8">
                  Our team of highly skilled game developers is adept at creating engaging and interactive games in both 2D and 3D. We specialize in developing games for a variety of platforms, harnessing the power of industry-leading game engines such as Unity and Unreal.

                  At Spicy Harissa, we understand that every game is unique and requires a tailored approach. Our developers work closely with our clients to understand their vision and translate it into a gaming experience that resonates with their target audience. From character design and storyline development to gameplay mechanics and sound design, we handle every aspect of game development with meticulous attention to detail.
                  Furthermore, we are committed to staying abreast of the latest trends and advancements in the gaming industry. This enables us to incorporate cutting-edge features and technologies into our games, ensuring that they are not only visually stunning but also technologically superior.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-5/6 sm:w-1/2 p-6 pt-12">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                AI Solutions Development
              </h3>
              <p class="text-gray-600 mb-8">
                Unleash the potential of artificial intelligence with our comprehensive AI solutions. At Spicy Harissa, we go beyond the conventional, integrating advanced AI features into our solutions to create user experiences that are not just immersive, but also intuitive and personalized.

                Our AI capabilities span across various domains, from voice recognition that enables seamless user interactions, to recommendation systems that provide personalized content and suggestions. But we don’t stop there. Our team is constantly exploring the frontiers of AI, incorporating elements like natural language processing, machine learning, predictive analytics, and more.

                We understand that in today’s digital age, a one-size-fits-all approach doesn’t cut it. That’s why our AI solutions are tailored to meet the unique needs and objectives of your business. Whether it’s enhancing user engagement, streamlining operations, or gaining valuable insights from data, our AI solutions are designed to drive growth and innovation.

              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <img src={aiImage}></img>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-gradient-to-b from-red-400 to-red-800  py-8 ">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Our Team
          </h1>
          <h3 class="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-600 pt-10">
            Check our awesome team members

          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            <div class="w-full bg-white bg-opacity-40 rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo">
                </img></div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Fayez weld Hanen</p>
                <p class="text-base text-gray-300 font-normal">Software Engineer</p>
              </div>
            </div>
            <div class="w-full bg-white bg-opacity-40 rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo">
                </img></div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Ahmed weld boujaafer</p>
                <p class="text-base text-gray-300 font-normal">Graphic Designer</p>
              </div>
            </div>
            <div class="w-full bg-white bg-opacity-40 rounded-lg p-12 flex flex-col justify-center items-center">            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo">
              </img></div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">fahmi twill</p>
                <p class="text-base text-gray-300 font-normal">Dev Ops</p>
              </div>
            </div>
            <div class="w-full bg-white bg-opacity-40 rounded-lg p-12 flex flex-col justify-center items-center">            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo">
              </img></div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-300 font-normal">Software Engineer</p>
              </div>
            </div>
            <div class="w-full bg-white bg-opacity-40 rounded-lg p-12 flex flex-col justify-center items-center">            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo">
              </img></div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-300 font-normal">Graphic Designer</p>
              </div>
            </div>
            <div class="w-full bg-white bg-opacity-40 rounded-lg p-12 flex flex-col justify-center items-center">            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo">
              </img></div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-300 font-normal">Dev Ops</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    <footer class="w-full text-gray-700 bg-gradient-to-b from-red-800 to-red-900 body-font border-t">
        <div
            class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                    <h2 className='text-xl'>
                    SpicyHarissa
                    </h2>
                </a>
                <p class="mt-2 text-sm text-gray-200">Design, Code and Play!</p>
                <div class="mt-4">
                    <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a class="text-gray-200 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-200 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Company</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Careers</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Blog</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Contact Support</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Help Resources</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Release Updates</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform
                    </h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Pricing</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">FAQ</a>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Send a Message</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">Request a Quote</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-200 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div class="bg-red-900">
            <div class="container px-5 py-4 mx-auto">
                <p class="text-sm text-black capitalize text-center">© 2024 All rights reserved </p>
            </div>
        </div>
    </footer>
    </>
  );
}

export default App;
