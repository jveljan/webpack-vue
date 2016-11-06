import dashboard from './dashboard/dashboard';
import dashboardReports from './dashboard/reports/reports';
import settings from './settings/settings';
import login from './login/login';
import auth from 'app/service/auth';

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default [{
    path: '/login',
    component: login,
    beforeEnter(to, from, next) {
      if (auth.loggedIn()) {
        next('/dashboard');
      } else {
        next();
      }
    }
  }, {
    path: '/logout',
    beforeEnter (to, from, next) {
      auth.logout();
      next('/login');
    }
  }, {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/dashboard/reports',
    component: dashboardReports,
    beforeEnter: requireAuth
  },
  {
    path: '/settings',
    component: settings,
    beforeEnter: requireAuth
  },
  {
    path: '/profile',
    component: {
      template: '<layout> Profile </layout>'
    },
    beforeEnter: requireAuth
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
