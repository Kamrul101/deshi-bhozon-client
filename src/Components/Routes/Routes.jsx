import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home/Chef";
import MainLayout from "../Layouts/MainLayout";
import Chef from "../Pages/Home/Chef";
import ChefDetailsLayout from "../Layouts/ChefDetailsLayout";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Chef></Chef>,
                loader: ()=> fetch('http://localhost:5000/chef')
            }
        ]
    },
    {
        path:'chefDetails',
        element:<ChefDetailsLayout></ChefDetailsLayout>,
        children:[
            {
                path:':id',
                element:<ChefDetails></ChefDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
])
export default router;