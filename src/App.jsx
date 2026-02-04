import { RouterProvider } from "react-router-dom"
import routes from "./Route/route"

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
