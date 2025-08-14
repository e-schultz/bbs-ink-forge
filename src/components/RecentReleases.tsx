import { Badge } from "@/components/ui/badge";

interface Release {
  id: string;
  title: string;
  imprint: string;
  status: "published" | "wip" | "planning";
  date: string;
  type: "issue" | "article" | "collection";
}

const RecentReleases = () => {
  const releases: (Release & { 
    archaeology?: {
      conversationTrace: string[];
      threadGenesis?: string;
      contributors: string[];
    };
    themes: string[];
  })[] = [
    {
      id: "1",
      title: "Issue #001: The Architecture Awakening",
      imprint: "Terminal Dreams",
      status: "published",
      date: "2024-01-15",
      type: "issue",
      themes: ["bbs_architecture", "terminal_ui", "consciousness_tech"],
      archaeology: {
        conversationTrace: [
          "12:34 void_walker: working on glitch aesthetics",
          "12:35 neo_scribe: Terminal Dreams #2 memory zones",
          "12:40 Editor-7745: structure analysis complete"
        ],
        threadGenesis: "BBS nostalgia → modern implementation → consciousness archaeology",
        contributors: ["void_collective", "neo_scribe", "data_ghost"]
      }
    },
    {
      id: "2", 
      title: "Issue #002: Bot Civilizations",
      imprint: "Terminal Dreams",
      status: "wip",
      date: "2024-02-01",
      type: "issue",
      themes: ["bot_civilizations", "memory_ecosystems", "ai_integration"],
      archaeology: {
        conversationTrace: [
          "14:23 void_walker: glitch aesthetics for releases?",
          "14:25 neo_scribe: memory zones section complete",
          "14:27 data_ghost: consciousness archaeology in action"
        ],
        threadGenesis: "AI agents → publishing ecosystem → recursive storytelling",
        contributors: ["void_collective", "Archive-Mind", "ResearchBot"]
      }
    },
    {
      id: "3",
      title: "Debugging the Universe",
      imprint: "Code & Chaos",
      status: "published",
      date: "2024-01-08",
      type: "article",
      themes: ["chaos_engineering", "debugging_universe", "anarchist_git"],
      archaeology: {
        conversationTrace: [],
        threadGenesis: "anarchist's guide to git → chaos engineering → universal debugging principles",
        contributors: ["data_anarchist"]
      }
    },
    {
      id: "4",
      title: "Field Notes from the Void",
      imprint: "Midnight Transmissions",
      status: "published",
      date: "2024-01-03",
      type: "collection",
      themes: ["void_transmissions", "field_notes", "private_imprint"],
      archaeology: {
        conversationTrace: [
          "23:15 signal_ghost: void aesthetics emerging",
          "23:47 Archive-Mind: memory preservation protocols"
        ],
        threadGenesis: "void aesthetics → memory preservation → field documentation",
        contributors: ["signal_ghost"]
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "neon-green";
      case "wip": return "neon-amber";
      case "planning": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "published": return "LIVE";
      case "wip": return "WIP";
      case "planning": return "PLAN";
      default: return "???";
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="neon-text">RECENT RELEASES</span>
        <span className="ml-auto text-xs">ARCHAEOLOGY MODE</span>
      </div>
      <div className="p-4 space-y-4">
        {releases.map((release) => (
          <div 
            key={release.id}
            className="release-thread border border-terminal-border/30 rounded p-3 hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-terminal-text-bright truncate">
                  {release.title}
                </div>
                <div className="text-xs text-cyan-secondary">
                  {release.imprint}
                </div>
              </div>
              <Badge 
                variant="outline" 
                className={`text-xs ${getStatusColor(release.status)} border-current`}
              >
                {getStatusText(release.status)}
              </Badge>
            </div>

            {release.archaeology && (
              <div className="archaeology-trace mb-3">
                <div className="text-xs text-cyan-secondary mb-2">› Conversation Archaeology:</div>
                
                {release.archaeology.threadGenesis && (
                  <div className="quote-reference bg-accent/10 border-l-3 border-accent/50 pl-2 py-1 text-xs text-terminal-text-dim italic mb-2">
                    {release.archaeology.threadGenesis}
                  </div>
                )}
                
                {release.archaeology.conversationTrace && (
                  <div className="text-xs space-y-1 pl-2 border-l-2 border-terminal-border/30 mb-2">
                    {release.archaeology.conversationTrace.map((trace, index) => {
                      const [timestamp, ...rest] = trace.split(' ');
                      return (
                        <div key={index} className="text-terminal-text-dim">
                          <span className="text-accent">{timestamp}</span> {rest.join(' ')}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            
            <div className="flex flex-wrap gap-1 mb-3">
              {release.themes.map((theme) => (
                <span
                  key={theme}
                  className="text-xs px-2 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded"
                >
                  {theme}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>#{release.type.toUpperCase()}</span>
                {release.archaeology?.contributors && (
                  <>
                    <span>•</span>
                    <span>{release.archaeology.contributors.length} contributor{release.archaeology.contributors.length !== 1 ? 's' : ''}</span>
                  </>
                )}
              </div>
              <span>{new Date(release.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-terminal-border/30">
          <button className="w-full text-xs text-primary hover:text-cyan-secondary transition-colors cursor-blink">
            → VIEW ALL ARCHAEOLOGICAL RELEASES
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentReleases;