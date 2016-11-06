import home from './home/home';
import about from './about/about';

export default [{
    path: '/', redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/example',
    component: {
      template: '<layout> Example minimal route </layout>'
    }
  }
];
