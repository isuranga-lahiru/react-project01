import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin-dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate inputs
    if (!email.trim()) {
      setError('Please enter your email');
      setLoading(false);
      return;
    }

    if (!password) {
      setError('Please enter your password');
      setLoading(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      const result = login(email, password);
      if (result.success) {
        navigate('/admin-dashboard');
      } else {
        setError(result.message);
      }
      setLoading(false);
    }, 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Demo credentials helper
  const fillDemoCredentials = () => {
    setEmail('admin@fashionhub.com');
    setPassword('Admin@123');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-midnight-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-midnight-500/10 rounded-full blur-3xl"
      />

      {/* Login Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md z-10"
      >
        {/* Logo Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-400 rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-serif font-bold text-charcoal-900">👔</span>
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-gold-400 mb-2">
            AdminHub
          </h1>
          <p className="text-charcoal-300">Fashion E-commerce Administration</p>
        </motion.div>

        {/* Login Form Card */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-charcoal-800/50 to-charcoal-900/50 backdrop-blur-xl rounded-3xl border border-gold-500/20 p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                Admin Login
              </h2>
              <p className="text-charcoal-400 text-sm">
                Access the dashboard to manage your store
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
              >
                <AlertCircle size={20} className="text-red-400" />
                <p className="text-red-300 text-sm">{error}</p>
              </motion.div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gold-400 mb-3">
                Email Address
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@fashionhub.com"
                  className="w-full pl-12 pr-4 py-3 bg-charcoal-700/50 border border-charcoal-600/50 text-white placeholder-charcoal-500 rounded-lg outline-none focus:border-gold-500/50 focus:bg-charcoal-700 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gold-400 mb-3">
                Password
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-charcoal-700/50 border border-charcoal-600/50 text-white placeholder-charcoal-500 rounded-lg outline-none focus:border-gold-500/50 focus:bg-charcoal-700 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-gold-500 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-charcoal-400 cursor-pointer">
                Remember me on this device
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In to Dashboard'}
            </motion.button>

            {/* Demo Credentials Helper */}
            <div className="pt-4 border-t border-charcoal-600/50">
              <p className="text-xs text-charcoal-400 mb-3 text-center">
                🔐 Demo Credentials
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={fillDemoCredentials}
                className="w-full py-2 bg-charcoal-700/50 hover:bg-charcoal-700 text-gold-400 font-semibold rounded-lg border border-charcoal-600/50 hover:border-gold-500/50 transition-all text-sm"
              >
                Use Demo Credentials
              </motion.button>
            </div>
          </form>

          {/* Info Section */}
          <motion.div
            variants={itemVariants}
            className="mt-6 pt-6 border-t border-charcoal-600/50"
          >
            <div className="bg-midnight-900/50 rounded-lg p-4 text-xs text-charcoal-300 space-y-2">
              <p className="font-semibold text-gold-400 mb-2">📧 Demo Email:</p>
              <code className="block bg-charcoal-800/50 p-2 rounded text-gold-300">
                admin@fashionhub.com
              </code>
              <p className="font-semibold text-gold-400 mt-3 mb-2">🔐 Demo Password:</p>
              <code className="block bg-charcoal-800/50 p-2 rounded text-gold-300">
                Admin@123
              </code>
              <p className="text-charcoal-500 mt-3 text-xs">
                ℹ️ These are demo credentials for testing. Replace with real authentication in production.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center text-charcoal-400 text-sm"
        >
          <p>
            🔒 This is a secure admin login page
          </p>
          <p className="mt-2 text-xs text-charcoal-500">
            Unauthorized access attempts are logged
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
