import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./componenets/MyNav"
import MyFooter from "./componenets/MyFooter"
import Wellcome from "./componenets/Welcome"
import LatestRelease from "./componenets/LatestRelease"
import WarningSign from "./componenets/WarningSign"
import MyBadge from "./componenets/MyBadge"
import SingleBook from "./componenets/SingleBook"
import BookList from "./componenets/BookList"
import history from "./data/history.json"

function App() {
  return (
    <div>
      <MyNav brand="Strivebook" />
      <MyBadge text="I'm the Badge!!" color="primary" />
      <WarningSign text="I'm Warning Sign!!" />
      <Wellcome />
      <SingleBook book={history[0]} />
      <BookList books={history} />

      {/* <LatestRelease /> */}
      {/* <MyFooter /> */}
    </div>
  )
}

export default App
