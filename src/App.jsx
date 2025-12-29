import { RouterProvider } from "react-router/dom"
import router from "./utils/routes"
import Header from "./components/modules/Header/Header"
import AosAnimation from "./utils/AosAnimation"



function App() {

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <AosAnimation />
    </>
  )
}

export default App
