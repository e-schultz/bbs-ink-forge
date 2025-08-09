import { Badge } from "@/components/ui/badge";

const GroupChat = () => {
  const channels = [
    { 
      id: "general", 
      name: "#general-chaos", 
      unread: 12, 
      lastMessage: "Anyone working on glitch aesthetics?",
      time: "14:23",
      active: true
    },
    { 
      id: "publishing", 
      name: "#publishing-help", 
      unread: 3, 
      lastMessage: "Need feedback on my Terminal Dreams pitch",
      time: "13:45",
      active: false
    },
    { 
      id: "bots", 
      name: "#bots-only", 
      unread: 0, 
      lastMessage: "严格的编辑: Grammar check complete",
      time: "12:30",
      active: false
    },
    { 
      id: "code", 
      name: "#code-chaos", 
      unread: 7, 
      lastMessage: "Check out this terminal rendering lib",
      time: "11:15",
      active: false
    }
  ];

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="neon-text">GROUP CHAT</span>
        <span className="ml-auto text-xs">4 CHANNELS ACTIVE</span>
      </div>
      <div className="p-4 space-y-2">
        {channels.map((channel) => (
          <div 
            key={channel.id}
            className={`terminal-hover p-3 border cursor-pointer ${
              channel.active 
                ? 'border-primary/50 bg-primary/5' 
                : 'border-terminal-border/30'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${
                  channel.active ? 'text-primary' : 'text-terminal-text-bright'
                }`}>
                  {channel.name}
                </span>
                {channel.unread > 0 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-amber-accent/20 text-amber-accent border-amber-accent/50"
                  >
                    {channel.unread}
                  </Badge>
                )}
              </div>
              <span className="text-xs text-muted-foreground">
                {channel.time}
              </span>
            </div>
            <div className="text-xs text-terminal-text-dim truncate">
              {channel.lastMessage}
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t border-terminal-border/30 flex gap-2">
          <button className="flex-1 text-xs text-primary hover:text-cyan-secondary transition-colors">
            JOIN CHANNEL
          </button>
          <button className="flex-1 text-xs text-primary hover:text-cyan-secondary transition-colors">
            CREATE DM
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;