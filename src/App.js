import Owen from "./components/owen";
import Abhineeth from "./components/abhineeth";
import Opey from "./components/opey";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Checklick 2</h1>
                <h2>Meet the team</h2>
            </header>
            <Owen/>
            <Abhineeth/>
            <Opey/>
        </div>
    );
}

export default App;
