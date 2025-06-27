import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  CheckSquare, 
  MessageCircle, 
  DollarSign, 
  Package, 
  BarChart3, 
  Settings, 
  Bell, 
  Plus,
  MapPin,
  Phone,
  Camera,
  Upload,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Weather
} from 'lucide-react';

const ContractorBuddy = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data - in real app this would come from Firebase
  const dashboardData = {
    activeJobs: 12,
    teamOnline: 8,
    revenueMTD: 45230,
    tasksDue: 23,
    weatherTemp: 78,
    weatherCondition: 'Sunny'
  };

  const jobs = [
    {
      id: 1,
      name: 'Johnson Kitchen Remodel',
      address: '1234 Oak St',
      status: 'In Progress',
      progress: 80,
      team: ['Mike', 'Sarah'],
      budget: 12500,
      spent: 9800,
      dueDate: 'Oct 15',
      nextTask: 'Install countertops'
    },
    {
      id: 2,
      name: 'Smith Master Bath',
      address: '5678 Pine Ave',
      status: 'Planning',
      progress: 20,
      team: ['Alex', 'Tom'],
      budget: 18000,
      spent: 3200,
      dueDate: 'Nov 1',
      nextTask: 'Permit approval pending'
    },
    {
      id: 3,
      name: 'Davis Plumbing Repair',
      address: '9012 Elm Dr',
      status: 'Completed',
      progress: 100,
      team: ['Carlos'],
      budget: 3500,
      spent: 3150,
      dueDate: 'Sep 28',
      profit: 350
    }
  ];

  const team = [
    {
      id: 1,
      name: 'Mike Rodriguez',
      role: 'Lead Carpenter',
      phone: '(713) 555-0123',
      status: 'online',
      location: 'Johnson Kitchen',
      checkedIn: '8:15 AM',
      skills: ['Framing', 'Finish Work', 'Flooring'],
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Tile Specialist',
      phone: '(713) 555-0456',
      status: 'break',
      location: 'Smith Bathroom',
      checkedIn: 'Break until 1:00 PM',
      skills: ['Tiling', 'Waterproofing', 'Design'],
      rating: 5
    },
    {
      id: 3,
      name: 'Alex Thompson',
      role: 'Electrician',
      phone: '(713) 555-0789',
      status: 'offline',
      location: 'Available',
      checkedIn: 'Yesterday 5:30 PM',
      skills: ['Electrical', 'Lighting', 'Code Compliance'],
      rating: 4
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Install Kitchen Countertops',
      job: 'Johnson Kitchen',
      assignee: 'Mike Rodriguez',
      priority: 'high',
      status: 'in-progress',
      dueDate: 'Today',
      dependencies: ['Cabinets installed', 'Plumbing roughed']
    },
    {
      id: 2,
      title: 'Electrical Rough-In',
      job: 'Smith Bathroom',
      assignee: 'Alex Thompson',
      priority: 'medium',
      status: 'pending',
      dueDate: 'Tomorrow',
      dependencies: ['Framing complete', 'Inspection scheduled']
    },
    {
      id: 3,
      title: 'Order Bathroom Fixtures',
      job: 'Smith Bathroom',
      assignee: 'Sarah Johnson',
      priority: 'low',
      status: 'completed',
      dueDate: 'Sep 25',
      cost: 1247.99
    }
  ];

  const StatusBadge = ({ status }) => {
    const colors = {
      online: 'bg-green-100 text-green-800',
      break: 'bg-yellow-100 text-yellow-800',
      offline: 'bg-red-100 text-red-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      planning: 'bg-purple-100 text-purple-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
      </span>
    );
  };

  const PriorityBadge = ({ priority }) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[priority]}`}>
        {priority.toUpperCase()}
      </span>
    );
  };

  const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  const MetricCard = ({ title, value, change, icon: Icon, color = 'blue' }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`flex-shrink-0 p-3 rounded-md bg-${color}-100`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="inline h-4 w-4 mr-1" />
              {change}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          {currentTime.toLocaleString()}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Jobs"
          value={dashboardData.activeJobs}
          change="+2"
          icon={CheckSquare}
          color="blue"
        />
        <MetricCard
          title="Team Online"
          value={`${dashboardData.teamOnline}/15`}
          change="5 sites"
          icon={Users}
          color="green"
        />
        <MetricCard
          title="Revenue MTD"
          value={`$${dashboardData.revenueMTD.toLocaleString()}`}
          change="+12%"
          icon={DollarSign}
          color="purple"
        />
        <MetricCard
          title="Tasks Due"
          value={dashboardData.tasksDue}
          change="5 late"
          icon={Clock}
          color="orange"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="text-blue-600">🏠</div>
              <div>
                <p className="font-medium">Johnson Kitchen - 9:00 AM</p>
                <p className="text-sm text-gray-500">Mike, Sarah</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="text-purple-600">🏗️</div>
              <div>
                <p className="font-medium">Smith Bathroom - 11:30 AM</p>
                <p className="text-sm text-gray-500">Alex, Tom</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="text-green-600">🔧</div>
              <div>
                <p className="font-medium">Davis Plumbing - 2:00 PM</p>
                <p className="text-sm text-gray-500">Carlos</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="text-orange-600">📋</div>
              <div>
                <p className="font-medium">Weekly Team Meeting - 4:00 PM</p>
                <p className="text-sm text-gray-500">All Team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Camera className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="text-sm">Mike uploaded progress photos</p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <p className="text-sm">Sarah completed tile work</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MessageCircle className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <p className="text-sm">New message from Alex</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Package className="h-5 w-5 text-orange-600 mt-1" />
              <div>
                <p className="text-sm">Materials delivered to site</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <DollarSign className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <p className="text-sm">Invoice #1234 paid</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Weather className="h-8 w-8" />
            <div>
              <p className="text-2xl font-bold">{dashboardData.weatherTemp}°F</p>
              <p className="text-blue-100">{dashboardData.weatherCondition}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-blue-100">Perfect for outdoor work</p>
            <p className="text-sm text-blue-200">UV Index: 6 | Humidity: 65%</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderJobs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Jobs</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            <span>New Job</span>
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
            Filter
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">
                  {job.status === 'Completed' ? '✅' : job.status === 'Planning' ? '🏗️' : '🏠'}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.name}</h3>
                  <p className="text-gray-500 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.address}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                  View
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                  ⋯
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <StatusBadge status={job.status.toLowerCase().replace(' ', '-')} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Team</p>
                <p className="font-medium">{job.team.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Due Date</p>
                <p className="font-medium">{job.dueDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Budget</p>
                <p className="font-medium">${job.budget.toLocaleString()}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress: {job.progress}%</span>
                <span>Spent: ${job.spent.toLocaleString()}</span>
              </div>
              <ProgressBar progress={job.progress} />
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
