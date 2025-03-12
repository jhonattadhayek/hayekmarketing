import content from "@/config/content.json";

export function Footer() {
  const { footer } = content;

  return (
    <footer className="py-16 bg-purple-900/90 text-white bg-mesh relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fadeUp">
          <h2 className="text-3xl font-bold mb-3 gradient-text">{footer.company}</h2>
          <p className="text-gray-300 mb-10 text-lg">{footer.tagline}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href={`mailto:${footer.contact.email}`}
              className="card-modern px-6 py-3 rounded-xl flex items-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm relative group-hover:bg-purple-500/40 transition-colors mr-3">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg"></div>
                <svg
                  className="w-5 h-5 text-purple-400 relative"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {footer.contact.email}
              </span>
            </a>
            <a
              href={`tel:${footer.contact.phone}`}
              className="card-modern px-6 py-3 rounded-xl flex items-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm relative group-hover:bg-purple-500/40 transition-colors mr-3">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg"></div>
                <svg
                  className="w-5 h-5 text-purple-400 relative"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {footer.contact.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
