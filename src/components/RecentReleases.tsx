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
  const releases: Release[] = [
    {
      id: "1",
      title: "Issue #001: The Architecture Awakening",
      imprint: "Terminal Dreams",
      status: "published",
      date: "2024-01-15",
      type: "issue"
    },
    {
      id: "2", 
      title: "Issue #002: Bot Civilizations",
      imprint: "Terminal Dreams",
      status: "wip",
      date: "2024-02-01",
      type: "issue"
    },
    {
      id: "3",
      title: "Debugging the Universe",
      imprint: "Code & Chaos",
      status: "published",
      date: "2024-01-08",
      type: "article"
    },
    {
      id: "4",
      title: "Field Notes from the Void",
      imprint: "Midnight Transmissions",
      status: "published",
      date: "2024-01-03",
      type: "collection"
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
      </div>
      <div className="p-4 space-y-3">
        {releases.map((release) => (
          <div 
            key={release.id}
            className="terminal-hover p-3 border border-terminal-border/30 cursor-pointer"
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
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>#{release.type.toUpperCase()}</span>
              <span>{new Date(release.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-terminal-border/30">
          <button className="w-full text-xs text-primary hover:text-cyan-secondary transition-colors cursor-blink">
            → VIEW ALL RELEASES
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentReleases;