import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Plus,
  LogOut,
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'add-product', label: 'Add Product', icon: Plus },
  ];

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: sidebarOpen ? 0 : -280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 w-80 h-screen bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white z-40"
    >
      {/* Logo Section */}
      <div className="p-8 border-b border-charcoal-700/50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-400 rounded-lg flex items-center justify-center font-serif font-bold text-charcoal-900 text-xl">
            A
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-gold-400">AdminHub</h1>
            <p className="text-xs text-charcoal-400">Fashion Dashboard</p>
          </div>
        </motion.div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-8">
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setActiveTab(item.id);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-smooth relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-500/20 to-transparent text-gold-400'
                    : 'text-charcoal-300 hover:bg-charcoal-700/50 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-gold-500 to-gold-400 rounded-l"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-charcoal-700/50">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-charcoal-700/50 hover:bg-red-500/20 text-charcoal-300 hover:text-red-400 transition-smooth"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
