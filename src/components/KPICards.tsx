import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Activity, Users, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const KPICards = () => {
  const kpis = [
    {
      title: 'Active Citizens',
      value: '1.2M',
      change: '+5.2%',
      trend: 'up',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Energy Consumption',
      value: '842 MW',
      change: '-12.3%',
      trend: 'down',
      icon: Zap,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Traffic Flow',
      value: '87%',
      change: '+3.1%',
      trend: 'up',
      icon: Activity,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Active Incidents',
      value: '3',
      change: '-25%',
      trend: 'down',
      icon: Shield,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
              </div>
              <div className="flex items-center gap-1">
                {kpi.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-success" />
                )}
                <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-warning' : 'text-success'}`}>
                  {kpi.change}
                </span>
              </div>
            </div>
            <h3 className="text-sm text-muted-foreground mb-1">{kpi.title}</h3>
            <p className="text-2xl font-bold">{kpi.value}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default KPICards;