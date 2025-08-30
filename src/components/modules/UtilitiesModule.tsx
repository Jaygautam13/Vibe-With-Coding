import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap, Droplet, Wind, Thermometer, TrendingDown, AlertCircle } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const UtilitiesModule = () => {
  // Simulated utility data
  const energyConsumption = [
    { hour: '00:00', consumption: 620, solar: 0, wind: 120 },
    { hour: '06:00', consumption: 750, solar: 50, wind: 150 },
    { hour: '12:00', consumption: 920, solar: 380, wind: 180 },
    { hour: '18:00', consumption: 980, solar: 120, wind: 160 },
    { hour: '23:00', consumption: 680, solar: 0, wind: 140 },
  ];

  const waterUsage = [
    { day: 'Mon', usage: 2800, leak: 120 },
    { day: 'Tue', usage: 2650, leak: 95 },
    { day: 'Wed', usage: 2900, leak: 110 },
    { day: 'Thu', usage: 2750, leak: 105 },
    { day: 'Fri', usage: 3100, leak: 130 },
    { day: 'Sat', usage: 2400, leak: 80 },
    { day: 'Sun', usage: 2200, leak: 70 },
  ];

  const airQuality = [
    { pollutant: 'PM2.5', value: 35, max: 50, status: 'good' },
    { pollutant: 'PM10', value: 45, max: 100, status: 'good' },
    { pollutant: 'NO2', value: 62, max: 100, status: 'moderate' },
    { pollutant: 'O3', value: 28, max: 70, status: 'good' },
  ];

  const energyDistribution = [
    { name: 'Renewable', value: 35, color: 'hsl(var(--success))' },
    { name: 'Natural Gas', value: 40, color: 'hsl(var(--primary))' },
    { name: 'Nuclear', value: 25, color: 'hsl(var(--accent))' },
  ];

  return (
    <div className="space-y-6">
      {/* Utility Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Energy</p>
              <p className="text-xl font-bold">842 MW</p>
              <p className="text-xs text-success">-12% vs avg</p>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Droplet className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Water</p>
              <p className="text-xl font-bold">2.8M gal</p>
              <p className="text-xs text-warning">+5% leak rate</p>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <Wind className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Air Quality</p>
              <p className="text-xl font-bold">Good</p>
              <p className="text-xs text-muted-foreground">AQI: 42</p>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-warning/10 rounded-lg">
              <Thermometer className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="text-xl font-bold">72°F</p>
              <p className="text-xs text-muted-foreground">Optimal</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Energy Consumption Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Energy Consumption & Generation</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={energyConsumption}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))' 
                }} 
              />
              <Area type="monotone" dataKey="consumption" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/20)" />
              <Area type="monotone" dataKey="solar" stackId="2" stroke="hsl(var(--warning))" fill="hsl(var(--warning)/20)" />
              <Area type="monotone" dataKey="wind" stackId="2" stroke="hsl(var(--success))" fill="hsl(var(--success)/20)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Energy Sources</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={energyDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {energyDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {energyDistribution.map((source, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                  <span>{source.name}</span>
                </div>
                <span className="font-medium">{source.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Water Usage */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Water Consumption & Leak Detection</h3>
          <div className="flex items-center gap-2 px-3 py-1 bg-warning/10 rounded-lg">
            <AlertCircle className="h-4 w-4 text-warning" />
            <span className="text-sm">3 Potential Leaks Detected</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={waterUsage}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))' 
              }} 
            />
            <Bar dataKey="usage" fill="hsl(var(--accent))" />
            <Bar dataKey="leak" fill="hsl(var(--destructive))" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Air Quality */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Air Quality Index</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {airQuality.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.pollutant}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === 'good' ? 'bg-success/10 text-success' :
                  item.status === 'moderate' ? 'bg-warning/10 text-warning' :
                  'bg-destructive/10 text-destructive'
                }`}>
                  {item.status}
                </span>
              </div>
              <Progress value={(item.value / item.max) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground">{item.value} / {item.max} µg/m³</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default UtilitiesModule;