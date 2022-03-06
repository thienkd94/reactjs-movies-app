import Trending from '../features/MoviesApp/components/Trending.jsx'
import Movies from '../features/MoviesApp/components/Movies.jsx'
import TVSeries from '../features/MoviesApp/components/TVSeries.jsx'
import Detail from '../features/MoviesApp/components/Detail.jsx'
import ListByGenre from '../features/MoviesApp/components/ListByGenre.jsx'

const routes = [
    {
        path: 'trending',
        text: 'Xu hướng',
        element: <Trending />,
    },
    {
        path: 'movies',
        text: 'Phim',
        element: <Movies />,
    },
    {
        path: 'tv-series',
        text: 'Chương trình truyền hình',
        element: <TVSeries />,
    },
    {
        path: '/:type/:id',
        element: <Detail />,
    },
    {
        path: '/:type/genre/:id',
        element: <ListByGenre />,
    },
]

export default routes
