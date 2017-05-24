export const routes = [
    { 
        path: '/', 
        name: 'home',
        
    },
    { 
        path: '/projects/:slug', 
        name: 'project',
        component: resolve => require(['./components/ProjectBody.vue'], resolve)
    }
]