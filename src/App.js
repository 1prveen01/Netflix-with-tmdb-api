
import './App.scss';
import './Components/Home/Home.scss';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home / >}></Route>
      </Routes>
    </Router>
  );
}

export default App;
