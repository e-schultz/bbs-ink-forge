import BBSHeader from "@/components/BBSHeader";
import RecentReleases from "@/components/RecentReleases";
import LLMLiaison from "@/components/LLMLiaison";
import DoorGames from "@/components/DoorGames";
import GroupChat from "@/components/GroupChat";
import BrowseSection from "@/components/BrowseSection";
import MyWorkspace from "@/components/MyWorkspace";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <BBSHeader />
        
        {/* Main BBS Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <RecentReleases />
            <GroupChat />
          </div>
          
          {/* Middle Column */}
          <div className="space-y-6">
            <LLMLiaison />
            <BrowseSection />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <DoorGames />
            <MyWorkspace />
          </div>
        </div>
        
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
