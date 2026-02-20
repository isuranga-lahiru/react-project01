import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import NewSite from '../components/NewSite'
import NewContent from '../components/NewContent'

export default function Home() {
  const navigate = useNavigate()

  const handleAdminLogin = () => {
    navigate('/admin-login')
  }

  return (
    <main>
      {/* Admin Login Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-charcoal-900 to-midnight-900 p-6 rounded-lg mb-6 shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <Lock size={28} className="text-gold-400" />
          <div>
            <h2 className="text-2xl font-serif font-bold text-gold-400">
              🎨 Fashion E-Commerce Admin
            </h2>
            <p className="text-charcoal-300 text-sm">
              Manage your inventory, orders, and customers from the premium dashboard
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAdminLogin}
          className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/50 transition-all whitespace-nowrap"
        >
          Go to Admin Dashboard
        </motion.button>
      </motion.div>

      <NewSite newword="Admin Dashboard"/>
    </main>
  )
}
