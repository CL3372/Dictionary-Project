import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (!props.phonetic.text) {
    return null;
  }

  return (
    <div className="Phonetics">
      <span className="phonetic-text">{props.phonetic.text}</span>

      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
    </div>
  );
}
