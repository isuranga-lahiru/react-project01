# 📖 Admin Dashboard - Component & Feature Reference

## 🎯 Dashboard Pages Overview

### 1. Overview Dashboard (`/admin-dashboard` - Default)
**Purpose**: Business metrics at a glance

**Components on Page**:
- 4 Analytics Cards (TailwindCSS + Framer Motion)
  - Total Revenue card
  - Daily Sales card
  - Active Orders card
  - New Customers card
- Revenue Trend Area Chart (Recharts)
  - Shows revenue vs target over 6 months
  - Interactive tooltips
- Top Products Bar Chart (Recharts)
  - Product names with percentages
  - Animated progress bars
- Weekly Sales Bar Chart (Recharts)
  - Sales vs Returns comparison
  - 7-day data view

**Interactive Features**:
- Hover over cards for emphasis (scale effect)
- Chart tooltips on hover
- Progress bar animations on load
- Responsive grid layout

**Sample Data**: 
- 6 months of revenue data
- 7 days of sales data
- 5 top products

---

### 2. Inventory Management (`/admin-dashboard` - Inventory Tab)
**Purpose**: Manage all products and inventory

**Components on Page**:
- Search Bar with debounce
- Category Filter Dropdown (6 categories)
- Searchable Product Table with:
  - Product emoji/image + name
  - Category label
  - Size variants (pills)
  - Color variants (visual indicators)
  - Stock level (numeric)
  - Price (gold accent color)
  - Status badge (color-coded)
  - Action buttons (View, Edit, Delete)

**Interactive Features**:
- Real-time search filtering
- Category filtering
- Hover row highlights
- Icon button animations
- Responsive table scrolling on mobile

**Table Features**:
- Professional header styling
- 6 sample products with real data
- 3 stock status types:
  - 🟢 In Stock (green)
  - 🟡 Low Stock (yellow)
  - 🔴 Out of Stock (red)

---

### 3. Order Tracking (`/admin-dashboard` - Orders Tab)
**Purpose**: Manage and track all customer orders

**Components on Page**:
- Search Bar (order ID or customer name)
- Status Filter Dropdown
- Order Cards (5 sample orders)
  - Order ID
  - Customer name & email
  - Date and item count
  - Shipping address
  - Total amount
  - Status badge with icon
  - Progress bar showing order lifecycle

**Interactive Features**:
- Real-time search filtering
- Status-based filtering
- Card hover animations
- Progress bar animations based on status
- Action button (arrow) to view details

**Order Statuses Supported**:
- ⏳ Pending (33% progress)
- → Shipping (66% progress)
- ✓ Delivered (100% progress)
- ↩ Returned (0% progress)

---

### 4. Customer Insights (`/admin-dashboard` - Customers Tab)
**Purpose**: Analyze customer behavior and loyalty

**Components on Page**:
- 4 Statistics Cards
  - Total Customers
  - Repeat Purchase Rate
  - Average Order Value
  - Customer Lifetime Value
- Top Customers Section
  - 5 customer cards with profiles
  - Avatar emoji
  - VIP/Premium/Gold status badge
  - Customer name & email
  - Join date
  - Total orders count
  - Total spent (gold color)
  - Last order date
  - Favorite item types
  - Profile view button
- Customer Loyalty Tiers
  - 4 tier breakdown with icons
  - Customer count per tier
  - Required spending amount per tier

**Interactive Features**:
- Status badges with color coding
- Smooth card animations
- Loyalty tier visualization
- Profile action buttons
- Hover effects on all interactive elements

**Customer Tiers**:
- Standard: $0-$500 (⭐ gray)
- Gold: $500-$1,500 (⭐ yellow)
- Premium: $1,500-$3,000 (⭐ blue)
- VIP: $3,000+ (⭐ gold)

---

### 5. Add Product (`/admin-dashboard` - Add Product Tab)
**Purpose**: Create new products with full details

**Form Sections**:

#### Image Upload Section
- Drag-and-drop area
- Supports image files
- Shows file name and size
- Visual upload indicator
- Changes color on drag-over

#### Product Information
- Product Name input
- Category dropdown (8 options)
- Price input (numeric, 2 decimals)
- Description textarea

#### Size Variants
- Dropdown selector (XS to XXL)
- Add button
- Added sizes display as pills
- Remove button on each size pill
- Visual feedback on add/remove

#### Color Variants
- Dropdown selector (8 colors)
- Add button
- Added colors display as pills
- Remove button on each color pill
- Visual feedback on add/remove

#### Form Actions
- Cancel button
- Submit button (Add Product)
- Form validation
- Success confirmation alert

**Interactive Features**:
- Drag-and-drop file upload
- Real-time size/color addition
- Animated pill creation/deletion
- Form validation feedback
- Button hover/press animations

---

## 🧩 Reusable Components

### AnalyticsCard Component
**Location**: `src/AdminDashboard/components/AnalyticsCard.js`

**Props**:
```javascript
{
  title: string,           // Card title
  value: string,          // Main metric value
  change: string,         // Change percentage
  isPositive: boolean,    // Determines change color
  icon: ReactComponent,   // Lucide icon
  gradient: string,       // Tailwind gradient class
  color: string          // Text color class
}
```

**Features**:
- Hover scale effect
- Icon in gradient background
- Change percentage badge
- Trend indicator (up/down arrow)
- Smooth animations

**Example Usage**:
```jsx
<AnalyticsCard
  title="Total Revenue"
  value="$87,450"
  change="+12.5%"
  isPositive={true}
  icon={DollarSign}
  gradient="from-gold-500/10 to-gold-400/5"
  color="text-gold-600"
/>
```

---

### Sidebar Component
**Location**: `src/AdminDashboard/components/Sidebar.js`

