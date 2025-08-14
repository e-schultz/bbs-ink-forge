import { useState } from "react";
import { Button } from "@/components/ui/button";

const LLMLiaison = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents = [
    { 
      id: "editor", 
      name: "严格的编辑", 
      status: "online", 
      specialty: "Style & Grammar",
      tags: ["terminal_dreams", "editing", "structure_analysis"],
      lastAction: "Structure analysis complete for Terminal Dreams #2"
    },
    { 
      id: "research", 
      name: "ResearchBot", 
      status: "online", 
      specialty: "Source Discovery",
      tags: ["archaeology", "research", "fact_checking"],
      lastAction: "Found 12 relevant sources for glitch aesthetics piece"
    },
    { 
      id: "archive", 
      name: "Archive-Mind", 
      status: "busy", 
      specialty: "Memory Management",
      tags: ["memory_systems", "threading", "conversation_archaeology"],
      lastAction: "Processing conversation threads for semantic mapping"
    },
    { 
      id: "creative", 
      name: "Muse-7", 
      status: "online", 
      specialty: "Creative Writing",
      tags: ["narrative_design", "bot_civilizations", "cosmic_horror"],
      lastAction: "Generated pull quotes for void transmissions"
    },
  ];

  const recentArchaeology = [
    {
      timestamp: "13:42",
      agent: "严格的编辑",
      target: "terminal_dreams#2",
      action: "Structure analysis complete. Consider adding more pull quotes for visual breaks.",
      reference: "Bot Civilizations → readability_patterns",
      themes: ["structure_analysis", "pull_quotes"]
    },
    {
      timestamp: "13:38", 
      agent: "ResearchBot",
      target: "glitch_aesthetics",
      action: "Found 12 relevant sources for glitch aesthetics piece. Archive links preserved.",
      themes: ["source_discovery", "link_preservation"]
    }
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
          AGENT ARCHAEOLOGY: {agents.filter(a => a.status === "online").length}/4 ACTIVE
        </span>
      </div>
      <div className="p-4 space-y-4">
        {/* Agent Archaeological Profiles */}
        <div className="space-y-3">
          <div className="text-xs text-cyan-secondary mb-3">› AVAILABLE AGENTS</div>
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className={`group hover:bg-terminal-elevated/50 p-3 border cursor-pointer transition-colors ${
                selectedAgent === agent.id ? 'bg-primary/10 border-primary/30' : 'border-terminal-border/30'
              }`}
              onClick={() => setSelectedAgent(agent.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className={getStatusClass(agent.status)}>
                    {getStatusIndicator(agent.status)}
                  </span>
                  <span className="text-terminal-text-bright font-medium text-sm">
                    {agent.name}
                  </span>
                </div>
                <span className={getStatusClass(agent.status)}>
                  {agent.status.toUpperCase()}
                </span>
              </div>
              
              <div className="text-xs text-terminal-text-dim mb-2">
                Specialization: {agent.specialty}
              </div>
              
              <div className="text-xs text-terminal-text mb-2 leading-relaxed">
                {agent.lastAction}
              </div>
              
              <div className="flex flex-wrap gap-1">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-1.5 py-0.5 bg-accent/20 text-accent border border-accent/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Agent Archaeology */}
        <div className="border-t border-terminal-border/30 pt-4">
          <div className="text-xs text-cyan-secondary mb-3">› RECENT AGENT ARCHAEOLOGY</div>
          <div className="space-y-3">
            {recentArchaeology.map((entry, index) => (
              <div key={index} className="conversation-thread">
                <div className="flex items-start gap-3 p-2 hover:bg-terminal-elevated/50 rounded transition-colors">
                  <div className="text-xs text-terminal-text-dim mt-1 min-w-[3rem]">
                    {entry.timestamp}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-accent font-medium text-sm">
                        {entry.agent}
                      </span>
                      <span className="text-terminal-text-dim text-xs">
                        → {entry.target}
                      </span>
                    </div>
                    
                    <div className="text-terminal-text text-sm mb-2 leading-relaxed">
                      {entry.action}
                    </div>
                    
                    {entry.reference && (
                      <div className="quote-reference bg-primary/10 border-l-3 border-primary/50 pl-2 py-1 text-xs text-terminal-text-dim italic mb-2">
                        Referenced: {entry.reference}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-1">
                      {entry.themes.map((theme) => (
                        <button
                          key={theme}
                          className="text-xs px-1.5 py-0.5 bg-primary/20 text-primary border border-primary/50 rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {theme}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t border-terminal-border/30 pt-3">
          <div className="flex gap-2">
            <input 
              type="text"
              placeholder="Query agents about publishing, research, or memory..."
              className="flex-1 bg-terminal-elevated border border-terminal-border/50 text-sm px-3 py-2 text-terminal-text placeholder:text-terminal-text-dim focus:outline-none focus:border-primary/50"
            />
            <Button 
              size="sm" 
              variant="outline"
              className="text-sm px-3 border-primary/50 text-primary hover:bg-primary/10"
            >
              QUERY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMLiaison;