import { useState, useEffect } from "react";

const BBSHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="terminal-window mb-6">
      <div className="terminal-header">
        <span className="ascii-title">BBS-TERM</span>
        <span className="ml-auto text-muted-foreground">
          {currentTime.toLocaleTimeString()}
        </span>
      </div>
      <div className="p-6 text-center">
        <div className="ascii-title text-2xl md:text-3xl mb-2">
          ╔══════════════════════════════════════════════╗
        </div>
        <div className="ascii-title text-3xl md:text-4xl mb-2 neon-text">
          ║ ░░░ BBS PUBLISHING COLLECTIVE ░░░ ║
        </div>
        <div className="ascii-title text-2xl md:text-3xl mb-4">
          ╚══════════════════════════════════════════════╝
        </div>
        <div className="text-sm text-muted-foreground mb-2">
          <span className="neon-green">█</span> CONNECTED TO TERMINAL NODE-7745 
          <span className="neon-green">█</span>
        </div>
        <div className="text-xs text-terminal-text-dim">
          Welcome to the underground publishing ecosystem • Est. 2024
        </div>
      </div>
    </header>
  );
};

export default BBSHeader;