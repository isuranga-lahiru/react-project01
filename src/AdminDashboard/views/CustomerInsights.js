import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, ShoppingBag, MapPin } from 'lucide-react';

const CustomerInsights = () => {
  const topCustomers = [
    {
      id: 1,
      name: 'Victoria Chen',
      email: 'victoria@example.com',
      avatar: '👩',
      totalSpent: '$3,450.00',
      orders: 24,
      lastOrder: '2024-02-15',
      favorite: 'Dresses, Evening Wear',
      status: 'VIP',
      joinDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Eleanor Roosevelt',
      email: 'eleanor@example.com',
      avatar: '👱‍♀️',
      totalSpent: '$2,890.50',
      orders: 18,
      lastOrder: '2024-02-14',
      favorite: 'Classic Tees, Jeans',
      status: 'Premium',
      joinDate: '2023-03-22',
    },
    {
      id: 3,
      name: 'Sophia Anderson',
      email: 'sophia@example.com',
      avatar: '👩‍🦱',
      totalSpent: '$2,245.75',
      orders: 15,
      lastOrder: '2024-02-13',
      favorite: 'Hoodies, Athleisure',
      status: 'Premium',
      joinDate: '2023-05-10',
    },
    {
      id: 4,
      name: 'Isabella Martinez',
      email: 'isabella@example.com',
      avatar: '👩‍🦳',
      totalSpent: '$1,890.25',
      orders: 12,
      lastOrder: '2024-02-12',
      favorite: 'Elegant Dresses',
      status: 'Gold',
      joinDate: '2023-07-18',
    },
    {
      id: 5,
      name: 'Amelia Thompson',
      email: 'amelia@example.com',
      avatar: '👩‍🦲',
      totalSpent: '$1,567.00',
      orders: 10,
      lastOrder: '2024-02-11',
      favorite: 'Casual Wear',
      status: 'Gold',
      joinDate: '2023-09-25',
    },
  ];

  const customerStats = [
    {
      label: 'Total Customers',
      value: '1,248',
      change: '+12.5%',
      icon: TrendingUp,
      gradient: 'from-gold-500/10 to-gold-400/5',
      color: 'text-gold-600',
    },
    {
      label: 'Repeat Rate',
      value: '68.5%',
      change: '+4.2%',
      icon: Heart,
      gradient: 'from-red-500/10 to-red-400/5',
      color: 'text-red-600',
    },
    {
      label: 'Avg. Order Value',
      value: '$145.80',
      change: '+8.7%',
      icon: ShoppingBag,
      gradient: 'from-midnight-500/10 to-midnight-400/5',
      color: 'text-midnight-600',
    },
    {
      label: 'Customer Lifetime',
      value: '$2,340',
      change: '+15.3%',
      icon: TrendingUp,
      gradient: 'from-charcoal-500/10 to-charcoal-400/5',
      color: 'text-charcoal-600',
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
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-serif font-bold text-charcoal-900">
          Customer Insights
        </h1>
        <p className="text-charcoal-500 mt-2">
          Deep dive into customer behavior and preferences
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {customerStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`bg-gradient-to-br ${stat.gradient} to-transparent backdrop-blur-glass rounded-2xl p-6 soft-shadow-md border border-white/50 transition-smooth`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} to-transparent`}>
                  <Icon size={24} className={stat.color} />
                </div>
                <span className="text-sm font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-700">
                  {stat.change}
                </span>
              </div>
              <p className="text-charcoal-600 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-serif font-bold text-charcoal-900">
                {stat.value}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Top Customers */}
      <motion.div
        variants={itemVariants}
        className="bg-white/70 backdrop-blur-glass rounded-2xl p-8 soft-shadow-md border border-charcoal-100/50"
      >
        <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-8">
          Top Spending Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {topCustomers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-charcoal-50 to-transparent rounded-xl p-6 border border-charcoal-100/50 hover:border-gold-300 transition-smooth"
            >
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-start">
                {/* Avatar & Basic Info */}
                <div className="md:col-span-1">
                  <div className="flex items-start gap-3">
                    <span className="text-4xl">{customer.avatar}</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`px-2 py-1 text-xs font-bold rounded-full ${
                        customer.status === 'VIP'
                          ? 'bg-gold-500/30 text-gold-700'
                          : customer.status === 'Premium'
                          ? 'bg-midnight-500/30 text-midnight-700'
                          : 'bg-charcoal-500/30 text-charcoal-700'
                      }`}
                    >
                      {customer.status}
                    </motion.span>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="md:col-span-2">
                  <p className="font-bold text-charcoal-900">{customer.name}</p>
                  <p className="text-sm text-charcoal-600">{customer.email}</p>
                  <div className="flex items-center gap-1 text-xs text-charcoal-500 mt-2">
                    <MapPin size={14} />
                    Member since {customer.joinDate}
                  </div>
                </div>

                {/* Purchase History */}
                <div className="md:col-span-1">
                  <p className="text-sm text-charcoal-600 mb-1">Total Orders</p>
                  <p className="text-2xl font-bold text-charcoal-900">{customer.orders}</p>
                </div>

                {/* Total Spent */}
                <div className="md:col-span-1">
                  <p className="text-sm text-charcoal-600 mb-1">Total Spent</p>
                  <p className="text-2xl font-bold text-gold-600">{customer.totalSpent}</p>
                </div>

                {/* Last Order */}
                <div className="md:col-span-1">
                  <p className="text-sm text-charcoal-600 mb-1">Last Order</p>
                  <p className="text-sm font-semibold text-charcoal-900">{customer.lastOrder}</p>
                </div>

                {/* Favorites */}
                <div className="md:col-span-2">
                  <p className="text-sm text-charcoal-600 mb-1">Favorite Items</p>
                  <p className="text-sm text-charcoal-700">{customer.favorite}</p>
                </div>

                {/* Action */}
                <div className="md:col-span-1">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-gold-500/20 to-transparent text-gold-700 font-semibold rounded-lg hover:bg-gold-500/30 transition-smooth border border-gold-300/50"
                  >
                    View Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Loyalty Tiers */}
      <motion.div
        variants={itemVariants}
        className="bg-white/70 backdrop-blur-glass rounded-2xl p-8 soft-shadow-md border border-charcoal-100/50"
      >
        <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">
          Customer Loyalty Tiers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { tier: 'Standard', color: 'bg-charcoal-500', spending: '$0-$500', count: 682 },
            { tier: 'Gold', color: 'bg-yellow-500', spending: '$500-$1500', count: 384 },
            { tier: 'Premium', color: 'bg-midnight-500', spending: '$1500-$3000', count: 156 },
            { tier: 'VIP', color: 'bg-gold-500', spending: '$3000+', count: 26 },
          ].map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-16 h-16 ${tier.color} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white`}
              >
                ⭐
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">{tier.tier}</h3>
              <p className="text-sm text-charcoal-600 mb-2">{tier.spending}</p>
              <p className="text-2xl font-bold text-charcoal-900">{tier.count}</p>
              <p className="text-xs text-charcoal-500">customers</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomerInsights;
