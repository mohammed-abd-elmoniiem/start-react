

// import router from './routes/router'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/main-layout'
import Home from './pages/home'
import About from './pages/about'



 

function App() {

 

  const router = createBrowserRouter([
    {path:'/',element:<MainLayout></MainLayout>,
      children:[
        {path:'',element:<Home/>},
        {path:'home',element:<Home/>},
        {path:'about',element:<About/>},
        {path:'portfolio',element:<h2>portfolio</h2>},



      ]
    },
    {path:'/home',element:<h1>home</h1>}

    ,
    {path:'*',element:<h1>wrong path</h1>}

  ])
 





  return (
    <>

    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
