import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/background-image.jpg")' }}>
      <h1 className="text-5xl font-bold text-white mb-4 text-center">Turn Your Ideas Into Reality</h1>
      <p className="text-lg text-gray-200 mb-8 text-center">Join a community of innovators and creators who bring ideas to life.</p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition">Get Started</button>
        <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">Find a Mentor</button>
      </div>
    </section>
  );
};

export default HeroSection;
