export default {
    path : '/Movie' ,
    component : () => import('@/views/Movie'),
    children : [
        {
           path : 'City',
           component : () => import('@/components/City')
        },
        {
            path : 'NowPlaying',
            component : () => import('@/components/NowPlaying')
         },
         {
            path : 'Search',
            component : () => import('@/components/Search')
         },
         {
            path : 'ComingSoon',
            component : () => import('@/components/ComingSoon')
         }
        ]

    
}