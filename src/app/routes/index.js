import dashboard from './dashboard/dashboard';
import dashboardReports from './dashboard/reports/reports';
import settings from './settings/settings';

export default [{
    path: '/', redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: dashboard
  },
  {
    path: '/dashboard/reports',
    component: dashboardReports
  },
  {
    path: '/settings',
    component: settings
  },
  {
    path: '/profile',
    component: {
      template: '<layout> Profile </layout>'
    }
  },
  {
    path: '/help',
    component: {
      template: '<layout> Help </layout>'
    }
  },
  {
    path: '/example',
    component: {
      template: '<layout> Example minimal route </layout>'
    }
  }
];
