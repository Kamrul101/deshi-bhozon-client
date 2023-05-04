import { Navigate, createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home/Chef";
import MainLayout from "../Layouts/MainLayout";
import Chef from "../Pages/Home/Chef";
import ChefDetailsLayout from "../Layouts/ChefDetailsLayout";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Recipe from "../Pages/ChefDetails/Recipe/Recipe";
import RecipeLayout from "../Layouts/RecipeLayout";
import RegisterLayOut from "../Layouts/RegisterLayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Shared/Blog/Blog";
import Error from "../Pages/Shared/Error/Error";

const router = createBrowserRouter([
    
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Chef></Chef>,
                loader: ()=> fetch('https://recipe-hunter-server-one.vercel.app/chef')
            }
        ]
    },
    {
        path:'chefDetails',
        element:<PrivateRoute>
            <ChefDetailsLayout></ChefDetailsLayout>
            </PrivateRoute>,
        children:[
            {
                path:':id',
                element:<ChefDetails></ChefDetails>,
                loader: ({params})=>fetch(`https://recipe-hunter-server-one.vercel.app/chef/${params.id}`)
            } , 
            
        ]
    },
    {
        path:'recipe',
        element:<RecipeLayout></RecipeLayout>,
        children:[
            
                {
                    path:':id',
                    element:<Recipe></Recipe>,
                    loader: ({params})=> fetch(`https://recipe-hunter-server-one.vercel.app/recipeSingle/${params.id}`)
                }
            
        ]
    },
    {
        path:'/',
        element:<RegisterLayOut></RegisterLayOut>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path: 'blog',
                element:<Blog></Blog>
            }
        ]
    },
])
export default router;