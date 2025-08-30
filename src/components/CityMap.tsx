import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Layers, ZoomIn, ZoomOut } from 'lucide-react';

const CityMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulated map initialization
    // In production, this would use Mapbox/Leaflet
  }, []);

  const locations = [
    { id: 1, type: 'traffic', status: 'warning', lat: 40.7128, lng: -74.0060, label: 'Traffic Congestion - 5th Ave' },
    { id: 2, type: 'incident', status: 'critical', lat: 40.7580, lng: -73.9855, label: 'Emergency Response Active' },
    { id: 3, type: 'utility', status: 'normal', lat: 40.7489, lng: -73.9680, label: 'Power Grid Stable' },
  ];

  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden bg-card/50">
      {/* Map Container */}
      <div ref={mapRef} className="absolute inset-0 bg-gradient-to-br from-card via-card/95 to-primary/5">
        {/* Simulated map grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)/20) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)/20) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}>
          {/* Map Points */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute animate-pulse"
              style={{ 
                left: `${(location.lng + 74.5) * 200}px`, 
                top: `${(41 - location.lat) * 200}px` 
              }}
            >
              <div className={`relative group cursor-pointer`}>
                <div className={`
                  w-4 h-4 rounded-full
                  ${location.status === 'critical' ? 'bg-destructive' : ''}
                  ${location.status === 'warning' ? 'bg-warning' : ''}
                  ${location.status === 'normal' ? 'bg-success' : ''}
                `} />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">
                  <Card className="p-2 whitespace-nowrap text-xs">
                    {location.label}
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button size="icon" variant="secondary" className="glass-card">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="glass-card">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="glass-card">
          <Layers className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="secondary" className="glass-card">
          <Navigation className="h-4 w-4" />
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 glass-card p-3 rounded-lg">
        <h4 className="text-xs font-semibold mb-2">Map Legend</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive rounded-full" />
            <span className="text-xs">Critical Incident</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full" />
            <span className="text-xs">Warning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full" />
            <span className="text-xs">Normal</span>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-lg flex items-center gap-3">
        <MapPin className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">New York City</span>
        <span className="text-xs text-muted-foreground">| Real-time View</span>
      </div>
    </div>
  );
};

export default CityMap;