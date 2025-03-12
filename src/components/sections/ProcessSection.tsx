import content from "@/config/content.json";

interface Step {
  number: string;
  title: string;
  description: string;
}

export function ProcessSection() {
  const { process } = content;

  return (
    <section className="py-24 bg-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text tracking-tight">{process.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{process.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
          {process.steps.map((step: Step, index: number) => (
            <div 
              key={index} 
              className="text-center animate-fadeUp relative"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="card-modern p-8 rounded-xl h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-600/30 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 border border-purple-400/30 backdrop-blur-sm relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl"></div>
                  <span className="relative gradient-text">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 gradient-text">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
              
              {index < process.steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <svg
                    className="w-8 h-8 text-purple-400/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
