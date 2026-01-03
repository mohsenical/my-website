import { RouterProvider } from "react-router/dom"
import router from "./utils/routes"
import AosAnimation from "./utils/AosAnimation"



function App() {

  return (
    <>
      <RouterProvider router={router} />
      <AosAnimation />
    </>
  )
}

export default App
