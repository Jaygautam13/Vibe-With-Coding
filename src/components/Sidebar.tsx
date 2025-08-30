import { Home, Activity, Zap, Shield, Users, Settings, Map, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const Sidebar = ({ activeModule, setActiveModule }: SidebarProps) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'traffic', label: 'Traffic', icon: Activity },
    { id: 'utilities', label: 'Utilities', icon: Zap },
    { id: 'incidents', label: 'Incidents', icon: Shield },
    { id: 'citizens', label: 'Citizens', icon: Users },
    { id: 'map', label: 'Digital Twin', icon: Map },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold gradient-text">CityOptima</h2>
        <p className="text-xs text-muted-foreground mt-1">Command Center</p>
      </div>

      <nav className="px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
              activeModule === item.id
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                : "hover:bg-sidebar-accent text-sidebar-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
            {item.id === 'incidents' && (
              <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                3
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="glass-card p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">System Status</span>
          </div>
          <p className="text-sm font-medium">All Systems Operational</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;