**Features**:
- Dynamic menu items array
- Active tab indicator with accent line
- Animated menu item entrance
- Fixed on desktop, sliding on mobile
- Logo section with branding
- Logout button at bottom
- Smooth transitions

**Menu Items Structure**:
```javascript
[
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'orders', label: 'Orders', icon: ShoppingCart },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'add-product', label: 'Add Product', icon: Plus },
]
```

**Styling**:
- Dark gradient background (charcoal)
- Gold accent for active item
- Hover effects on menu items
- Responsive width adjustments

---

### Header Component
**Location**: `src/AdminDashboard/components/Header.js`

**Features**:
- Search bar (hidden on mobile)
- Notifications bell with red dot
- User profile section
- Mobile menu toggle button
- Glassmorphism effect
- Sticky positioning

**Elements**:
- Menu toggle (mobile)
- Search input with icon
- Notification bell
- Admin name & role
- Avatar circle
- Logout functionality

---

## 🎨 Styling System

### Tailwind Customization
**File**: `tailwind.config.js`

**Extended Colors**:
```javascript
charcoal, cream, midnight, gold   // Premium palette
```

**Custom Utilities**:
```javascript
backdropBlur: { glass: '10px' }   // Glassomorphism
boxShadow: {
  glass: '...',                    // Layered shadows
  soft: '...',                     // Subtle shadows
  // ...
}
```

### Global Styles
**File**: `src/index.css`

**Tailwind Imports**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Custom Classes**:
- `.glass-effect` - Glassomorphism styling
- `.soft-shadow` - Soft shadow effects
- `.transition-smooth` - Smooth transitions

**Font Imports**:
- Inter (body text)
- Playfair Display (headings)

---

## 🎬 Animation Specifications

### Framer Motion Usage

**Page Entrance**: 
```javascript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3 }}
```

**Card Entrance**:
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}
```

**Hover Effects**:
```javascript
whileHover={{ y: -4, scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

**Stagger Effect**:
```javascript
variants={{ 
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}
```

---

## 📊 Chart Configurations

### Recharts Setup

**Area Chart** (Revenue Trend):
- X-Axis: Month names
- Y-Axis: Revenue amounts
- Areas: Revenue (solid), Target (dashed line)
- Tooltip: Custom styling
- Colors: Gold and Midnight blue

**Bar Chart** (Weekly Sales):
- X-Axis: Day names
- Y-Axis: Sales/Returns count
- Bars: Sales and Returns comparison
- Colors: Gold and Midnight blue
- Rounded corners on bars

**Data Structure Example**:
```javascript
[
  { name: 'Jan', revenue: 45000, target: 50000 },
  { name: 'Feb', revenue: 52000, target: 50000 },
  // ...
]
```

---

## 🔄 State Management

### AdminDashboard.js State
```javascript
const [activeTab, setActiveTab] = useState('overview');      // Current page
const [sidebarOpen, setSidebarOpen] = useState(true);       // Mobile sidebar
```

### Component-Level State

**Inventory Management**:
```javascript
const [searchTerm, setSearchTerm] = useState('');           // Search query
const [filterCategory, setFilterCategory] = useState('all'); // Category filter
```

**Order Tracking**:
```javascript
const [searchTerm, setSearchTerm] = useState('');           // Order/customer search
const [filterStatus, setFilterStatus] = useState('all');    // Order status filter
```

**Add Product**:
```javascript
const [formData, setFormData] = useState({                  // Form data
  name: '', category: '', price: '', description: '',
  sizes: [], colors: [], image: null
});
```

---

## 🎯 How to Extend

### Add a New Page

1. Create new file in `src/AdminDashboard/views/`
   ```jsx
   const MyNewPage = () => {
     return <motion.div>...</motion.div>
   }
   ```

2. Add to Sidebar menu in `Sidebar.js`
   ```javascript
   { id: 'mypage', label: 'My Page', icon: MyIcon }
   ```

3. Handle in `AdminDashboard.js`
   ```javascript
   case 'mypage':
     return <MyNewPage />;
   ```

4. Create route (optional) or use same route with tab system

### Add a New Component

1. Create in `src/AdminDashboard/components/MyComponent.js`
2. Export and import where needed
3. Pass required props
4. Style with Tailwind classes

### Modify Colors

1. Edit `tailwind.config.js`
2. Update color values
3. Restart dev server
4. All components update automatically

---

## 📱 Responsive Breakpoints

All components use Tailwind's responsive classes:

- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+

**Example**:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Single column on mobile, 2 on tablet, 4 on desktop */}
</div>
```

---

## 🚀 Performance Optimization

### Already Implemented:
✅ Lazy component rendering
✅ Efficient re-rendering with React.memo
✅ Optimized Framer Motion animations
✅ CSS class optimization with Tailwind
✅ Minimal bundle size
✅ Fast page transitions

### Can Be Added:
📌 React.lazy() for code splitting
📌 React Query for data caching
📌 Image optimization
📌 Virtual scrolling for large lists

---

## 🧪 Testing Recommendations

### Component Testing:
- Test each view independently
- Mock data with sample values
- Test responsive behavior
- Verify animations work smoothly

### Integration Testing:
- Navigation between pages
- Form submissions
- Data filtering/searching
- Mobile responsiveness

### Browser Testing:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS, Android)
- Different screen orientations

---

## 📚 Additional Resources

**Icons**: [Lucide Icon Gallery](https://lucide.dev)
**Colors**: Use [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
**Animations**: [Framer Motion Examples](https://www.framer.com/motion/examples/)
**Charts**: [Recharts Gallery](https://recharts.org/examples)

---

**Last Updated**: February 17, 2026
**Version**: 1.0 Production Ready
