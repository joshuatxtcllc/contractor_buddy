# contractor_buddy
A comprehensive contractor management system designed to streamline operations, reduce communication overhead, and improve project visibility for construction businesses.
# Contractor Buddy 🏗️

A comprehensive contractor management system designed to streamline operations, reduce communication overhead, and improve project visibility for construction businesses.

## 🚀 Features

### Core Management
- **Real-time Job Tracking** - Monitor all active projects with live status updates
- **Team Management** - Track team members, assignments, and availability
- **Task Assignment** - Assign specific tasks to team members with deadlines
- **Progress Monitoring** - Visual progress tracking with photo uploads
- **Location Tracking** - GPS-enabled job site check-ins

### Communication & Collaboration
- **Internal Messaging** - Reduce phone calls with built-in chat system
- **File Sharing** - Share blueprints, photos, and documents
- **Notification System** - Smart alerts for important updates
- **Question & Answer Hub** - Centralized Q&A to reduce repetitive calls

### Financial Management
- **Job Estimation** - Houston-area pricing database for accurate quotes
- **Expense Tracking** - Track materials, labor, and overhead costs
- **Invoice Generation** - Professional invoice creation and management
- **Basic Accounting** - Simple bookkeeping without QuickBooks complexity
- **Profit Analysis** - Job profitability tracking and reporting

### Inventory & Materials
- **Material Tracking** - Monitor stock levels across job sites
- **Purchase Orders** - Generate and track material orders
- **Vendor Management** - Maintain supplier contacts and pricing
- **Tool Inventory** - Track tools and equipment across teams

### Reporting & Analytics
- **Dashboard Overview** - Real-time business metrics
- **Performance Reports** - Team and project performance analytics
- **Financial Reports** - Profit/loss, cash flow, and expense reports
- **Custom Reports** - Generate reports for specific needs

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **File Storage**: Firebase Storage
- **Maps**: Google Maps API
- **Payments**: Stripe Integration
- **Deployment**: Netlify
- **Development**: Vite

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account
- Google Maps API key
- Stripe account (for payments)

### Local Development
```bash
# Clone the repository
git clone https://github.com/your-username/contractor-buddy.git
cd contractor-buddy

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your API keys to .env.local
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

# Start development server
npm run dev
```

### Production Deployment on Netlify

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

3. **Configure Custom Domain**
   - Add your custom domain in Netlify settings
   - Configure DNS records as provided by Netlify

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Authentication (Email/Password, Google)
3. Set up Firestore database
4. Configure Storage bucket
5. Add your web app configuration to `.env.local`

### Google Maps Setup
1. Enable Google Maps JavaScript API
2. Enable Places API
3. Enable Geocoding API
4. Restrict API key to your domain

### Stripe Setup
1. Create Stripe account
2. Get publishable and secret keys
3. Set up webhooks for payment processing

## 🏗️ Project Structure

```
contractor-buddy/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   ├── store/              # Redux store
│   ├── types/              # TypeScript types
│   ├── utils/              # Utility functions
│   └── App.tsx             # Main application component
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 📱 Key Screens

1. **Dashboard** - Overview of all jobs, team status, and key metrics
2. **Jobs** - Create, manage, and track construction projects
3. **Team** - Manage team members, assignments, and schedules
4. **Tasks** - Assign and track specific tasks across projects
5. **Messaging** - Internal communication system
6. **Estimates** - Create quotes using Houston-area pricing data
7. **Invoices** - Generate and send professional invoices
8. **Inventory** - Track materials and tools
9. **Reports** - Financial and operational reporting
10. **Settings** - User preferences and system configuration

## 🎯 Houston-Specific Features

- **Local Pricing Database** - Pre-loaded with Houston-area construction costs
- **Permit Integration** - Links to Houston building permit systems
- **Weather Integration** - Houston weather data for job planning
- **Local Vendor Directory** - Houston-area supplier contacts
- **Zone-based Pricing** - Different pricing for Houston neighborhoods

## 🔐 Security Features

- **Role-based Access Control** - Different permissions for owners, managers, workers
- **Data Encryption** - All sensitive data encrypted at rest and in transit
- **Audit Logging** - Track all system changes and user actions
- **Secure File Upload** - Virus scanning and file type validation
- **Two-Factor Authentication** - Enhanced security for admin accounts

## 📊 Analytics & Reporting

- **Real-time Dashboards** - Live project and financial metrics
- **Custom Reports** - Generate reports for specific time periods and criteria
- **Export Options** - PDF, Excel, and CSV export capabilities
- **Data Visualization** - Charts and graphs for better insights

## 🚀 Performance Optimizations

- **Lazy Loading** - Components loaded on demand
- **Image Optimization** - Automatic image compression and resizing
- **Caching Strategy** - Intelligent caching for faster load times
- **Progressive Web App** - Offline functionality and app-like experience

## 🔄 Backup & Recovery

- **Automatic Backups** - Daily automated backups to cloud storage
- **Version Control** - Track changes to important documents
- **Data Recovery** - Easy restoration of deleted or corrupted data

## 📞 Support

For technical support or feature requests:
- Email: support@contractorbuddy.com
- Documentation: https://docs.contractorbuddy.com
- GitHub Issues: https://github.com/your-username/contractor-buddy/issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

---

Built with ❤️ for contractors who want to focus on building, not paperwork.
