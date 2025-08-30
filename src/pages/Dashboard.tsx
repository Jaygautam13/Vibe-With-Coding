import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from '@/components/Sidebar';
import TrafficModule from '@/components/modules/TrafficModule';
import UtilitiesModule from '@/components/modules/UtilitiesModule';
import IncidentModule from '@/components/modules/IncidentModule';
import CitizenServicesModule from '@/components/modules/CitizenServicesModule';
import KPICards from '@/components/KPICards';
import CityMap from '@/components/CityMap';
import { Activity, Zap, Shield, Users } from 'lucide-react';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('overview');

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Smart City Command Center</h1>
            <p className="text-muted-foreground">Real-time monitoring and AI-powered insights</p>
          </div>

          {activeModule === 'overview' && (
            <>
              {/* KPI Cards */}
              <KPICards />

              {/* Main Map */}
              <Card className="glass-card p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">City Overview Map</h2>
                <CityMap />
              </Card>

              {/* Module Tabs */}
              <Tabs defaultValue="traffic" className="space-y-4">
                <TabsList className="bg-card">
                  <TabsTrigger value="traffic" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Activity className="mr-2 h-4 w-4" />
                    Traffic
                  </TabsTrigger>
                  <TabsTrigger value="utilities" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Zap className="mr-2 h-4 w-4" />
                    Utilities
                  </TabsTrigger>
                  <TabsTrigger value="incidents" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Shield className="mr-2 h-4 w-4" />
                    Incidents
                  </TabsTrigger>
                  <TabsTrigger value="citizens" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    Citizens
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="traffic">
                  <TrafficModule />
                </TabsContent>
                <TabsContent value="utilities">
                  <UtilitiesModule />
                </TabsContent>
                <TabsContent value="incidents">
                  <IncidentModule />
                </TabsContent>
                <TabsContent value="citizens">
                  <CitizenServicesModule />
                </TabsContent>
              </Tabs>
            </>
          )}

          {activeModule === 'traffic' && <TrafficModule />}
          {activeModule === 'utilities' && <UtilitiesModule />}
          {activeModule === 'incidents' && <IncidentModule />}
          {activeModule === 'citizens' && <CitizenServicesModule />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;