import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <SearchPage/>
    },

])

export default router