import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Shield, TrendingUp, Users, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/smart-city-hero.jpg';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models for traffic, energy, and resource optimization"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Monitor city metrics with live data streams and instant insights"
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "Optimize dispatch routing and predict incident patterns"
    },
    {
      icon: Users,
      title: "Citizen Services",
      description: "Digital platform for service requests and community engagement"
    },
    {
      icon: Zap,
      title: "Resource Optimization",
      description: "Reduce energy consumption and optimize utility distribution"
    },
    {
      icon: Globe,
      title: "Digital Twin",
      description: "Virtual city model for scenario planning and simulation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Smart City" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative container mx-auto px-6 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              CityOptima
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              AI-Powered Smart City Management Platform
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transform urban management with real-time analytics, predictive modeling, 
              and intelligent resource optimization for smarter, more efficient cities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/dashboard')}
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg"
              >
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-primary/50 hover:bg-primary/10"
              >
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Intelligent City Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-background to-card/50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "IoT Sensors", suffix: "Connected" },
              { value: "99.9%", label: "System Uptime", suffix: "Reliability" },
              { value: "35%", label: "Energy Savings", suffix: "Average Reduction" },
              { value: "24/7", label: "Monitoring", suffix: "Real-Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.suffix}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="glass-card rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Smarter Cities?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the future of urban management with our comprehensive AI-powered platform.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/dashboard')}
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;