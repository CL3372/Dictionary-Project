import { useState } from 'react'
import "./App.css";
import Dictionary from "./components/Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="sunset" />
      <footer className="App-footer">
        Coded by Carla Louro and open-sourced on <a href="https://github.com/your-github-username">GitHub</a>
      </footer>
    </div>
  );
}
