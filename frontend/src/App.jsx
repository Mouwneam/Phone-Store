import NavBar from "./components/NavBar";
import "./index.css";
import { Home, NotFoundPage, CreatePage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      errorElement: <NotFoundPage></NotFoundPage>
    },
    {
      path: '/CreatePage',
      element: <CreatePage></CreatePage>
    }
  ]);

  

  return(
    <div className="text-2xl ">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )  
}

export default App
