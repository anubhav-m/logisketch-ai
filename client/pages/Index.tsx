import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useState } from "react";
import {
  Github,
  Sun,
  Moon,
  Sparkles,
  Code,
  Image as ImageIcon,
  ChevronDown,
} from "lucide-react";

export default function Index() {
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [selectedEngine, setSelectedEngine] = useState("default");
  const [prompt, setPrompt] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <AuroraBackground />
      {/* Header Navigation */}
      <header className="border-b border-white/10 backdrop-blur-md bg-black/80 sticky top-0 z-50 relative">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Logisketch
              </div>
            </div>

            {/* Centered Navigation */}
            <nav className="flex items-center gap-8 justify-start">
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                example
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
              <button className="p-2 hover:bg-accent rounded-full transition-colors group">
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </button>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                docs
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-sm font-medium">
                Sign up
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-sm font-medium"
              >
                Sign in
              </Button>
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-accent rounded-full transition-colors group"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 group-hover:text-primary transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 group-hover:text-primary transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            AI-Powered Generation
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Create anything with AI
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
            Generate code, images, and more with our advanced AI models. Start
            creating something amazing today.
          </p>

          {/* Supported Engines Carousel */}
          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-3">Supported engines:</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[
                "plantuml",
                "mermaid",
                "graphviz",
                "structurizr",
                "blockdiag",
                "seqdiag",
                "packetdiag",
                "c4plantuml",
                "d2",
                "erd",
                "nomnoml",
                "tikz",
                "vegalite",
                "symbolator",
                "wavedrom",
              ].map((engine) => (
                <span
                  key={engine}
                  className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                >
                  {engine}
                </span>
              ))}
            </div>
          </div>

          {/* Supported Models */}
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-3">Supported models:</p>
            <div className="flex justify-center gap-4">
              {[
                { name: "ChatGPT", icon: "🤖" },
                { name: "DeepSeek", icon: "🧠" },
                { name: "Claude", icon: "🔮" },
                { name: "Gemini", icon: "✨" },
                { name: "Llama", icon: "🦙" },
              ].map((model) => (
                <div
                  key={model.name}
                  className="flex flex-col items-center gap-1 p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-xl">{model.icon}</span>
                  <span className="text-xs text-gray-300">{model.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-6 shadow-2xl">
          {/* Model and Engine Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-300">Model</label>
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full h-9 px-3 pr-8 text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-white/30 cursor-pointer text-white"
                >
                  <option value="gpt-4" className="bg-gray-800">
                    GPT-4
                  </option>
                  <option value="gpt-3.5-turbo" className="bg-gray-800">
                    GPT-3.5 Turbo
                  </option>
                  <option value="claude-3" className="bg-gray-800">
                    Claude 3
                  </option>
                  <option value="gemini-pro" className="bg-gray-800">
                    Gemini Pro
                  </option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 opacity-50 pointer-events-none text-white" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-300">
                Engine
              </label>
              <div className="relative">
                <select
                  value={selectedEngine}
                  onChange={(e) => setSelectedEngine(e.target.value)}
                  className="w-full h-9 px-3 pr-8 text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-white/30 cursor-pointer text-white"
                >
                  <option value="default" className="bg-gray-800">
                    Default
                  </option>
                  <option value="creative" className="bg-gray-800">
                    Creative
                  </option>
                  <option value="precise" className="bg-gray-800">
                    Precise
                  </option>
                  <option value="balanced" className="bg-gray-800">
                    Balanced
                  </option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 opacity-50 pointer-events-none text-white" />
              </div>
            </div>
          </div>

          {/* Prompt Input */}
          <div className="space-y-1.5 mb-4">
            <label className="text-xs font-medium text-gray-300">Prompt</label>
            <Textarea
              placeholder="Describe what you want to create..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] resize-none text-sm leading-relaxed bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white/30 rounded-lg"
            />
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <Button className="px-8 py-2.5 text-sm font-medium bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate
            </Button>
          </div>
        </div>

        {/* Output Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Code Panel */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10 bg-white/5">
              <Code className="w-4 h-4 text-white" />
              <h3 className="text-sm font-medium text-white">Generated Code</h3>
            </div>
            <div className="p-3 h-64 overflow-auto">
              <div className="text-gray-400 text-xs">
                <div className="font-mono leading-relaxed space-y-1">
                  <div className="text-blue-400">
                    // Your generated code will appear here
                  </div>
                  <div className="text-gray-500">function example() {`{`}</div>
                  <div className="text-gray-500 ml-4">
                    return 'Hello, World!';
                  </div>
                  <div className="text-gray-500">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Panel */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10 bg-white/5">
              <ImageIcon className="w-4 h-4 text-white" />
              <h3 className="text-sm font-medium text-white">
                Generated Image
              </h3>
            </div>
            <div className="p-3 h-64 overflow-auto">
              <div className="h-full flex items-center justify-center border-2 border-dashed border-white/20 rounded-lg">
                <div className="text-center text-gray-400">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-xs">Generated image will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 bg-black/80 backdrop-blur-md relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-xs text-gray-500">
            2025 © Logisketch - All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
