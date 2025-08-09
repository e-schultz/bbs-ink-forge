const BrowseSection = () => {
  const categories = [
    { 
      name: "Imprints", 
      count: 8, 
      description: "Publishing house collections" 
    },
    { 
      name: "Content Type", 
      count: 15, 
      description: "Essays, fiction, code, manifestos" 
    },
    { 
      name: "Recent Activity", 
      count: 47, 
      description: "Latest posts and updates" 
    },
    { 
      name: "Collaborative", 
      count: 12, 
      description: "Multi-author projects" 
    }
  ];

  const featuredImprints = [
    { name: "Terminal Dreams", theme: "cyberpunk-zine", status: "active" },
    { name: "Code & Chaos", theme: "anarchist-tech", status: "active" },
    { name: "Midnight Transmissions", theme: "void-aesthetic", status: "private" }
  ];

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="neon-text">BROWSE BY</span>
        <span className="ml-auto text-xs">CONTENT DISCOVERY</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Browse Categories */}
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="terminal-hover p-3 border border-terminal-border/30 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm font-medium text-terminal-text-bright">
                  ○ {category.name}
                </span>
                <span className="text-xs text-cyan-secondary">
                  {category.count}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                {category.description}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Imprints */}
        <div className="border-t border-terminal-border/30 pt-3">
          <div className="text-xs text-muted-foreground mb-2">FEATURED IMPRINTS:</div>
          <div className="space-y-1">
            {featuredImprints.map((imprint, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-xs p-2 hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <span className={`${
                  imprint.status === "active" ? "neon-green" : "text-muted-foreground"
                }`}>
                  █
                </span>
                <span className="text-terminal-text-bright">{imprint.name}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-cyan-secondary">{imprint.theme}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;