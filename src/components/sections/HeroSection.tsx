'use client';

import Image from 'next/image';
import content from "@/config/content.json";

interface Stat {
  number: string;
  label: string;
}

export function HeroSection() {
  const { hero } = content;

  return (
    <section className="bg-mesh text-white py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fadeUp">
          <div className="mb-12 flex justify-center">
            <img
              src="/images/LOGOSITE.png"
              alt="Hayek Marketing"
              className="w-[40px] sm:w-[30px] md:w-[36px] lg:w-[42px] h-auto object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 gradient-text tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            {hero.subtitle}
          </p>
          <button 
            className="button-modern"
            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {hero.cta}
          </button>

          <div className="mt-20 grid grid-cols-2 gap-12 max-w-2xl mx-auto">
            {hero.stats.map((stat: Stat, index: number) => (
              <div key={index} className="text-center card-modern p-6 rounded-xl animate-fadeUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl md:text-6xl font-bold gradient-text mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
