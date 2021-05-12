import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

export type Menu = {
  key: string;
  title: string;
  icon: string;

  children?: Menu[];
  path?: string;
}

export const ROUTER_PATH = [{
  path: '/page1',
  component: Page1
}, {
  path: '/page2',
  component: Page2
}, {
  path: '/page2/:tabId',
  component: Page2
}];

export const SIDER_MENUS: Menu[] = [{
  key: 'parent1',
  title: 'parent1',
  icon: '',
  children: [{
    key: '/page1',
    title: 'page1',
    icon: '',
    path: '/page1'
  }]
}, {
  key: '/page2/:tabId',
  title: 'page2',
  icon: '',
  path: '/page2/1'
}];
