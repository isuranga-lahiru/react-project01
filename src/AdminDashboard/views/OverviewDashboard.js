import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from 'recharts';
import {
  TrendingUp,
  ShoppingBag,
  Users,
  DollarSign,
} from 'lucide-react';
import AnalyticsCard from '../components/AnalyticsCard';

const OverviewDashboard = () => {
  // Sample data
  const revenueData = [
    { name: 'Jan', revenue: 45000, target: 50000 },
    { name: 'Feb', revenue: 52000, target: 50000 },
    { name: 'Mar', revenue: 48000, target: 55000 },
    { name: 'Apr', revenue: 61000, target: 60000 },
    { name: 'May', revenue: 58000, target: 65000 },
    { name: 'Jun', revenue: 72000, target: 70000 },
  ];

  const salesData = [
    { name: 'Mon', sales: 240, returns: 24 },
    { name: 'Tue', sales: 321, returns: 32 },
    { name: 'Wed', sales: 200, returns: 18 },
    { name: 'Thu', sales: 279, returns: 28 },
    { name: 'Fri', sales: 200, returns: 20 },
    { name: 'Sat', sales: 329, returns: 25 },
    { name: 'Sun', sales: 245, returns: 30 },
  ];

  const topProducts = [
    { name: 'ClassicTee', value: 45, percentage: 28 },
    { name: 'DressElegance', value: 32, percentage: 20 },
    { name: 'DenimPro', value: 28, percentage: 17 },
    { name: 'SweatStyle', value: 25, percentage: 15 },
    { name: 'Others', value: 40, percentage: 20 },
  ];

  const analyticsCards = [
    {
      title: 'Total Revenue',
      value: '$87,450',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      gradient: 'from-gold-500/10 to-gold-400/5',
      color: 'text-gold-600',
    },
    {
      title: 'Daily Sales',
      value: '1,245',
      change: '+8.2%',
      isPositive: true,
      icon: ShoppingBag,
      gradient: 'from-midnight-500/10 to-midnight-400/5',
      color: 'text-midnight-600',
    },
    {
      title: 'Active Orders',
      value: '342',
      change: '-2.4%',
      isPositive: false,
      icon: TrendingUp,
      gradient: 'from-charcoal-500/10 to-charcoal-400/5',
      color: 'text-charcoal-600',
    },
    {
      title: 'New Customers',
      value: '156',
      change: '+15.3%',
      isPositive: true,
      icon: Users,
      gradient: 'from-cream-500/10 to-cream-400/5',
      color: 'text-cream-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Page Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-serif font-bold text-charcoal-900">
          Dashboard Overview
        </h1>
        <p className="text-charcoal-500 mt-2">
          Welcome back! Here's your business performance at a glance.
        </p>
      </motion.div>

      {/* Analytics Cards Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {analyticsCards.map((card, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AnalyticsCard {...card} />
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Revenue Chart */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-white/70 backdrop-blur-glass rounded-2xl p-6 soft-shadow-md border border-charcoal-100/50"
        >
          <div className="mb-6">
            <h2 className="text-xl font-serif font-bold text-charcoal-900">
              Revenue Trend
            </h2>
            <p className="text-sm text-charcoal-500">Last 6 months</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f5c842" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f5c842" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e3" />
              <XAxis dataKey="name" stroke="#9e9189" />
              <YAxis stroke="#9e9189" />
              <Tooltip
                contentStyle={{
                  background: '#fffcf9',
                  border: '1px solid #d1ccc6',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#f5c842"
                fillOpacity={1}
                fill="url(#colorRevenue)"
                name="Revenue"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#6c8ad7"
                strokeDasharray="5 5"
                name="Target"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Products */}
        <motion.div
          variants={itemVariants}
          className="bg-white/70 backdrop-blur-glass rounded-2xl p-6 soft-shadow-md border border-charcoal-100/50"
        >
          <h2 className="text-xl font-serif font-bold text-charcoal-900 mb-6">
            Top Products
          </h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-charcoal-700">
                    {product.name}
                  </span>
                  <span className="text-sm font-bold text-gold-600">
                    {product.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 bg-charcoal-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${product.percentage}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-gold-400 to-gold-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Sales Weekly Chart */}
      <motion.div
        variants={itemVariants}
        className="bg-white/70 backdrop-blur-glass rounded-2xl p-6 soft-shadow-md border border-charcoal-100/50"
      >
        <div className="mb-6">
          <h2 className="text-xl font-serif font-bold text-charcoal-900">
            Weekly Sales Overview
          </h2>
          <p className="text-sm text-charcoal-500">Sales vs Returns</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e3" />
            <XAxis dataKey="name" stroke="#9e9189" />
            <YAxis stroke="#9e9189" />
            <Tooltip
              contentStyle={{
                background: '#fffcf9',
                border: '1px solid #d1ccc6',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="sales" fill="#f5c842" radius={[8, 8, 0, 0]} />
            <Bar dataKey="returns" fill="#6c8ad7" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};

export default OverviewDashboard;
