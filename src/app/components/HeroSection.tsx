/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white h-96 py-20">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Custom software development company</h1>
            <p className="text-lg mb-6">
            Taking the trend even further . Zoondia provides innovative web development services in vast reaches of outer space with expert supervision in core technologies including social networking sites , eCommerce, B2B, healthcare etc
            </p>
        <button className="bg-white text-purple-500 hover:text-purple-700 
            font-bold py-2 px-4 rounded-md">
              Get Started
        </button>
        <br />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;