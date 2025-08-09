import { useEffect } from "react";
import BBSHeader from "@/components/BBSHeader";
import RecentReleases from "@/components/RecentReleases";
import LLMLiaison from "@/components/LLMLiaison";
import DoorGames from "@/components/DoorGames";
import GroupChat from "@/components/GroupChat";
import BrowseSection from "@/components/BrowseSection";
import MyWorkspace from "@/components/MyWorkspace";

const Index = () => {
  useEffect(() => {
    document.title = "BBS Publishing Collective – Home";
    const desc = "Terminal-inspired publishing hub: recent releases, agents, games, chat.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 pb-[env(safe-area-inset-bottom)] max-w-7xl">
        <BBSHeader />

        <h1 className="sr-only">BBS Publishing Collective Home</h1>

        <nav className="lg:hidden sticky top-0 z-10 -mt-2 mb-4 bg-background/80 backdrop-blur border-b border-terminal-border/30">
          <div className="flex gap-2 overflow-x-auto py-2">
            <a href="#releases" className="text-xs px-3 py-1 rounded-md border border-terminal-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 whitespace-nowrap">Releases</a>
            <a href="#chat" className="text-xs px-3 py-1 rounded-md border border-terminal-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 whitespace-nowrap">Chat</a>
            <a href="#liaison" className="text-xs px-3 py-1 rounded-md border border-terminal-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 whitespace-nowrap">Agents</a>
            <a href="#browse" className="text-xs px-3 py-1 rounded-md border border-terminal-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 whitespace-nowrap">Browse</a>
            <a href="#games" className="text-xs px-3 py-1 rounded-md border border-terminal-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 whitespace-nowrap">Games</a>
            <a href="#workspace" className="text-xs px-3 py-1 rounded-md border border-terminal-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 whitespace-nowrap">Workspace</a>
          </div>
        </nav>
        
        <main>
          {/* Main BBS Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              <section id="releases" aria-label="Recent releases">
                <RecentReleases />
              </section>
              <section id="chat" aria-label="Group chat">
                <GroupChat />
              </section>
            </div>
            
            {/* Middle Column */}
            <div className="space-y-4 sm:space-y-6">
              <section id="liaison" aria-label="LLM liaison">
                <LLMLiaison />
              </section>
              <section id="browse" aria-label="Browse content">
                <BrowseSection />
              </section>
            </div>
            
            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              <section id="games" aria-label="Door games">
                <DoorGames />
              </section>
              <section id="workspace" aria-label="My workspace">
                <MyWorkspace />
              </section>
            </div>
          </div>
        </main>
        
        {/* Terminal Footer */}
        <footer className="mt-8 text-center">
          <div className="text-xs text-muted-foreground">
            <span className="neon-green">●</span> SYSTEM STATUS: OPERATIONAL 
            <span className="mx-2">|</span>
            <span className="neon-green">●</span> NETWORK LATENCY: 12ms
            <span className="mx-2">|</span> 
            <span className="neon-green">●</span> USERS ONLINE: 247
          </div>
          <div className="mt-2 text-xs text-terminal-text-dim">
            BBS Publishing Collective v2.4.1 • Running on Terminal Node-7745
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
