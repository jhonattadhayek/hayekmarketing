import content from "@/config/content.json";

interface Feature {
  title: string;
  description: string;
}

export function FeaturesSection() {
  const { features } = content;

  return (
    <section className="py-24 gradient-purple">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text tracking-tight animate-fadeUp">{features.title}</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.items.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="card-modern p-6 rounded-xl animate-fadeUp group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm relative group-hover:bg-purple-500/40 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl"></div>
                    <svg
                      className="w-6 h-6 text-purple-400 relative"
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
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-3 gradient-text">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
