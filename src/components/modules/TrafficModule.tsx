import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Activity, AlertTriangle, TrendingUp, Clock } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TrafficModule = () => {
  // Simulated traffic data
  const trafficFlow = [
    { time: '00:00', flow: 45, predicted: 48 },
    { time: '04:00', flow: 32, predicted: 35 },
    { time: '08:00', flow: 78, predicted: 82 },
    { time: '12:00', flow: 65, predicted: 68 },
    { time: '16:00', flow: 85, predicted: 88 },
    { time: '20:00', flow: 62, predicted: 60 },
    { time: '23:59', flow: 48, predicted: 50 },
  ];

  const congestionZones = [
    { zone: 'Downtown', congestion: 82, status: 'high' },
    { zone: 'Financial District', congestion: 65, status: 'medium' },
    { zone: 'Midtown', congestion: 78, status: 'high' },
    { zone: 'Brooklyn Bridge', congestion: 45, status: 'low' },
    { zone: 'Queens', congestion: 38, status: 'low' },
  ];

  const signalOptimization = [
    { intersection: '5th Ave & 42nd St', optimization: 92, saved: '3.2 min' },
    { intersection: 'Broadway & Times Sq', optimization: 88, saved: '2.8 min' },
    { intersection: 'Park Ave & 34th St', optimization: 85, saved: '2.5 min' },
  ];

  return (
    <div className="space-y-6">
      {/* Traffic Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Traffic Flow Prediction</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm">Actual</span>
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-sm">Predicted</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={trafficFlow}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))' 
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="flow" 
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary)/20)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="predicted" 
                stroke="hsl(var(--accent))" 
                fill="hsl(var(--accent)/20)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Current Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Overall Flow</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <div>
                <p className="text-sm font-medium">3 Congestion Zones</p>
                <p className="text-xs text-muted-foreground">Above 75% capacity</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-success" />
              <div>
                <p className="text-sm font-medium">12% Improvement</p>
                <p className="text-xs text-muted-foreground">vs. last week</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Congestion Zones */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Congestion by Zone</h3>
        <div className="space-y-3">
          {congestionZones.map((zone, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className={`h-5 w-5 ${
                  zone.status === 'high' ? 'text-destructive' :
                  zone.status === 'medium' ? 'text-warning' :
                  'text-success'
                }`} />
                <span className="font-medium">{zone.zone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Progress value={zone.congestion} className="w-32 h-2" />
                <span className="text-sm font-medium w-12 text-right">{zone.congestion}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Signal Optimization */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">AI Signal Optimization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {signalOptimization.map((signal, index) => (
            <div key={index} className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Avg. Time Saved</span>
              </div>
              <p className="text-2xl font-bold text-success mb-1">{signal.saved}</p>
              <p className="text-sm font-medium">{signal.intersection}</p>
              <div className="mt-2">
                <Progress value={signal.optimization} className="h-1" />
                <span className="text-xs text-muted-foreground">{signal.optimization}% optimized</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrafficModule;