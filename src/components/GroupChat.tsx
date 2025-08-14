import { Badge } from "@/components/ui/badge";

const GroupChat = () => {
  const conversationThreads = [
    {
      id: "thread1",
      channel: "#general-chaos",
      messages: [
        {
          id: 1,
          username: "void_walker",
          handle: "@terminal-node-7745",
          timestamp: "14:23",
          content: "Anyone working on glitch aesthetics for their releases?",
          themes: ["glitch_aesthetics", "terminal_dreams"],
          isActive: true
        },
        {
          id: 2,
          username: "neo_scribe", 
          handle: "@code-archaeologist",
          timestamp: "14:25",
          content: "just pushed to Terminal Dreams #2 - check the memory zones section",
          themes: ["memory_zones", "bot_civilizations"],
          replyTo: 1,
          reference: "Issue #002: Bot Civilizations → memory_ecosystems"
        },
        {
          id: 3,
          username: "data_ghost",
          handle: "@void-wanderer", 
          timestamp: "14:27",
          content: "that BBS interface spec is *chef's kiss* → consciousness archaeology in action",
          themes: ["bbs_interface", "archaeology"],
          replyTo: 1
        }
      ]
    }
  ];

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="neon-text">GROUP CHAT</span>
        <span className="ml-auto text-xs">ARCHAEOLOGY MODE</span>
      </div>
      <div className="p-4 space-y-4">
        {conversationThreads.map((thread) => (
          <div key={thread.id} className="conversation-thread">
            <div className="text-xs text-cyan-secondary mb-3 flex items-center gap-2">
              <span>{thread.channel}</span>
              <span className="text-terminal-text-dim">•</span>
              <span className="text-terminal-text-dim">thread genesis</span>
            </div>
            
            <div className="space-y-3">
              {thread.messages.map((message, index) => (
                <div 
                  key={message.id}
                  className={`group hover:bg-terminal-elevated/50 p-3 -m-3 rounded transition-colors ${
                    message.replyTo ? 'ml-6 border-l-2 border-terminal-border/30 pl-4' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-terminal-text-dim font-mono text-xs mt-1 min-w-[3rem]">
                      {message.timestamp}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-medium text-sm ${
                          message.isActive ? 'text-primary' : 'text-accent'
                        }`}>
                          {message.username}
                        </span>
                        <span className="text-terminal-text-dim text-xs">
                          {message.handle}
                        </span>
                        {message.replyTo && (
                          <span className="text-terminal-text-dim text-xs">↳ replying</span>
                        )}
                      </div>
                      
                      <div className="text-terminal-text text-sm mb-2 leading-relaxed">
                        {message.content.split(' ').map((word, i) => {
                          if (message.themes.some(theme => word.includes(theme.split('_')[0]))) {
                            return <span key={i} className="text-accent">{word} </span>;
                          }
                          return word + ' ';
                        })}
                      </div>
                      
                      {message.reference && (
                        <div className="quote-reference bg-primary/10 border-l-3 border-primary/50 pl-3 py-1 text-sm text-terminal-text-dim italic mb-2">
                          Referenced: {message.reference}
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1">
                        {message.themes.map((theme) => (
                          <button
                            key={theme}
                            className="text-xs px-2 py-0.5 bg-accent/20 text-accent border border-accent/50 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
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
        ))}
        
        <div className="border-t border-terminal-border/30 pt-3">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Add to thread archaeology..." 
              className="flex-1 bg-terminal-elevated border border-terminal-border/50 rounded px-3 py-2 text-sm text-terminal-text placeholder:text-terminal-text-dim focus:outline-none focus:border-primary/50"
            />
            <button className="px-3 py-2 bg-primary/20 text-primary border border-primary/50 rounded text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              TRACE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;