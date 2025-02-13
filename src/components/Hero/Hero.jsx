import React from "react";
import img1 from '../../assets/hero1.jpg'
function Hero() {
    return (
        <div style={{ backgroundColor: 'rgb(255, 244, 231)' }} className="flex flex-wrap flex-col md:justify-around items-center w-full  min-h-64 md:flex-row ">
         <div className="flex items-center justify-center md:w-[40%] p-2 m-2 mt-6 font-serif text-gray-900">
 
  <p className="text-3xl font-bold leading-[2.5rem] text-left">
   AI-powered guidance from
    <br />
    <span className="bg-orange-500 decoration-solid">
      the Bhagavad Gita
    </span>
    <br />
    timeless wisdom for modern life. 🚀
  </p>
</div>

          <div className="flex  w-[90vw] md:w-[50%] m-2 ">
            <div className="w-full ">
            <img src={img1} className="w-[100%] rounded-xl border-solid	 border-gray-500"/>
            </div>
            
            </div>
        </div>
  );
}
export default Hero;
