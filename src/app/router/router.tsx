import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";
import ForecastPage from "../../pages/ForecastPage/ForecastPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <SearchPage/>
    },
    {
        path: 'ForecastPage',
        element: <ForecastPage/>
    }
])

export default router