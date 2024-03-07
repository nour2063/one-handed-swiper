import './App.css';
import {Menu} from "./components/Menu";
import {Nav} from "./components/Nav";

function App() {

  return (
    <div className={'App'}>
        <Menu/>
        <Nav keyCount={9}/>
    </div>
  );
}

export default App;
