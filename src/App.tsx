import React, { useState } from 'react'
import { 
  Brain, 
  Clock, 
  Code2, 
  Download, 
  FileText, 
  GraduationCap,
  MenuSquare,
  Timer,
  Zap
} from 'lucide-react'

interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: "CRYPTO FUNDAMENTALS",
    duration: "1h:00m",
    description: "Blockchain basics, cryptocurrency types, and market mechanics."
  },
  {
    id: 2,
    title: "TRADING STRATEGIES",
    duration: "1h:00m",
    description: "Technical analysis, trading patterns, and risk management."
  },
  {
    id: 3,
    title: "DEFI DEEP DIVE",
    duration: "1h:00m",
    description: "Smart contracts, yield farming, and liquidity pools."
  },
  {
    id: 4,
    title: "SECURITY & WALLETS",
    duration: "1h:00m",
    description: "Private keys, cold storage, and best security practices."
  },
  {
    id: 5,
    title: "FUTURE OF CRYPTO",
    duration: "1h:00m",
    description: "Emerging trends, regulations, and industry predictions."
  }
];

function App() {
  const [activeModule, setActiveModule] = useState<number>(1);
  const [showAI, setShowAI] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-primary dark:text-white font-mono">
      {/* Header */}
      <header className="border-b-2 border-accent p-4 bg-white dark:bg-bg-dark shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-primary dark:text-white" />
            <h1 className="text-2xl uppercase tracking-widest bg-gradient-to-r from-gradient-dark to-gradient-light text-transparent bg-clip-text">
              CryptoLearn_
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-6 h-6 text-secondary dark:text-lighter" />
            <span className="text-primary dark:text-white">05:00:00</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Module Navigation */}
        <nav className="lg:col-span-3 border-2 border-accent rounded-lg bg-white dark:bg-bg-dark p-4 shadow-lg">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <MenuSquare className="text-primary dark:text-white" />
            MODULES
          </h2>
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  activeModule === module.id 
                    ? 'bg-primary text-white' 
                    : 'border border-lighter hover:bg-lighter hover:text-primary dark:hover:bg-accent dark:hover:text-white'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{module.title}</span>
                  <span className="text-sm">{module.duration}</span>
                </div>
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <section className="lg:col-span-6 border-2 border-accent rounded-lg bg-white dark:bg-bg-dark p-4 shadow-lg">
          <h2 className="text-2xl mb-4 text-primary dark:text-white">
            {modules[activeModule - 1].title}
          </h2>
          <div className="space-y-6">
            <div className="border border-lighter rounded-lg p-4">
              <h3 className="text-primary dark:text-white mb-2">OVERVIEW</h3>
              <p className="text-secondary dark:text-lighter">{modules[activeModule - 1].description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="border border-lighter rounded-lg p-4 hover:bg-lighter hover:text-primary dark:hover:bg-accent dark:hover:text-white transition-colors flex items-center gap-2">
                <Code2 />
                CODE EXAMPLES
              </button>
              <button className="border border-lighter rounded-lg p-4 hover:bg-lighter hover:text-primary dark:hover:bg-accent dark:hover:text-white transition-colors flex items-center gap-2">
                <FileText />
                RESOURCES
              </button>
              <button className="border border-lighter rounded-lg p-4 hover:bg-lighter hover:text-primary dark:hover:bg-accent dark:hover:text-white transition-colors flex items-center gap-2">
                <Timer />
                CHECKPOINTS
              </button>
              <button className="border border-lighter rounded-lg p-4 hover:bg-lighter hover:text-primary dark:hover:bg-accent dark:hover:text-white transition-colors flex items-center gap-2">
                <Download />
                DOWNLOADS
              </button>
            </div>

            <div className="border border-lighter rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-primary dark:text-white">PROGRESS</h3>
                <span className="text-secondary dark:text-lighter">20% COMPLETE</span>
              </div>
              <div className="w-full h-2 bg-lighter dark:bg-accent rounded-full">
                <div className="w-1/5 h-full bg-primary dark:bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant */}
        <aside className="lg:col-span-3 border-2 border-accent rounded-lg bg-white dark:bg-bg-dark p-4 shadow-lg">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <Brain className="text-primary dark:text-white" />
            AI ASSISTANT
          </h2>
          <div className="space-y-4">
            <button 
              onClick={() => setShowAI(!showAI)}
              className="w-full border border-lighter rounded-lg p-4 hover:bg-lighter hover:text-primary dark:hover:bg-accent dark:hover:text-white transition-colors"
            >
              ASK GEMINI
            </button>
            {showAI && (
              <div className="border border-lighter rounded-lg p-4">
                <p className="text-sm mb-2 text-secondary dark:text-lighter">AI RESPONSE:</p>
                <p className="text-primary dark:text-white">How can I assist with your crypto learning journey?_</p>
              </div>
            )}
            <div className="border border-lighter rounded-lg p-4">
              <h3 className="text-primary dark:text-white mb-2">FLASHCARDS</h3>
              <p className="text-sm text-secondary dark:text-lighter">AI-generated practice cards based on your progress</p>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-accent p-4 mt-8 bg-white dark:bg-bg-dark shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-primary dark:text-white" />
            <span className="text-secondary dark:text-lighter">5-HOUR COMPLETION GUARANTEE</span>
          </div>
          <button className="bg-primary text-white dark:bg-white dark:text-primary px-6 py-3 rounded-lg hover:bg-secondary dark:hover:bg-lighter transition-colors">
            START LEARNING
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App