import { RouterProvider } from "react-router/dom"
import router from "./configs/routes"
import Header from "./components/modules/Header/Header"



function App() {

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
