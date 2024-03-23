import React from 'react'
import arImage from "./../../Images/vrImage.png"
import gameImage from "./../../Images/2d3dImage.png"
import aiImage from "./../../Images/aiImage.png"
const Services = () => {
  return (
    <div name="services">
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
    </div>
  )
}

export default Services