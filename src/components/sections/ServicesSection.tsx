import content from "@/config/content.json";

interface Service {
  title: string;
  description: string;
  features: string[];
}

export function ServicesSection() {
  const { services } = content;

  return (
    <section className="py-24 gradient-purple">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text tracking-tight">{services.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.items.map((service: Service, index: number) => (
            <div
              key={index}
              className="card-modern p-8 rounded-xl animate-fadeUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-gray-300 group">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg mr-3 group-hover:bg-purple-500/30 transition-colors">
                      <svg
                        className="w-4 h-4 text-purple-400"
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
                    </span>
                    <span className="group-hover:text-gray-200 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
