import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Clock, MapPin, TrendingUp, Users, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const IncidentModule = () => {
  const activeIncidents = [
    {
      id: 'INC-001',
      type: 'Fire',
      severity: 'critical',
      location: '5th Avenue & 42nd Street',
      time: '12 mins ago',
      responders: 8,
      eta: '3 mins',
      status: 'responding'
    },
    {
      id: 'INC-002',
      type: 'Traffic Accident',
      severity: 'moderate',
      location: 'Brooklyn Bridge',
      time: '28 mins ago',
      responders: 4,
      eta: '5 mins',
      status: 'responding'
    },
    {
      id: 'INC-003',
      type: 'Medical Emergency',
      severity: 'high',
      location: 'Central Park West',
      time: '45 mins ago',
      responders: 3,
      eta: 'On Scene',
      status: 'active'
    }
  ];

  const responseMetrics = [
    { metric: 'Avg Response Time', value: '4.2 mins', change: '-18%', trend: 'positive' },
    { metric: 'Units Available', value: '42/60', change: '70%', trend: 'neutral' },
    { metric: 'Incidents Today', value: '23', change: '+5%', trend: 'negative' },
    { metric: 'Resolution Rate', value: '94%', change: '+2%', trend: 'positive' }
  ];

  const dispatchOptimization = {
    saved: '186 mins',
    optimized: 89,
    rerouted: 12
  };

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'critical': return 'bg-destructive text-destructive-foreground';
      case 'high': return 'bg-warning text-warning-foreground';
      case 'moderate': return 'bg-accent text-accent-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Response Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {responseMetrics.map((metric, index) => (
          <Card key={index} className="glass-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{metric.metric}</span>
              <span className={`text-xs font-medium ${
                metric.trend === 'positive' ? 'text-success' :
                metric.trend === 'negative' ? 'text-destructive' :
                'text-warning'
              }`}>
                {metric.change}
              </span>
            </div>
            <p className="text-2xl font-bold">{metric.value}</p>
          </Card>
        ))}
      </div>

      {/* Active Incidents */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Active Incidents</h3>
          <Badge variant="destructive" className="animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            3 Active
          </Badge>
        </div>
        
        <div className="space-y-4">
          {activeIncidents.map((incident) => (
            <div key={incident.id} className="p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    incident.severity === 'critical' ? 'bg-destructive/10' :
                    incident.severity === 'high' ? 'bg-warning/10' :
                    'bg-accent/10'
                  }`}>
                    <AlertTriangle className={`h-5 w-5 ${
                      incident.severity === 'critical' ? 'text-destructive' :
                      incident.severity === 'high' ? 'text-warning' :
                      'text-accent'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{incident.id}</span>
                      <Badge className={getSeverityColor(incident.severity)}>
                        {incident.severity}
                      </Badge>
                      <Badge variant="outline">{incident.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {incident.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {incident.time}
                      </span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{incident.responders} Responders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">ETA: {incident.eta}</span>
                  </div>
                </div>
                <Badge variant={incident.status === 'active' ? 'default' : 'secondary'}>
                  {incident.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Dispatch Optimization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">AI Dispatch Optimization</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Time Saved Today</p>
                <p className="text-2xl font-bold text-success">{dispatchOptimization.saved}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Route Optimization</span>
                <span className="text-sm font-medium">{dispatchOptimization.optimized}%</span>
              </div>
              <Progress value={dispatchOptimization.optimized} className="h-2" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Units Rerouted</span>
              <span className="font-medium">{dispatchOptimization.rerouted}</span>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Prediction Model</h3>
          <div className="space-y-3">
            <div className="p-3 bg-warning/10 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium">High Risk Areas</span>
              </div>
              <p className="text-xs text-muted-foreground">Downtown, Financial District</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Peak Incident Time</span>
              </div>
              <p className="text-xs text-muted-foreground">Predicted: 5:30 PM - 7:30 PM</p>
            </div>
            <div className="p-3 bg-accent/10 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Preventive Measures</span>
              </div>
              <p className="text-xs text-muted-foreground">3 units pre-positioned</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default IncidentModule;