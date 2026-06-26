import { useState } from 'react'
import "./App.css";
import Dictionary from "./components/Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="sunset" />
      <footer className="App-footer">
        Coded by Your Name and open-sourced on GitHub
      </footer>
    </div>
  );
}
