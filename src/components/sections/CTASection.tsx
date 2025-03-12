'use client';

import content from "@/config/content.json";

export function CTASection() {
  const { cta } = content;

  return (
    <section id="cta-section" className="py-24 bg-mesh relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text tracking-tight">{cta.title}</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">{cta.subtitle}</p>
          
          <div className="mb-16">
            <a 
              href="https://wa.me/+5587999481453?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20reunião%20com%20o%20time%20comercial%20da%20Hayek"
              target="_blank"
              rel="noopener noreferrer"
              className="button-modern text-lg flex items-center justify-center mx-auto gap-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {cta.buttonText}
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {cta.features.map((feature: string, index: number) => (
              <div 
                key={index} 
                className="card-modern p-4 rounded-xl animate-fadeUp flex items-center justify-center group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm relative group-hover:bg-purple-500/40 transition-colors mr-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg"></div>
                    <svg
                      className="w-4 h-4 text-purple-400 relative"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
