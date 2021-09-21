//css
import './App.css';

//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/SideBar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widget/Widget";
import Login from "./components/Login/Login";
//DataLayer
import {useStateValue} from "./StateProvider";

function App() {
  const [{user},dispatch] = useStateValue();

  return (
  <div className="App">
    {!user ? <Login/> : (
      <>
        <Header/>

      <div className="app__body">
      <Sidebar/>
      <Feed />
      <Widgets />
      </div>
      </>
      )}
  </div>
  );
}

export default App;
