import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsCard = ({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  gradient,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`bg-gradient-to-br ${gradient} to-transparent backdrop-blur-glass rounded-2xl p-6 soft-shadow-md border border-white/50 transition-smooth`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} to-transparent`}>
          <Icon size={24} className={color} />
        </div>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`text-sm font-bold px-3 py-1 rounded-full ${
            isPositive
              ? 'bg-green-500/20 text-green-700'
              : 'bg-red-500/20 text-red-700'
          }`}
        >
          {change}
        </motion.span>
      </div>
      <p className="text-charcoal-600 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-serif font-bold text-charcoal-900">
        {value}
      </h3>
      <p className="text-xs text-charcoal-500 mt-2">
        {isPositive ? '↑' : '↓'} From last month
      </p>
    </motion.div>
  );
};

export default AnalyticsCard;
