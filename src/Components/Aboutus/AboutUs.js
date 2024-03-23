import React from 'react'
import image1 from './../../Images/image1.jpg'
import image2 from './../../Images/image2.jpg'
const AboutUs = () => {
  return (
    <div name="aboutus">
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
              <img src={image1}></img>
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <img src={image2}></img>
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
    </div>
  )
}

export default AboutUs