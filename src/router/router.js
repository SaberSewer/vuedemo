const routes = [
    {
        path: "/foo",
        component: () => import("@/components/Foo.vue")
    },
    {
        path: '/bar',
        component: () => import("@/components/Bar")
    },
    {
        path: "/dropMenu",
        component: () => import("@/components/DropMenu")
    }
]

export default routes
