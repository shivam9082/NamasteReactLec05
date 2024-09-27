import React from 'react';

const Footer = () => {
  

  

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Food Villa</h5>
            <p className="text-gray-300">Food Villa offers an exquisite culinary journey through its carefully crafted dishes, blending traditional flavors with modern twists to create unforgettable dining experiences. From our bustling kitchen to your table, every bite at Food Villa is designed to transport you to a world of gastronomic delight,
               where taste buds come alive and memories are made.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="space-y-4">

              <ul className=" ml-48 flex space-x-20">
              <li className='mx-4 text-white'>Instagram</li>
            <li className='mx-4 text-white'>LinkedIn</li>
            <li className='mx-4 text-white'>Facebook</li>
            <li className='mx-4 text-white'>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center">&copy; 2024 Food Villa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;