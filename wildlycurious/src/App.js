import "./App.css";
import Tree from "./components/Tree";

function App() {
  return (
    <div>
      <header>
        <h1>my favorite tree</h1>
      </header>
      <Tree name="Live Oak" description="The livliest of trees" />
    </div>
  );
}

export default App;
