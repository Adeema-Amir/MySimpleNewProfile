/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardGroup = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card 1 */}
      <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
        <img className="w-[307px] h-60 hover:h-64 hover:w-[320px] duration-300" src="https://images.unsplash.com/photo-1688890239467-c43da335fe7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Card 1" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-emerald-500 duration-300 hover:cursor-pointer">UI/UX Design</div>
          <p className="text-gray-700 text-base hover:text-blue-500 duration-300 hover:cursor-pointer">Card 1 description goes here.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
        <img className="w-[307px] h-60 hover:h-64 hover:w-[320px] duration-300" src="https://images.unsplash.com/photo-1688890239467-c43da335fe7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Card 2" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-emerald-500 duration-300 hover:cursor-pointer">Card 2 Title</div>
          <p className="text-gray-700 text-base hover:text-blue-500 duration-300 hover:cursor-pointer">Card 2 description goes here.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-xs mx-2 my-4 bg-white rounded-lg overflow-hidden shadow-lg">
        <img className="w-[307px] h-60 hover:h-64 hover:w-[320px] duration-300" src="https://images.unsplash.com/photo-1689039993843-7b1aaf1f2e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Card 3" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-emerald-500 duration-300 hover:cursor-pointer">Card 3 Title</div>
          <p className="text-gray-700 text-base hover:text-blue-500 duration-300 hover:cursor-pointer">Card 3 description goes here.</p>
        </div>
      </div>     
    </div>
  );
};

export default CardGroup;