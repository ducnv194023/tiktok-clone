import HomePage from '@/pages/Home';
import FollowingPage from '@/pages/Following';
import ProfilePage from '@/pages/Profile';


export const publicRoutes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/following',
        component: FollowingPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
]

export const privateRoutes = [

]
