import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OverviewDashboard from './views/OverviewDashboard';
import InventoryManagement from './views/InventoryManagement';
import OrderTracking from './views/OrderTracking';
import CustomerInsights from './views/CustomerInsights';
import AddProduct from './views/AddProduct';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewDashboard />;
      case 'inventory':
        return <InventoryManagement />;
      case 'orders':
        return <OrderTracking />;
      case 'customers':
        return <CustomerInsights />;
      case 'add-product':
        return <AddProduct />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-cream-50 via-white to-cream-100">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-80">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content Area */}
        <motion.main
          className="flex-1 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 md:p-8">
            {renderContent()}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default AdminDashboard;
