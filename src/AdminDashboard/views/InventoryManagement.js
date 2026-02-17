import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Edit, Trash2, Eye, Plus } from 'lucide-react';

const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Premium Classic Tee',
      category: 'T-shirts',
      image: '👕',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Navy'],
      stock: 245,
      price: 29.99,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Elegant Summer Dress',
      category: 'Dresses',
      image: '👗',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Red', 'Navy', 'Gold', 'White'],
      stock: 128,
      price: 79.99,
      status: 'In Stock',
    },
    {
      id: 3,
      name: 'Slim Fit Denim Jeans',
      category: 'Jeans',
      image: '👖',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Dark Blue', 'Light Blue', 'Black'],
      stock: 89,
      price: 59.99,
      status: 'In Stock',
    },
    {
      id: 4,
      name: 'Cozy Hoodie Sweatshirt',
      category: 'Hoodies',
      image: '🧥',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gray', 'Black', 'Navy', 'Charcoal'],
      stock: 45,
      price: 49.99,
      status: 'Low Stock',
    },
    {
      id: 5,
      name: 'Casual Canvas Shirt',
      category: 'Shirts',
      image: '👔',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Beige', 'White', 'Light Gray'],
      stock: 12,
      price: 44.99,
      status: 'Low Stock',
    },
    {
      id: 6,
      name: 'Athletic Performance Leggings',
      category: 'Leggings',
      image: '⚡',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      stock: 0,
      price: 54.99,
      status: 'Out of Stock',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-500/20 text-green-700';
      case 'Low Stock':
        return 'bg-yellow-500/20 text-yellow-700';
      case 'Out of Stock':
        return 'bg-red-500/20 text-red-700';
      default:
        return 'bg-gray-500/20 text-gray-700';
    }
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold text-charcoal-900">
              Inventory Management
            </h1>
            <p className="text-charcoal-500 mt-2">
              Manage your clothing collection and inventory levels
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-900 font-semibold rounded-lg soft-shadow-md hover:shadow-lg transition-smooth"
          >
            <Plus size={20} />
            Add Product
          </motion.button>
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
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 bg-white rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
          >
            <option value="all">All Categories</option>
            <option value="T-shirts">T-shirts</option>
            <option value="Dresses">Dresses</option>
            <option value="Jeans">Jeans</option>
            <option value="Hoodies">Hoodies</option>
            <option value="Shirts">Shirts</option>
            <option value="Leggings">Leggings</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-charcoal-200 hover:border-gold-500 transition-smooth">
            <Filter size={20} className="text-charcoal-600" />
          </button>
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        variants={itemVariants}
        className="bg-white/70 backdrop-blur-glass rounded-2xl overflow-hidden soft-shadow-md border border-charcoal-100/50"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-charcoal-900 to-charcoal-800 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Sizes
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Colors
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-100/50">
              {filteredProducts.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-charcoal-50/50 transition-smooth"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{product.image}</span>
                      <div>
                        <p className="font-semibold text-charcoal-900">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-charcoal-600">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 text-xs bg-charcoal-100 text-charcoal-700 rounded"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full border-2 border-charcoal-200 cursor-pointer hover:border-gold-500 transition-smooth"
                          title={color}
                          style={{
                            backgroundColor: color.toLowerCase().replace(' ', ''),
                          }}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-charcoal-900">
                      {product.stock}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gold-600">${product.price}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-charcoal-100 rounded-lg transition-smooth"
                        title="View"
                      >
                        <Eye size={18} className="text-charcoal-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-charcoal-100 rounded-lg transition-smooth"
                        title="Edit"
                      >
                        <Edit size={18} className="text-gold-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-red-50 rounded-lg transition-smooth"
                        title="Delete"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InventoryManagement;
