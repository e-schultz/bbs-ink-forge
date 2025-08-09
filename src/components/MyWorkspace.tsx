const MyWorkspace = () => {
  const workItems = [
    {
      type: "draft",
      title: "The Glitch Sublime",
      imprint: "Terminal Dreams",
      progress: 75,
      lastEdit: "2h ago"
    },
    {
      type: "draft", 
      title: "Anarchist's Guide to Git",
      imprint: "Code & Chaos",
      progress: 30,
      lastEdit: "1d ago"
    },
    {
      type: "draft",
      title: "Field Notes: Void Aesthetics",
      imprint: "Midnight Transmissions",
      progress: 90,
      lastEdit: "3h ago"
    },
    {
      type: "review",
      title: "Bot Civilizations Review",
      imprint: "Terminal Dreams",
      progress: 100,
      lastEdit: "5h ago"
    },
    {
      type: "review",
      title: "Universe Debugging Feedback",
      imprint: "Code & Chaos", 
      progress: 60,
      lastEdit: "1d ago"
    },
    {
      type: "collab",
      title: "Collective Manifesto v2.0",
      imprint: "Multi-Imprint",
      progress: 45,
      lastEdit: "30m ago"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "draft": return "neon-amber";
      case "review": return "neon-green";
      case "collab": return "text-cyan-secondary";
      default: return "text-muted-foreground";
    }
  };

  const getTypeSymbol = (type: string) => {
    switch (type) {
      case "draft": return "✎";
      case "review": return "⚡";
      case "collab": return "◊";
      default: return "•";
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="neon-text">MY WORKSPACE</span>
        <span className="ml-auto text-xs">6 ACTIVE ITEMS</span>
      </div>
      <div className="p-4 space-y-3">
        {workItems.map((item, index) => (
          <div 
            key={index}
            className="terminal-hover p-3 border border-terminal-border/30 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={getTypeColor(item.type)}>
                    {getTypeSymbol(item.type)}
                  </span>
                  <span className="text-sm font-medium text-terminal-text-bright truncate">
                    {item.title}
                  </span>
                </div>
                <div className="text-xs text-cyan-secondary">
                  {item.imprint}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">
                  {item.lastEdit}
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center gap-2 text-xs">
              <div className="flex-1 h-1 bg-terminal-elevated border border-terminal-border/30">
                <div 
                  className="h-full bg-primary"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <span className="text-primary w-8 text-right">
                {item.progress}%
              </span>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t border-terminal-border/30 flex gap-2">
          <button className="flex-1 text-xs text-primary hover:text-cyan-secondary transition-colors">
            NEW DRAFT
          </button>
          <button className="flex-1 text-xs text-primary hover:text-cyan-secondary transition-colors">
            JOIN COLLAB
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWorkspace;