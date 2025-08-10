# Farm to Tech - Agricultural Marketplace

A modern React-based e-commerce platform connecting local farmers with consumers for fresh, organic produce and agricultural products.

## 🌱 About

Farm to Tech is a comprehensive agricultural marketplace that bridges the gap between local farmers and consumers. The platform enables farmers to showcase their products directly to customers while providing consumers with access to fresh, locally-sourced produce and agricultural goods.

## ✨ Features

### For Consumers
- **Browse Products**: Explore fresh fruits, vegetables, grains, dairy, and organic products
- **Category Filtering**: Shop by product categories (Fruits, Vegetables, Grains, Dairy, Organic, Seasonal)
- **Product Details**: View detailed product information, reviews, and farmer details
- **Shopping Cart**: Add products to cart and manage quantities
- **User Authentication**: Secure login and registration system
- **Order Management**: Track order history and status
- **Profile Management**: Manage personal information and addresses

### For Farmers
- **Farmer Dashboard**: Manage products, view orders, and track sales
- **Product Management**: Add, edit, and remove products from inventory
- **Order Tracking**: Monitor incoming orders and update status
- **Sales Analytics**: View sales performance and customer feedback

### General Features
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Search Functionality**: Find products quickly with search capabilities
- **Organic Certification**: Clear labeling for organic and seasonal products
- **Shipping Information**: Real-time shipping area and delivery estimates
- **Review System**: Customer reviews and ratings for products

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **UI Framework**: React Bootstrap
- **Styling**: Bootstrap 5 + Custom CSS
- **Build Tool**: Vite
- **State Management**: React Context API
- **Authentication**: Local Storage-based auth system

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agri-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
agri-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── ui/            # UI components
│   ├── data/              # Mock data and API services
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions and contexts
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── style.css         # Global styles
├── package.json           # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎯 Key Pages

- **Home Page** (`/`) - Landing page with featured products and categories
- **Product Categories** (`/category/:category`) - Browse products by category
- **Product Details** (`/product/:id`) - Detailed product information
- **Shopping Cart** (`/cart`) - Cart management and checkout
- **User Authentication** (`/login`, `/signup`) - User registration and login
- **Farmer Dashboard** (`/farmer-dashboard`) - Farmer-specific management interface
- **Order Management** (`/orders`) - Order tracking and history
- **User Profile** (`/profile`) - User account management
- **Contact** (`/contact`) - Customer support and information

## 🔧 Configuration

### Environment Variables
Currently, the application uses mock data. For production deployment, you may need to configure:

- API endpoints for backend services
- Authentication service configuration
- Payment gateway integration
- Image storage service

### Customization
- Update `src/data/mockData.ts` to modify product categories and sample data
- Modify `src/style.css` for custom styling
- Update branding in `src/components/layout/Navbar.tsx` and `Footer.tsx`

## 🧪 Testing

The application currently uses mock data for demonstration purposes. To implement testing:

1. Install testing dependencies:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom
   ```

2. Create test files in a `__tests__` directory
3. Run tests with your preferred testing framework

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

Bootstrap 5 grid system ensures consistent layout across all device sizes.

## 🔒 Security Features

- Client-side form validation
- Secure authentication flow
- Protected routes for authenticated users
- Input sanitization

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **Traditional Hosting**: Upload files to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: [Your Name]
- **Design**: Bootstrap 5 Components
- **Icons**: Emoji and Bootstrap Icons

## 📞 Support

For support and questions:
- Email: 
- Phone: +84 382 705 884
- Address: 

## 🔄 Version History

- **v1.0.0** - Initial release with core marketplace functionality
- Features: User authentication, product browsing, cart management, farmer dashboard

---

**Farm to Tech** - Connecting farmers and consumers for a sustainable future! 🌾👨‍🌾
