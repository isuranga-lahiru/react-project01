import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, Bell, Search, LogOut } from 'lucide-react';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const { logout, adminUser } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin-login');
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/70 backdrop-blur-glass border-b border-charcoal-200/30 sticky top-0 z-30"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-charcoal-100 rounded-lg transition-smooth"
          >
            <Menu size={20} className="text-charcoal-700" />
          </motion.button>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-charcoal-50 px-4 py-2 rounded-lg flex-1 max-w-md">
            <Search size={18} className="text-charcoal-400" />
            <input
              type="text"
              placeholder="Search products, orders..."
              className="bg-transparent outline-none text-sm text-charcoal-700 placeholder-charcoal-400 flex-1"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 hover:bg-charcoal-50 rounded-lg transition-smooth"
          >
            <Bell size={20} className="text-charcoal-700" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
            />
          </motion.button>

          {/* User Profile */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 pl-4 border-l border-charcoal-200/50"
          >
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-charcoal-900">
                {adminUser?.name || 'Admin User'}
              </p>
              <p className="text-xs text-charcoal-500">Administrator</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:shadow-lg transition-smooth">
              {adminUser?.name?.charAt(0) || 'A'}
            </div>
          </motion.div>

          {/* Logout Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg transition-smooth border border-red-200/50 hover:border-red-300"
            title="Logout"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline text-sm font-semibold">Logout</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
