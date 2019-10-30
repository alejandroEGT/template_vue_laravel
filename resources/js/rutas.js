
import Outer from './components/outer.vue';
import HomeComponent from './components/Home.vue';
import CreateComponent from './components/Create.vue';
// import IndexComponent from './components/IndexComponent.vue';
// import EditComponent from './components/EditComponent.vue';

 import Auth from "./components/auth/auth.vue";
 import Index from './components/auth/index.vue';
 import MiPerfil from './components/auth/perfil.vue';

const routes = [
  {
    path: '/',
      component: Outer,
      name:'Admin',
      redirect:'home',
      iconCls:'el-icon-message',
      meta:{auth:false},

      children:[
         {
            name: 'home',
            path: '/',
            component: HomeComponent
        },
        {
            name: 'create',
            path: '/create',
            component: CreateComponent
        },
         
          //{path: '/terminos',name: 'terminos',component: Terminos,meta: { auth: false }},
      ] 
  },
 
 {
    path: '/home',
    component: Auth,
    name: 'Administration',
    redirect:'index',
    iconCls: 'el-icon-message',
    meta: {auth: true},
    children: [
        { path: '/index', component: Index, name: 'Index' },
        { path: '/mi-perfil', component: MiPerfil, name: 'miPerfil' },
    ]
},
  // {
  //     name: 'posts',
  //     path: '/posts',
  //     component: IndexComponent
  // },
  // {
  //     name: 'edit',
  //     path: '/edit/:id',
  //     component: EditComponent
  // }
];

export default routes;