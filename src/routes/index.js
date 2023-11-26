import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/upload'
import { HeaderOnly } from '~/components/layout';
const publicRoutes = [
    {path: '/', element: Home},
    {path: '/following', element: Following},
    {path: '/profile', element:Profile},
    {path: '/upload', element:Upload, layout: HeaderOnly}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }