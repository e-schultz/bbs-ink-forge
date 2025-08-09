import { useState } from "react";
import { Button } from "@/components/ui/button";

const LLMLiaison = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents = [
    { id: "editor", name: "严格的编辑", status: "online", specialty: "Style & Grammar" },
    { id: "research", name: "ResearchBot", status: "online", specialty: "Fact Checking" },
    { id: "creative", name: "Muse-7", status: "busy", specialty: "Creative Writing" },
    { id: "style", name: "StyleGuide", status: "online", specialty: "Format & Design" },
  ];

  const quickPrompts = [
    "Help me plan a new imprint",
    "Review my latest draft",
    "Suggest content for next issue",
    "Find sources on cyberpunk aesthetics"
  ];

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "online": return "●";
      case "busy": return "◐";
      case "offline": return "○";
      default: return "○";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "online": return "status-online";
      case "busy": return "status-busy";
      case "offline": return "status-offline";
      default: return "status-offline";
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="neon-text">LLM LIAISON</span>
        <span className="ml-auto text-xs">
          AI AGENTS: {agents.filter(a => a.status === "online").length}/4 ONLINE
        </span>
      </div>
      <div className="p-4 space-y-4">
        {/* Agent Status */}
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground mb-2">AVAILABLE AGENTS:</div>
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className={`flex items-center gap-2 text-xs cursor-pointer p-2 border border-transparent hover:border-terminal-border/30 transition-colors ${
                selectedAgent === agent.id ? 'bg-primary/10 border-primary/30' : ''
              }`}
              onClick={() => setSelectedAgent(agent.id)}
            >
              <span className={getStatusClass(agent.status)}>
                {getStatusIndicator(agent.status)}
              </span>
              <span className="text-terminal-text-bright">{agent.name}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-cyan-secondary truncate">{agent.specialty}</span>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="border-t border-terminal-border/30 pt-3">
          <div className="text-xs text-muted-foreground mb-2">QUICK PROMPTS:</div>
          <div className="space-y-1">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                className="w-full text-left text-xs p-2 text-terminal-text hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/30"
              >
                → {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t border-terminal-border/30 pt-3">
          <div className="flex gap-2">
            <input 
              type="text"
              placeholder="Ask the collective..."
              className="flex-1 bg-terminal-elevated border border-terminal-border/50 text-xs px-2 py-1 text-terminal-text placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <Button 
              size="sm" 
              variant="outline"
              className="text-xs px-2 border-primary/50 text-primary hover:bg-primary/10"
            >
              SEND
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMLiaison;