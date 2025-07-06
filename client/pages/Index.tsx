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
    <AuroraBackground className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-background/90 via-background/95 to-background/90">
        {/* Header Navigation */}
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm font-medium"
                >
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
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Generation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Create anything with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate code, images, and more with our advanced AI models. Start
              creating something amazing today.
            </p>
          </div>

          {/* Controls Section */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-8 shadow-lg">
            {/* Model and Engine Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Model
                </label>
                <div className="relative">
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full h-10 px-3 pr-10 text-sm bg-background border border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                  >
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    <option value="claude-3">Claude 3</option>
                    <option value="gemini-pro">Gemini Pro</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Engine
                </label>
                <div className="relative">
                  <select
                    value={selectedEngine}
                    onChange={(e) => setSelectedEngine(e.target.value)}
                    className="w-full h-10 px-3 pr-10 text-sm bg-background border border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                  >
                    <option value="default">Default</option>
                    <option value="creative">Creative</option>
                    <option value="precise">Precise</option>
                    <option value="balanced">Balanced</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Prompt Input */}
            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-foreground">
                Prompt
              </label>
              <Textarea
                placeholder="Describe what you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] resize-none text-base leading-relaxed"
              />
            </div>

            {/* Generate Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="px-12 py-3 text-base font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate
              </Button>
            </div>
          </div>

          {/* Output Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Code Panel */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-3 p-4 border-b border-border/50 bg-muted/30">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Generated Code
                </h3>
              </div>
              <div className="p-4 h-80 overflow-auto">
                <div className="text-muted-foreground text-sm">
                  <div className="font-mono text-xs leading-relaxed space-y-2">
                    <div className="text-blue-400">
                      // Your generated code will appear here
                    </div>
                    <div className="text-gray-500">
                      function example() {`{`}
                    </div>
                    <div className="text-gray-500 ml-4">
                      return 'Hello, World!';
                    </div>
                    <div className="text-gray-500">{`}`}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Panel */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-3 p-4 border-b border-border/50 bg-muted/30">
                <ImageIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Generated Image
                </h3>
              </div>
              <div className="p-4 h-80 overflow-auto">
                <div className="h-full flex items-center justify-center border-2 border-dashed border-border/50 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Generated image will appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-border/50 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center text-sm text-muted-foreground">
              2025 © Logisketch - All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
}
