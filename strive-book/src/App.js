import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./componenets/MyNav"
import MyFooter from "./componenets/MyFooter"
import Wellcome from "./componenets/Welcome"

function App() {
  return (
    <div>
      <MyNav brand="Strivebook" />
      <MyFooter />
      <Wellcome />
    </div>
  )
}

export default App
