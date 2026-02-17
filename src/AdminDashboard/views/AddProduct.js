import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Plus, X } from 'lucide-react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    sizes: [],
    colors: [],
    image: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [newSize, setNewSize] = useState('');
  const [newColor, setNewColor] = useState('');

  const categories = [
    'T-shirts',
    'Dresses',
    'Jeans',
    'Hoodies',
    'Shirts',
    'Leggings',
    'Jackets',
    'Accessories',
  ];

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colorOptions = ['Black', 'White', 'Navy', 'Red', 'Gold', 'Gray', 'Beige', 'Pink'];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, image: e.dataTransfer.files[0] });
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const addSize = () => {
    if (newSize && !formData.sizes.includes(newSize)) {
      setFormData({
        ...formData,
        sizes: [...formData.sizes, newSize],
      });
      setNewSize('');
    }
  };

  const removeSize = (size) => {
    setFormData({
      ...formData,
      sizes: formData.sizes.filter((s) => s !== size),
    });
  };

  const addColor = () => {
    if (newColor && !formData.colors.includes(newColor)) {
      setFormData({
        ...formData,
        colors: [...formData.colors, newColor],
      });
      setNewColor('');
    }
  };

  const removeColor = (color) => {
    setFormData({
      ...formData,
      colors: formData.colors.filter((c) => c !== color),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', formData);
    alert('Product added successfully!');
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
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-serif font-bold text-charcoal-900">
          Add New Product
        </h1>
        <p className="text-charcoal-500 mt-2">
          Add a new item to your inventory with all details and variants
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-glass rounded-2xl p-8 soft-shadow-md border border-charcoal-100/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Upload */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-charcoal-900 mb-4">
              Product Image
            </label>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-smooth ${
                dragActive
                  ? 'border-gold-500 bg-gold-50'
                  : 'border-charcoal-300 bg-charcoal-50 hover:border-gold-400'
              }`}
            >
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {formData.image ? (
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-charcoal-900">
                    ✓ {formData.image.name}
                  </p>
                  <p className="text-sm text-charcoal-600">
                    {(formData.image.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload size={32} className="mx-auto text-gold-500" />
                  <p className="text-charcoal-900 font-semibold">
                    Drag and drop your image
                  </p>
                  <p className="text-sm text-charcoal-600">
                    or click to browse
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Form Fields */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Premium Silk Blouse"
                className="w-full px-4 py-3 bg-charcoal-50 rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
                required
              />
            </div>

            {/* Category & Price */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-charcoal-50 rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                  Price ($) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  step="0.01"
                  className="w-full px-4 py-3 bg-charcoal-50 rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                Product Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Write a detailed description of your product..."
                rows="4"
                className="w-full px-4 py-3 bg-charcoal-50 rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth resize-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Sizes Section */}
        <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-charcoal-200">
          <h3 className="text-lg font-semibold text-charcoal-900 mb-4">
            Available Sizes
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.sizes.map((size) => (
              <motion.div
                key={size}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2 bg-gold-500/20 text-gold-700 px-4 py-2 rounded-lg font-semibold"
              >
                {size}
                <button
                  type="button"
                  onClick={() => removeSize(size)}
                  className="hover:text-gold-900"
                >
                  <X size={18} />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-2">
            <select
              value={newSize}
              onChange={(e) => setNewSize(e.target.value)}
              className="flex-1 px-4 py-3 bg-charcoal-50 rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
            >
              <option value="">Select Size</option>
              {availableSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={addSize}
              className="px-6 py-3 bg-gold-500/20 text-gold-700 font-semibold rounded-lg hover:bg-gold-500/30 transition-smooth"
            >
              <Plus size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Colors Section */}
        <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-charcoal-200">
          <h3 className="text-lg font-semibold text-charcoal-900 mb-4">
            Available Colors
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.colors.map((color) => (
              <motion.div
                key={color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2 bg-midnight-500/20 text-midnight-700 px-4 py-2 rounded-lg font-semibold"
              >
                {color}
                <button
                  type="button"
                  onClick={() => removeColor(color)}
                  className="hover:text-midnight-900"
                >
                  <X size={18} />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-2">
            <select
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}
              className="flex-1 px-4 py-3 bg-charcoal-50 rounded-lg border border-charcoal-200 outline-none focus:border-gold-500 transition-smooth"
            >
              <option value="">Select Color</option>
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={addColor}
              className="px-6 py-3 bg-midnight-500/20 text-midnight-700 font-semibold rounded-lg hover:bg-midnight-500/30 transition-smooth"
            >
              <Plus size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Submit Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-charcoal-200 flex gap-4 justify-end"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="px-8 py-3 bg-charcoal-100 text-charcoal-900 font-semibold rounded-lg hover:bg-charcoal-200 transition-smooth"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-900 font-semibold rounded-lg soft-shadow-md hover:shadow-lg transition-smooth"
          >
            Add Product
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default AddProduct;
