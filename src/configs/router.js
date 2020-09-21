import Index from '../pages';
import Login from '../pages/login.js';
import Sign from '../pages/sign.js';

// react-router 更新到v4+ 之后 不在允许通过Route标签 进行路由嵌套 而是将其组件化，融入到页面UI 组件中去
export default [
  { // 首页
    path: '/',
    component: Index,
  },
  { // 登陆
    path: '/login',
    component: Login,
  },
  { // 注册
    path: '/sign',
    component: Sign,
  },
]