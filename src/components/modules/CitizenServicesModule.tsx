import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, MessageSquare, CheckCircle, Clock, TrendingUp, AlertCircle, FileText, Star } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const CitizenServicesModule = () => {
  const serviceRequests = [
    { id: 'SR-2024-001', type: 'Pothole Repair', status: 'in-progress', priority: 'high', created: '2 hours ago', sla: '24h', progress: 65 },
    { id: 'SR-2024-002', type: 'Street Light', status: 'pending', priority: 'medium', created: '5 hours ago', sla: '48h', progress: 20 },
    { id: 'SR-2024-003', type: 'Noise Complaint', status: 'resolved', priority: 'low', created: '1 day ago', sla: '72h', progress: 100 },
    { id: 'SR-2024-004', type: 'Garbage Collection', status: 'in-progress', priority: 'high', created: '8 hours ago', sla: '12h', progress: 80 },
  ];

  const satisfactionData = [
    { month: 'Jan', satisfaction: 78 },
    { month: 'Feb', satisfaction: 82 },
    { month: 'Mar', satisfaction: 80 },
    { month: 'Apr', satisfaction: 85 },
    { month: 'May', satisfaction: 88 },
    { month: 'Jun', satisfaction: 87 },
  ];

  const requestCategories = [
    { name: 'Infrastructure', value: 35, color: 'hsl(var(--primary))' },
    { name: 'Utilities', value: 25, color: 'hsl(var(--accent))' },
    { name: 'Safety', value: 20, color: 'hsl(var(--warning))' },
    { name: 'Environment', value: 20, color: 'hsl(var(--success))' },
  ];

  const metrics = [
    { label: 'Active Requests', value: '234', icon: FileText, change: '+12%', color: 'text-primary' },
    { label: 'Avg Resolution', value: '18h', icon: Clock, change: '-25%', color: 'text-success' },
    { label: 'Satisfaction', value: '87%', icon: Star, change: '+5%', color: 'text-warning' },
    { label: 'SLA Compliance', value: '94%', icon: CheckCircle, change: '+2%', color: 'text-accent' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'resolved': return 'text-success bg-success/10';
      case 'in-progress': return 'text-warning bg-warning/10';
      case 'pending': return 'text-muted-foreground bg-muted/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="glass-card p-4">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-card ${metric.color}`}>
                <metric.icon className="h-5 w-5" />
              </div>
              <span className={`text-xs font-medium ${
                metric.change.startsWith('+') ? 'text-success' : 'text-destructive'
              }`}>
                {metric.change}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
          </Card>
        ))}
      </div>

      {/* Service Requests Table */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Recent Service Requests</h3>
          <Button size="sm" variant="outline">View All</Button>
        </div>
        
        <div className="space-y-3">
          {serviceRequests.map((request) => (
            <div key={request.id} className="p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm">{request.id}</span>
                  <Badge className={getPriorityColor(request.priority)}>
                    {request.priority}
                  </Badge>
                  <Badge variant="outline">{request.type}</Badge>
                </div>
                <Badge className={getStatusColor(request.status)}>
                  {request.status}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {request.created}
                  </span>
                  <span>SLA: {request.sla}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={request.progress} className="w-24 h-2" />
                  <span className="text-sm font-medium">{request.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Satisfaction Trend */}
        <Card className="glass-card p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Citizen Satisfaction Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={satisfactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))' 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="satisfaction" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Request Categories */}
        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Request Categories</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={requestCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {requestCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {requestCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                  <span>{category.name}</span>
                </div>
                <span className="font-medium">{category.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Chatbot Analytics */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">AI Chatbot Performance</h3>
          <Badge variant="outline" className="bg-success/10">
            <div className="w-2 h-2 bg-success rounded-full mr-2" />
            Online
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Total Conversations</span>
            </div>
            <p className="text-2xl font-bold">12,847</p>
            <p className="text-xs text-success mt-1">+18% this week</p>
          </div>
          
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-sm text-muted-foreground">Resolution Rate</span>
            </div>
            <p className="text-2xl font-bold">78%</p>
            <p className="text-xs text-muted-foreground mt-1">Auto-resolved</p>
          </div>
          
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Avg Response</span>
            </div>
            <p className="text-2xl font-bold">1.2s</p>
            <p className="text-xs text-success mt-1">-0.3s improvement</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CitizenServicesModule;