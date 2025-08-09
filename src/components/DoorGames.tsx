const DoorGames = () => {
  const games = [
    { 
      id: "word-maze", 
      name: "Word Maze", 
      description: "Navigate text-based puzzles",
      players: 12,
      status: "active"
    },
    { 
      id: "story-forge", 
      name: "Story Forge", 
      description: "Collaborative story building",
      players: 7,
      status: "active"
    },
    { 
      id: "collab-edit", 
      name: "Collab Edit", 
      description: "Real-time writing sessions",
      players: 3,
      status: "waiting"
    },
    { 
      id: "ascii-paint", 
      name: "ASCII Paint", 
      description: "Terminal art creation",
      players: 1,
      status: "solo"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "neon-green";
      case "waiting": return "neon-amber";
      case "solo": return "text-cyan-secondary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="neon-text">DOOR GAMES</span>
        <span className="ml-auto text-xs">INTERACTIVE TOOLS</span>
      </div>
      <div className="p-4 space-y-3">
        {games.map((game) => (
          <div 
            key={game.id}
            className="terminal-hover p-3 border border-terminal-border/30 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="text-sm font-medium text-terminal-text-bright">
                  {game.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {game.description}
                </div>
              </div>
              <div className="text-right">
                <div className={`text-xs ${getStatusColor(game.status)}`}>
                  {game.status === "active" && `${game.players} ACTIVE`}
                  {game.status === "waiting" && `${game.players} WAITING`}
                  {game.status === "solo" && "SOLO MODE"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-primary">→</span>
              <span className="text-cyan-secondary">CONNECT TO GAME</span>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t border-terminal-border/30">
          <button className="w-full text-xs text-primary hover:text-cyan-secondary transition-colors">
            + CREATE NEW GAME
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoorGames;