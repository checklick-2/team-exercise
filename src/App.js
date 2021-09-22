import Owen from "./components/owen";
import Abhineeth from "./components/abhineeth";
import "./App.css";
import Mathew from "./components/mathew";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Checklick 2</h1>
                <h2>Meet the team</h2>
            </header>
            <Owen/>
            <Abhineeth/>
            <Mathew/>
        </div>
    );
}

export default App;
