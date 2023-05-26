import "./App.scss";
import Counter from "./components/Counter";
import CounterTwo from "./components/Counter2";
import UpdateAll from "./views/UpdateAll";
// import ConditionalRender from "./views/ConditionalRender";
import ViewData from "./views/ViewData";
function App() {
    var courseName = "React course from Kimit";
    return (
        <div className="App">
            <h1>{courseName}</h1>
            {/* <ConditionalRender /> */}
            {/* <ViewData /> */}
            {/* <UpdateAll /> */}
            {/* <Counter /> */}
            <CounterTwo />
            <CounterTwo />
        </div>
    );
}

export default App;
