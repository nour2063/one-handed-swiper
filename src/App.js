import './App.css';
import {Menu} from "./components/Menu";
import {Nav} from "./components/Nav";

function App() {

  return (
    <>
        <Menu/>
        <Nav keyCount={9}/>
    </>
  );
}

export default App;
