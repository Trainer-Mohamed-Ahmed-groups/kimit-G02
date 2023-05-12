import logo from "./assets/logo.svg";
import "./App.scss";
import NavClass from "./components/NavClass";
import Home from "./views/Home";

function App() {
    var myName = "Mohamed Ahmed";
    return (
        <div className="App" style={{backgroundColor: "#EEE"}}>
            
            <NavClass/>
            <Home />
            <div>{myName}</div>
            <div>{Math.random()}</div>
            <img src={logo} alt="" width="100" />
        </div>
    );
}

export default App;
