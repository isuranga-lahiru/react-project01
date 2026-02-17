import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

const OrderTracking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    {
      id: '#ORD-2024-001',
      customer: 'Sarah Johnson',
      email: 'sarah@example.com',
      amount: '$245.50',
      date: '2024-02-15',
      status: 'Delivered',
      items: 3,
      address: '123 Elegance St, Fashion City',
    },
    {
      id: '#ORD-2024-002',
      customer: 'Emma Williams',
      email: 'emma@example.com',
      amount: '$189.99',
      date: '2024-02-14',
      status: 'Shipping',
      items: 2,
      address: '456 Style Ave, Trend Town',
    },
    {
      id: '#ORD-2024-003',
      customer: 'Michael Brown',
      email: 'michael@example.com',
      amount: '$129.75',
      date: '2024-02-13',
      status: 'Pending',
      items: 1,
      address: '789 Fashion Blvd, Design District',
    },
    {
      id: '#ORD-2024-004',
      customer: 'Jessica Davis',
      email: 'jessica@example.com',
      amount: '$356.25',
      date: '2024-02-12',
      status: 'Delivered',
      items: 4,
      address: '321 Chic Lane, Boutique Borough',
    },
    {
      id: '#ORD-2024-005',
      customer: 'Christopher Lee',
      email: 'chris@example.com',
      amount: '$99.99',
      date: '2024-02-11',
      status: 'Returned',
      items: 1,
      address: '654 Trendy Terrace, Style City',
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusConfig = (status) => {
    const configs = {
      Delivered: { color: 'bg-green-500/20 text-green-700', icon: '✓' },
      Shipping: { color: 'bg-blue-500/20 text-blue-700', icon: '→' },
      Pending: { color: 'bg-yellow-500/20 text-yellow-700', icon: '⏳' },
      Returned: { color: 'bg-red-500/20 text-red-700', icon: '↩' },
    };
    return configs[status] || configs.Pending;
  };

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
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div>
          <h1 className="text-4xl font-serif font-bold text-charcoal-900">
            Order Tracking
          </h1>
          <p className="text-charcoal-500 mt-2">
            Monitor and manage all customer orders
          </p>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" size={20} />
          <input
            type="text"
            placeholder="Search by order ID or customer name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 bg-white rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Shipping">Shipping</option>
          <option value="Delivered">Delivered</option>
          <option value="Returned">Returned</option>
        </select>
      </motion.div>

      {/* Orders Cards */}
      <motion.div
        variants={containerVariants}
        className="space-y-4"
      >
        {filteredOrders.map((order, index) => {
          const statusConfig = getStatusConfig(order.status);
          return (
            <motion.div
              key={order.id}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-white/70 backdrop-blur-glass rounded-xl p-6 soft-shadow-md border border-charcoal-100/50 transition-smooth"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
                {/* Order ID & Customer */}
                <div>
                  <p className="text-sm text-charcoal-600 mb-1">Order ID</p>
                  <p className="font-bold text-charcoal-900">{order.id}</p>
                  <p className="text-sm text-charcoal-700 mt-2">{order.customer}</p>
                  <p className="text-xs text-charcoal-500">{order.email}</p>
                </div>

                {/* Date & Items */}
                <div>
                  <p className="text-sm text-charcoal-600 mb-1">Date</p>
                  <p className="font-semibold text-charcoal-900">{order.date}</p>
                  <p className="text-sm text-charcoal-700 mt-2">
                    {order.items} {order.items === 1 ? 'item' : 'items'}
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-sm text-charcoal-600 mb-1">Shipping Address</p>
                  <p className="text-sm text-charcoal-700">{order.address}</p>
                </div>

                {/* Amount & Status */}
                <div>
                  <p className="text-sm text-charcoal-600 mb-1">Amount</p>
                  <p className="text-lg font-bold text-gold-600">{order.amount}</p>
                </div>

                {/* Status & Action */}
                <div className="md:text-right flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusConfig.color}`}>
                    {statusConfig.icon} {order.status}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-charcoal-100 rounded-lg transition-smooth"
                  >
                    <ArrowRight size={20} className="text-gold-600" />
                  </motion.button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 flex items-center justify-between text-xs text-charcoal-600">
                <span>Order Progress</span>
                <div className="flex-1 mx-4 h-2 bg-charcoal-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        order.status === 'Delivered'
                          ? '100%'
                          : order.status === 'Shipping'
                          ? '66%'
                          : order.status === 'Pending'
                          ? '33%'
                          : '0%',
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-gold-400 to-gold-500"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default OrderTracking;
