import "./App.css";
import Dictionary from "./components/Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="sunset" />
      <footer className="App-footer">
        Coded by <strong>Carla Louro</strong> • 
        <a href="https://github.com/CL3372/Dictionary-Project" target="_blank" rel="noopener noreferrer">open Sourced on Github</a> • 
        rendered on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>
      </footer>
    </div>
  );
}
