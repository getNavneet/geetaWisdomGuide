import React from 'react';

import img1 from '../../assets/geetaimg1.jpg';
import img2 from '../../assets/geetaimg2.jpg';
import img6 from '../../assets/geetaimg6.jpg';

function ImageDisplay() {
  return (
    <div className="m-3">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        <div className="bg-red-100">
          <img
            src={img1}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-orange-400">
          <img
            src={img2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-500 col-span-2 md:col-span-1">
          <img
            src={img6}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageDisplay;
