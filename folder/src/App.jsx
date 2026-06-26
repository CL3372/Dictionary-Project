import "./App.css";
import Dictionary from "./components/Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="sunset" />
      <footer className="App-footer">
        Coded by <a href="https://www.shecodes.io/learn/workshops/coding#" target="_blank" rel="noopener noreferrer"><strong>Carla Louro</strong></a> • 
        <a href="https://github.com/CL3372/Dictionary-Project" target="_blank" rel="noopener noreferrer">open Sourced on Github</a> • 
        rendered on <a href="https://vercel.com/carla-louro-s-projects" target="_blank" rel="noopener noreferrer">Vercel</a>
      </footer>
    </div>
  );
}
