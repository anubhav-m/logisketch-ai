import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Github, Sun, Moon, ChevronDown } from "lucide-react";

export default function Index() {
  const [selectedModel, setSelectedModel] = useState<"models" | "engines">(
    "models",
  );
  const [prompt, setPrompt] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const interactionItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
    isExpanded: false,
  }));

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Navigation */}
      <header className="border-b border-border px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="text-lg font-medium">Logisketch logo</div>
            <nav className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm hover:text-primary transition-colors"
              >
                example
              </a>
              <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
                <Github className="w-3 h-3" />
              </button>
              <a
                href="#"
                className="text-sm hover:text-primary transition-colors"
              >
                docs
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm">
              signup
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              signin
            </Button>
            <button
              onClick={toggleTheme}
              className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-3 h-3" />
              ) : (
                <Moon className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-border bg-sidebar-background p-4">
          <div className="space-y-2">
            <h2 className="text-sm font-medium mb-4 text-sidebar-foreground">
              Interactions
            </h2>
            <div className="space-y-1">
              {interactionItems.map((item) => (
                <div
                  key={item.id}
                  className="h-10 bg-sidebar-accent rounded-md border border-sidebar-border flex items-center px-3 hover:bg-sidebar-accent/80 transition-colors cursor-pointer"
                >
                  <div className="w-full h-2 bg-sidebar-accent-foreground/20 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Content Area */}
          <div className="flex-1 p-6 space-y-6">
            {/* Model/Engine Toggle */}
            <div className="flex gap-2">
              <Button
                variant={selectedModel === "models" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedModel("models")}
                className="rounded-full"
              >
                models
              </Button>
              <Button
                variant={selectedModel === "engines" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedModel("engines")}
                className="rounded-full"
              >
                engines
              </Button>
            </div>

            {/* Prompt Textarea */}
            <div className="space-y-2">
              <Textarea
                placeholder="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] resize-none rounded-xl border-2 border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:border-ring"
              />
            </div>

            {/* Generate Button */}
            <div className="flex justify-center">
              <Button
                className="rounded-full px-8 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Generate
              </Button>
            </div>

            {/* Output Panels */}
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-[300px]">
              {/* Code Panel */}
              <div className="border-2 border-border rounded-xl bg-card">
                <div className="border-b border-border p-3">
                  <h3 className="text-sm font-medium text-card-foreground">
                    Code
                  </h3>
                </div>
                <div className="p-4 h-full min-h-[250px] bg-muted/30">
                  {/* Code content placeholder */}
                </div>
              </div>

              {/* Image Panel */}
              <div className="border-2 border-border rounded-xl bg-card">
                <div className="border-b border-border p-3">
                  <h3 className="text-sm font-medium text-card-foreground">
                    Image
                  </h3>
                </div>
                <div className="p-4 h-full min-h-[250px] bg-muted/30">
                  {/* Image content placeholder */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-4 px-6">
        <div className="text-center text-sm text-muted-foreground">
          2025 © Logisketch - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
