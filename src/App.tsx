import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import SpaceManagement from './components/modules/SpaceManagement';
import CargoManagement from './components/modules/CargoManagement';
import YardManagement from './components/modules/YardManagement';
import Reporting from './components/modules/Reporting';
export type ModuleType = 'space' | 'cargo' | 'yard' | 'reporting';
export function App() {
  const [activeModule, setActiveModule] = useState<ModuleType>('space');
  const [darkMode, setDarkMode] = useState(false);
  const renderModule = () => {
    switch (activeModule) {
      case 'space':
        return <SpaceManagement />;
      case 'cargo':
        return <CargoManagement />;
      case 'yard':
        return <YardManagement />;
      case 'reporting':
        return <Reporting />;
      default:
        return <SpaceManagement />;
    }
  };
  return <div className={`w-full min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Layout activeModule={activeModule} setActiveModule={setActiveModule} darkMode={darkMode} setDarkMode={setDarkMode}>
        {renderModule()}
      </Layout>
    </div>;
}