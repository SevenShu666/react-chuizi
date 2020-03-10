import Loadable from 'react-loadable';
import LoadingComponent from '../components/loadingComponent'

export const routes=[
    {
        path:'/app',
        component:Loadable({
            loader:()=>import('../App'),
            loading:LoadingComponent
        })
    },
    {
        path:'/404',
        component:Loadable({
            loader:()=>import('../components/NotFound'),
            loading:LoadingComponent
        })
    },
    {
        path:'/login',
        component:Loadable({
            loader:()=>import('../components/login'),
            loading:LoadingComponent
        })
    }
]

export const subRoutes=[
    {
        path:'/app/home',
        component:Loadable({
            loader:()=>import('../components/home'),
            loading:LoadingComponent
        })
    },
    {
        path:'/app/category',
        component:Loadable({
            loader:()=>import('../components/category'),
            loading:LoadingComponent
        })
    },
    {
        path:'/app/shop',
        component:Loadable({
            loader:()=>import('../components/shop'),
            loading:LoadingComponent
        })
    },
    {
        path:'/app/user',
        component:Loadable({
            loader:()=>import('../components/user'),
            loading:LoadingComponent
        })
    }
]
